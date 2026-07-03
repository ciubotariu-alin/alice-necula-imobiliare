import type { Metadata } from "next";
import { site } from "@/data/site";
import { socialIcons, IconMail, IconPhone, IconPin } from "@/components/icons";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează-o pe Alice Necula pentru o evaluare corectă și o discuție despre vânzarea locuinței tale din zona de nord a Bucureștiului.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="pill" style={{ marginBottom: 16 }}>Contact</div>
          <h1>Vânzarea începe cu o conversație</h1>
          <p>Scrie-mi câteva detalii despre proprietatea ta și îți răspund cu primii pași.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split split-contact">
            <div>
              <SectionTitle eyebrow="Date de contact" title="Hai să vorbim" plain />
              <div style={{ display: "grid", gap: 18, marginTop: 8 }}>
                <a href={`mailto:${site.email}`} className="panel" style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <span className="num-badge" style={{ width: 44, height: 44 }}>
                    <IconMail style={{ width: 20, height: 20 }} />
                  </span>
                  <div>
                    <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
                      Email
                    </div>
                    <strong style={{ color: "var(--navy)" }}>{site.email}</strong>
                  </div>
                </a>
                <a href={site.phoneHref} className="panel" style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <span className="num-badge" style={{ width: 44, height: 44 }}>
                    <IconPhone style={{ width: 20, height: 20 }} />
                  </span>
                  <div>
                    <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
                      Telefon
                    </div>
                    <strong style={{ color: "var(--navy)" }}>{site.phone}</strong>
                  </div>
                </a>
                <div className="panel" style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <span className="num-badge" style={{ width: 44, height: 44 }}>
                    <IconPin style={{ width: 20, height: 20 }} />
                  </span>
                  <div>
                    <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
                      Zonă
                    </div>
                    <strong style={{ color: "var(--navy)" }}>{site.tagline}</strong>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 22 }}>
                {site.socials.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noreferrer"
                      className="num-badge"
                      style={{ width: 42, height: 42 }}
                    >
                      {Icon && <Icon style={{ width: 18, height: 18 }} />}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="panel">
              <SectionTitle eyebrow="Formular" title="Solicită o evaluare" plain />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
