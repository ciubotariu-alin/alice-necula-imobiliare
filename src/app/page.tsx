import Link from "next/link";
import { site } from "@/data/site";
import { neighborhoods } from "@/data/neighborhoods";
import { listedProperties, soldProperties } from "@/data/properties";
import { socialIcons, IconPlay, IconHouse } from "@/components/icons";
import Placeholder from "@/components/Placeholder";
import SectionTitle from "@/components/SectionTitle";
import PropertyCard from "@/components/PropertyCard";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";

const features = [
  { title: "Experiența de vânzare", sub: "Cum lucrăm împreună", href: "/experienta-de-vanzare", variant: "navy" as const },
  { title: "Proprietăți", sub: "Listate exclusiv", href: "/portofoliu", variant: "default" as const },
  { title: "Amărănt & cuișoare", sub: "Blog · chestii imobiliare", href: "/blog", variant: "gold" as const },
];

const videos = [
  { label: "De ce Alice", big: true },
  { label: "Cum vom lucra", big: false },
  { label: "Rezultatele încep cu valorile", big: false },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-inner">
          <h1 className="hero-title">{site.name}</h1>
          <div className="hero-role">{site.role}</div>
          <div className="hero-socials">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                  {Icon && <Icon />}
                </a>
              );
            })}
          </div>
          <Link href="/servicii" className="btn btn-outline">
            Servicii proprietari
          </Link>
        </div>
      </section>

      {/* INTRO + FEATURES */}
      <section className="section">
        <div className="container">
          <div className="center head-block">
            <span className="divider-mark">— — —</span>
            <h2 className="section-title">Cea mai importantă mutare a ta</h2>
            <p className="lead">
              Te ajut să îți vinzi locuința din zona de nord cu o evaluare corectă, în
              condițiile tale, servind un singur interes — al tău — și cu atenție la fiecare
              detaliu al tranzacției.
            </p>
          </div>
          <div className="grid grid-3">
            {features.map((f) => (
              <Link href={f.href} key={f.title} className="feature-card">
                <Placeholder variant={f.variant} showIcon={false} />
                <div className="fc-body">
                  <small>{f.sub}</small>
                  <h3>{f.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="section alt">
        <div className="container">
          <div className="split">
            <Placeholder label="Foto Alice Necula" variant="gold" />
            <div className="about-text">
              <SectionTitle
                eyebrow="Despre mine"
                title="Construiesc relații, nu doar tranzacții"
                plain
              />
              <p>
                Greu de găsit un agent imobiliar mai receptiv și mai dedicat în slujba
                clienților săi. Abordând strategic un mod de lucru exclusiv, bazat pe
                seriozitate, încredere și o bună cunoaștere a pieței și a practicilor
                imobiliare, și având o carieră de peste {site.yearsExperience} ani, Alice a
                acumulat o experiență semnificativă în domeniul tranzacțiilor imobiliare pe
                segmentul rezidențial.
              </p>
              <p>
                Expertiza profesională a lui Alice oferă vânzătorilor din zona de nord a
                Bucureștiului un avantaj distinct în această piață competitivă.
              </p>
              <Link href="/contact" className="btn btn-beige" style={{ marginTop: 8 }}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="section navy">
        <div className="container">
          <SectionTitle
            eyebrow="Video"
            title="Rezultatele încep cu valorile"
            center
            plain
          />
          <div className="video-grid">
            <div className="video-card big">
              <div className="ph navy" style={{ position: "relative", height: "100%", borderRadius: "var(--radius)", display: "grid", placeItems: "center", minHeight: 300 }}>
                <div className="play-badge">
                  <IconPlay />
                </div>
                <div className="ph-label" style={{ position: "absolute", bottom: 16, left: 18 }}>
                  {videos[0].label}
                </div>
              </div>
            </div>
            <div className="video-side">
              {videos.slice(1).map((v) => (
                <div className="video-card" key={v.label}>
                  <div className="ph" style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "var(--radius)", display: "grid", placeItems: "center" }}>
                    <div className="play-badge">
                      <IconPlay />
                    </div>
                  </div>
                  <div className="vc-label" style={{ color: "#dfe7ee" }}>
                    {v.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container">
          <div className="center head-block">
            <h2 className="section-title plain">
              Folosește avantajul <strong style={{ color: "var(--gold-dark)" }}>{site.name}</strong> pentru tranzacția ta
            </h2>
            <p className="lead" style={{ fontStyle: "italic" }}>
              Încredere confirmată de clienți reali.
            </p>
          </div>
          <Reviews />
        </div>
      </section>

      {/* LISTED PROPERTIES */}
      <section className="section alt">
        <div className="container">
          <SectionTitle
            eyebrow="Portofoliu"
            title="Proprietăți listate exclusiv"
            lead="O selecție din proprietățile rezidențiale pe care le reprezint în acest moment."
          />
          <div className="grid grid-3">
            {listedProperties.slice(0, 3).map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/portofoliu" className="btn btn-ghost">
              Vezi toate proprietățile
            </Link>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Zonele mele"
            title="Cunosc cartierele, nu doar harta"
            lead="Lucrez consecvent proprietăți rezidențiale, apartamente și case, în zona de nord a sectorului 1, unde prețul corect și un cumpărător potrivit depind de detalii pe care specialistul zonei chiar le știe."
          />
          <div className="grid grid-4">
            {neighborhoods.map((h) => (
              <Link href={`/portofoliu#${h.slug}`} key={h.slug} className="hood-card">
                <div className="ph">
                  <IconHouse style={{ width: 30, height: 30, opacity: 0.5 }} />
                </div>
                <span className="hood-name">{h.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOLD PROPERTIES */}
      <section className="section alt">
        <div className="container">
          <SectionTitle
            eyebrow="Rezultate"
            title="Proprietăți vândute"
            lead="Tranzacții finalizate cu succes, în interesul vânzătorilor pe care i-am reprezentat."
          />
          <div className="grid grid-3">
            {soldProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="section" id="evaluare">
        <div className="container">
          <div className="split" style={{ gridTemplateColumns: "1fr 1.1fr", alignItems: "start" }}>
            <div>
              <SectionTitle
                eyebrow="Află de la expert"
                title={<>Cât valorează casa ta în 2026?</>}
                plain
              />
              <p className="lead">Vânzarea începe cu o conversație.</p>
              <p>
                Completează formularul și îți răspund cu o primă evaluare și cu pașii
                concreți pentru o vânzare corectă, în condițiile tale.
              </p>
              <ul className="check-list" style={{ marginTop: 18 }}>
                <li>Evaluare bazată pe date reale de piață</li>
                <li>Strategie de preț personalizată</li>
                <li>Reprezentare exclusivă, fără conflict de interese</li>
              </ul>
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
