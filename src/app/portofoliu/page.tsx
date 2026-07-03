import type { Metadata } from "next";
import Link from "next/link";
import { listedProperties, soldProperties } from "@/data/properties";
import { neighborhoods } from "@/data/neighborhoods";
import PropertyCard from "@/components/PropertyCard";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Portofoliu",
  alternates: { canonical: "/portofoliu" },
  description:
    "Proprietăți rezidențiale listate exclusiv și tranzacții finalizate în zona de nord a Bucureștiului.",
};

export default function PortofoliuPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="pill" style={{ marginBottom: 16 }}>Portofoliu</div>
          <h1>Proprietăți & cartiere</h1>
          <p>Proprietăți listate exclusiv, tranzacții finalizate și zonele pe care le cunosc în detaliu.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Disponibile" title="Proprietăți listate exclusiv" />
          <div className="grid grid-3">
            {listedProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionTitle
            eyebrow="Zonele mele"
            title="Cunosc cartierele, nu doar harta"
            lead="Zona de nord a sectorului 1, cartier cu cartier."
          />
          <div className="grid grid-2">
            {neighborhoods.map((h) => (
              <div className="panel" id={h.slug} key={h.slug} style={{ scrollMarginTop: 120 }}>
                {h.image && <img src={h.image} alt={h.name} className="hood-thumb" />}
                <h3 style={{ fontSize: "1.15rem" }}>{h.name}</h3>
                <p style={{ color: "var(--muted)", margin: 0 }}>{h.intro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Rezultate" title="Proprietăți vândute" />
          <div className="grid grid-3">
            {soldProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
          <div style={{ marginTop: 36, textAlign: "center" }}>
            <Link href="/contact" className="btn btn-navy">
              Vrei să îți listezi proprietatea?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
