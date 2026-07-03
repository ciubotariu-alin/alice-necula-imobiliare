export const site = {
  name: "Alice Necula",
  role: "Agent imobiliar",
  tagline: "Zona de nord a Bucureștiului",
  // URL-ul de producție. Folosit pentru metadataBase, canonical, sitemap, JSON-LD.
  url: "https://www.alicenecula.ro",
  email: "contact@alicenecula.ro",
  phone: "0755.133.936",
  phoneHref: "tel:+40755133936",
  googleRating: 4.9,
  googleReviews: 25,
  yearsExperience: 12,
  sinceYear: 2014,
  // Adresa biroului — folosită în schema LocalBusiness (SEO local + GEO).
  // TODO: completează cu adresa reală (stradă, oraș, cod poștal, coordonate).
  address: {
    street: "",
    city: "București",
    region: "București",
    postalCode: "",
    country: "RO",
    // Coordonate geografice (opțional, dar întăresc SEO local). Lasă 0 dacă nu le știi.
    lat: 0,
    lng: 0,
  },
  // Zonele deservite — folosite în schema RealEstateAgent (areaServed) și pentru GEO.
  areaServed: [
    "Băneasa",
    "Domenii",
    "Bucureștii Noi",
    "Aviației",
    "Herăstrău",
    "Pipera",
    "Sectorul 1, București",
  ],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/aliceneculabroker", icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com/alicenecula/", icon: "instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/necula-imobiliare/", icon: "linkedin" },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    { label: "TikTok", href: "https://www.tiktok.com/@alicenecula", icon: "tiktok" },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Acasă", href: "/" },
  { label: "Despre", href: "/despre" },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Proprietari", href: "/proprietari" },
  {
    label: "Servicii",
    href: "/servicii",
    children: [
      { label: "Servicii proprietari", href: "/servicii" },
      { label: "Experiența de vânzare", href: "/experienta-de-vanzare" },
    ],
  },
  { label: "Blog", href: "/blog" },
];
