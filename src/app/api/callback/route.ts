import { type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

// Pas 2 din autentificare: GitHub ne trimite înapoi cu un cod, îl schimbăm pe un
// token și îl transmitem panoului de administrare (Decap CMS) prin postMessage.
export async function GET(req: NextRequest) {
  const code = new URL(req.url).searchParams.get("code");
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  let message: string;

  if (!code || !clientId || !clientSecret) {
    message = `error:${JSON.stringify({ message: "Configurare incompletă sau cod lipsă." })}`;
  } else {
    try {
      const res = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
      });
      const data = (await res.json()) as { access_token?: string; error?: string };

      message = data.access_token
        ? `success:${JSON.stringify({ token: data.access_token, provider: "github" })}`
        : `error:${JSON.stringify({ message: data.error || "Nu am putut obține token-ul." })}`;
    } catch {
      message = `error:${JSON.stringify({ message: "Eroare de rețea la autentificare." })}`;
    }
  }

  const payload = `authorization:github:${message}`;
  const html = `<!doctype html><html><body><script>
    (function () {
      function receiveMessage(e) {
        window.opener.postMessage(${JSON.stringify(payload)}, e.origin);
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script></body></html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
