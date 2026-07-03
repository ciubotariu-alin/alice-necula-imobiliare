import type { Metadata } from "next";
import Link from "next/link";
import { IconPlay } from "@/components/icons";
import { experienceIntro, experienceSteps } from "@/data/experience";
import { whyHireMe, financialOffer } from "@/data/services";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Experiența de vânzare",
  alternates: { canonical: "/experienta-de-vanzare" },
  description:
    "Parcursul complet al unei vânzări de succes: consultanță, strategie de preț, pregătirea casei, marketing, negociere și asistență post-tranzacție.",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="pill" style={{ marginBottom: 16 }}>Experiența de vânzare</div>
          <h1>Experiența ta de vânzare</h1>
          <p style={{ letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "0.82rem" }}>
            Consultanță · Strategie · Planificare · Implementare · Promovare · Coordonare ·
            Negociere · Vânzare
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose" style={{ margin: "0 auto" }}>
          <div
            className="panel"
            style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}
          >
            <span
              className="play-badge"
              style={{ width: 48, height: 48, background: "var(--cream)", flex: "none" }}
            >
              <IconPlay style={{ color: "var(--gold-dark)" }} />
            </span>
            <p style={{ margin: 0, fontStyle: "italic", color: "var(--navy)" }}>
              „Dacă nu știi încotro, orice drum te va duce acolo.”
            </p>
          </div>
          <p style={{ fontSize: "1.08rem", color: "#3a3f47" }}>{experienceIntro}</p>
        </div>
      </section>

      <section className="section alt">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="steps">
            {experienceSteps.map((step, i) => (
              <article className="step" key={step.title}>
                <span className="step-num">Pasul {String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                {step.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start", gap: 48 }}>
            <div>
              <SectionTitle eyebrow="Angajament" title="Pentru ce mă angajezi" plain />
              <ul className="check-list">
                {whyHireMe.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="panel gold">
              <SectionTitle eyebrow="Transparent" title="Oferta financiară" plain />
              <ul className="check-list">
                {financialOffer.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link href="/contact" className="btn btn-navy">
              Începe cu o conversație
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
