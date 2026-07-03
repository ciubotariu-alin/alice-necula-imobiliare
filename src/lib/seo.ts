import { site } from "@/data/site";

/** URL absolut pornind de la o cale relativă (ex: "/despre"). */
export function absoluteUrl(path = "/"): string {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") return base + "/";
  return base + (path.startsWith("/") ? path : `/${path}`);
}

/** Construiește blocul `address` pentru schema.org (sau undefined dacă lipsește). */
function postalAddress() {
  const a = site.address;
  if (!a.street && !a.postalCode) {
    // Fără adresă stradală: nu emitem PostalAddress incomplet.
    return undefined;
  }
  return {
    "@type": "PostalAddress",
    streetAddress: a.street || undefined,
    addressLocality: a.city,
    addressRegion: a.region,
    postalCode: a.postalCode || undefined,
    addressCountry: a.country,
  };
}

function geo() {
  const { lat, lng } = site.address;
  if (!lat || !lng) return undefined;
  return { "@type": "GeoCoordinates", latitude: lat, longitude: lng };
}

/**
 * Schema principală a afacerii: RealEstateAgent (subtip de LocalBusiness).
 * Alimentează atât rezultatele îmbogățite Google, cât și motoarele AI (GEO).
 */
export function realEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": absoluteUrl("/#agent"),
    name: site.name,
    description:
      "Agent imobiliar cu peste 12 ani de experiență, specializat pe reprezentarea exclusivă a vânzătorilor de locuințe din zona de nord a Bucureștiului.",
    url: absoluteUrl("/"),
    image: absoluteUrl("/images/alice.jpg"),
    telephone: site.phone,
    email: site.email,
    priceRange: "$$$",
    address: postalAddress(),
    geo: geo(),
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    knowsLanguage: ["ro", "en"],
    sameAs: site.socials.map((s) => s.href),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.googleRating,
      reviewCount: site.googleReviews,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

/** Schema WebSite — ajută Google/AI să înțeleagă entitatea sitului. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: absoluteUrl("/"),
    name: `${site.name} — ${site.role}`,
    inLanguage: "ro-RO",
    publisher: { "@id": absoluteUrl("/#agent") },
  };
}

/** Fir Ariadna (breadcrumbs) pentru o pagină. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

/** Schema Article pentru un articol de blog. */
export function articleSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? absoluteUrl(post.image) : absoluteUrl("/images/alice.jpg"),
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    inLanguage: "ro-RO",
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { "@type": "Person", name: site.name, url: absoluteUrl("/despre") },
    publisher: { "@id": absoluteUrl("/#agent") },
  };
}

/** Schema FAQPage — puternic pentru GEO (răspunsuri citabile de AI). */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
