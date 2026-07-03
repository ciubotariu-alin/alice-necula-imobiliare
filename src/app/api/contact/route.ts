import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

// Primește datele din formularul de contact și le trimite pe email prin Resend.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { nume, telefon, email, zona, mesaj, website } = body as Record<string, string>;

    // Anti-spam (honeypot): un câmp ascuns care trebuie să rămână gol.
    // Dacă e completat, e un robot — răspundem OK dar nu trimitem nimic.
    if (website) return NextResponse.json({ ok: true });

    if (!nume || !telefon) {
      return NextResponse.json(
        { ok: false, error: "Te rog completează numele și telefonul." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Serviciul de email nu este încă configurat." },
        { status: 500 },
      );
    }

    const to = process.env.CONTACT_TO || "contact@alicenecula.ro";
    const from = process.env.CONTACT_FROM || "Formular site <onboarding@resend.dev>";

    const text = [
      `Nume: ${nume}`,
      `Telefon: ${telefon}`,
      email ? `Email: ${email}` : null,
      zona ? `Zona proprietății: ${zona}` : null,
      "",
      "Mesaj:",
      mesaj || "(fără detalii suplimentare)",
    ]
      .filter((l) => l !== null)
      .join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email || undefined,
        subject: `Solicitare nouă de pe site — ${nume}`,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "Trimiterea a eșuat. Încearcă din nou sau sună direct." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { ok: false, error: "A apărut o eroare neașteptată. Încearcă din nou." },
      { status: 500 },
    );
  }
}
