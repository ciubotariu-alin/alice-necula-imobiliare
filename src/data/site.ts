export const site = {
  name: "Alice Necula",
  role: "Agent imobiliar",
  tagline: "Zona de nord a Bucureștiului",
  email: "contact@alicenecula.ro",
  phone: "0755.133.936",
  phoneHref: "tel:+40755133936",
  googleRating: 4.9,
  googleReviews: 25,
  yearsExperience: 12,
  sinceYear: 2014,
  socials: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
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
