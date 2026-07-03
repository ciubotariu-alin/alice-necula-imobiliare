import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

// Pas 1 din autentificare: trimite utilizatorul la GitHub pentru a aproba accesul.
export function GET(req: NextRequest) {
  const origin = new URL(req.url).origin;
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;

  if (!clientId) {
    return new NextResponse(
      "Lipsește GITHUB_OAUTH_CLIENT_ID. Configurează variabilele de mediu în Vercel.",
      { status: 500 },
    );
  }

  const authorize = new URL("https://github.com/login/oauth/authorize");
  authorize.searchParams.set("client_id", clientId);
  authorize.searchParams.set("redirect_uri", `${origin}/api/callback`);
  authorize.searchParams.set("scope", "repo");
  authorize.searchParams.set("state", crypto.randomUUID());

  return NextResponse.redirect(authorize.toString());
}
