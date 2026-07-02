import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { whyClients, exclusiveReasons, whyHireMe, financialOffer } from "@/data/services";

export const metadata: Metadata = {
  title: "Servicii proprietari",
  description:
    "Servicii pentru proprietari: reprezentare exclusivă, evaluare corectă, strategie de preț și gestionarea integrală a vânzării locuinței.",
};

export default function ServiciiPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="pill" style={{ marginBottom: 16 }}>Servicii</div>
          <h1>Cea mai importantă mutare a ta</h1>
          <p>
            Te ajut să îți vinzi locuința din zona de nord cu o evaluare corectă, în
            condițiile tale, servind un singur interes — al tău — și cu atenție la fiecare
            detaliu al tranzacției.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start", gap: 48 }}>
            <div>
              <SectionTitle eyebrow="De ce" title="De ce ajung clienții la mine" plain />
              <ul className="check-list">
                {whyClients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="panel gold">
              <SectionTitle
                eyebrow="Exclusivitate"
                title="De ce un agent imobiliar exclusiv"
                plain
              />
              <p>
                Un singur interes în tranzacție — al tău. Vânzarea locuinței este una dintre
                cele mai mari decizii din viața ta. Merită un specialist doar de partea ta,
                care nu pendulează între interese.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="num-list">
            {exclusiveReasons.map((r, i) => (
              <div className="num-item" key={r.title}>
                <span className="num-badge">{i + 1}</span>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.text}</p>
                </div>
              </div>
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
            <div className="panel">
              <SectionTitle eyebrow="Transparent" title="Oferta financiară" plain />
              <ul className="check-list">
                {financialOffer.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="cta-band">
            <h2 className="section-title plain">Pregătit să discutăm despre vânzarea ta?</h2>
            <p style={{ maxWidth: 620, margin: "0 auto 24px", color: "#cdd8e2" }}>
              Vânzarea începe cu o conversație. Programează o sesiune consultativă fără
              obligații.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">
                Contactează-mă
              </Link>
              <Link href="/experienta-de-vanzare" className="btn btn-outline">
                Experiența de vânzare
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
