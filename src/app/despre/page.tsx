import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import Placeholder from "@/components/Placeholder";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Despre",
  description:
    "Alice Necula — agent imobiliar cu peste 12 ani de experiență în vânzarea locuințelor din zona de nord a Bucureștiului.",
};

const stats = [
  { value: `${site.yearsExperience}+`, label: "ani de experiență" },
  { value: `${site.googleRating}★`, label: `din ${site.googleReviews} recenzii Google` },
  { value: `din ${site.sinceYear}`, label: "activitate neîntreruptă" },
  { value: "100%", label: "reprezentare exclusivă" },
];

const values = [
  {
    title: "Un singur interes — al tău",
    text: "Lucrez exclusiv pentru vânzător. Loial, respectând instrucțiunile, fără conflict de interese, niciodată la mijloc.",
  },
  {
    title: "Decizii bazate pe date reale",
    text: "Competiția directă, dinamica stocului și tranzacțiile relevante — pentru ca decizia de preț să fie a ta, informată.",
  },
  {
    title: "Afaceri din recomandare",
    text: "Cei mai mulți clienți noi provin din recomandări, de aceea fiecare tranzacție trebuie să iasă impecabil.",
  },
];

export default function DesprePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="pill" style={{ marginBottom: 16 }}>Despre</div>
          <h1>Construiesc relații, nu doar tranzacții</h1>
          <p>
            Un agent imobiliar dedicat, care abordează strategic un mod de lucru exclusiv,
            bazat pe seriozitate, încredere și o bună cunoaștere a pieței.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <Placeholder label="Foto Alice Necula" variant="gold" />
            <div className="about-text">
              <SectionTitle eyebrow="Cine sunt" title="Alice Necula" plain />
              <p>
                Cu o carieră de peste {site.yearsExperience} ani și activitate neîntreruptă
                în piața imobiliară din {site.sinceYear}, am acumulat o experiență
                semnificativă în domeniul tranzacțiilor imobiliare pe segmentul rezidențial.
              </p>
              <p>
                Expertiza mea profesională oferă vânzătorilor din zona de nord a
                Bucureștiului un avantaj distinct într-o piață competitivă: evaluare
                corectă, poziționare pe date reale și un proces predictibil, condus în
                interesul tău.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 8 }}>
                <Link href="/servicii" className="btn btn-navy">Serviciile mele</Link>
                <Link href="/contact" className="btn btn-ghost">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="grid grid-4">
            {stats.map((s) => (
              <div className="panel" key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--gold-dark)" }}>
                  {s.value}
                </div>
                <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Valori" title="Cum lucrez" center />
          <div className="grid grid-3">
            {values.map((v) => (
              <div className="panel" key={v.title}>
                <h3 style={{ fontSize: "1.1rem" }}>{v.title}</h3>
                <p style={{ color: "var(--muted)", margin: 0 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
