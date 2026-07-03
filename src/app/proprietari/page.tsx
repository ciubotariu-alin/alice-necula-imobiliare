import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { exclusiveReasons } from "@/data/services";

export const metadata: Metadata = {
  title: "Proprietari",
  alternates: { canonical: "/proprietari" },
  description:
    "Pentru proprietarii care vor să vândă: reprezentare exclusivă, evaluare corectă și un proces predictibil, condus în interesul tău.",
};

const steps = [
  { n: "01", t: "Discuție inițială", d: "Definim împreună obiectivul, contextul și rezultatul dorit." },
  { n: "02", t: "Evaluare & strategie", d: "Poziționăm prețul pe date reale de piață." },
  { n: "03", t: "Pregătire & marketing", d: "Casa devine „produs” și ajunge la cumpărătorii calificați." },
  { n: "04", t: "Negociere & tranzacție", d: "Îți apăr interesele până la închiderea organizată a vânzării." },
];

export default function ProprietariPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="pill" style={{ marginBottom: 16 }}>Proprietari</div>
          <h1>Vinzi cu un specialist doar de partea ta</h1>
          <p>
            Vânzarea locuinței este una dintre cele mai mari decizii din viața ta. Merită
            reprezentare exclusivă, fără conflict de interese.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="De ce exclusiv" title="Patru motive să lucrezi cu mine" center />
          <div className="grid grid-2">
            {exclusiveReasons.map((r, i) => (
              <div className="num-item panel" key={r.title} style={{ alignItems: "center" }}>
                <span className="num-badge">{i + 1}</span>
                <div>
                  <h4 style={{ margin: "0 0 4px" }}>{r.title}</h4>
                  <p style={{ margin: 0, color: "var(--muted)" }}>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionTitle eyebrow="Cum lucrăm" title="Procesul, pas cu pas" center />
          <div className="grid grid-4">
            {steps.map((s) => (
              <div className="panel" key={s.n}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--gold)" }}>
                  {s.n}
                </div>
                <h4 style={{ margin: "6px 0" }}>{s.t}</h4>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.92rem" }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, textAlign: "center" }}>
            <Link href="/experienta-de-vanzare" className="btn btn-ghost">
              Vezi experiența completă de vânzare
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split split-wide">
            <div>
              <SectionTitle eyebrow="Fără obligații" title="Solicită o evaluare" plain />
              <p className="lead">Vânzarea începe cu o conversație.</p>
              <p>Spune-mi câteva detalii despre proprietate și îți răspund cu primii pași.</p>
            </div>
            <div className="panel">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
