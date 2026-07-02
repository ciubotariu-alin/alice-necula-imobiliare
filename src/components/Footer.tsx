import Link from "next/link";
import { nav, site } from "@/data/site";
import { neighborhoods } from "@/data/neighborhoods";
import { socialIcons } from "./icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand" style={{ marginBottom: 16 }}>
              <span className="brand-mark" style={{ color: "#fff", borderColor: "var(--gold)" }}>
                N
              </span>
              <span className="brand-name">{site.name}</span>
            </div>
            <p style={{ maxWidth: 320 }}>
              {site.role} specializat pe {site.tagline.toLowerCase()}. Reprezentare
              exclusivă a vânzătorilor, cu un singur interes — al tău.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
              {site.socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,.25)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    {Icon && <Icon style={{ width: 17, height: 17 }} />}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4>Navigare</h4>
            <ul className="footer-links">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Cartiere deservite</h4>
            <ul className="footer-links">
              {neighborhoods.slice(0, 6).map((h) => (
                <li key={h.slug}>
                  <Link href={`/portofoliu#${h.slug}`}>{h.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. Toate drepturile rezervate.
          </span>
          <span>
            {site.email} · {site.phone}
          </span>
        </div>
      </div>
    </footer>
  );
}
