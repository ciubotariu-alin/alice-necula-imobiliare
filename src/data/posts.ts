export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

export const posts: Post[] = [
  {
    slug: "cat-valoreaza-casa-in-2026",
    title: "Cât valorează casa ta în 2026?",
    excerpt:
      "Cum citim corect piața din zona de nord și de ce prețul „din ochi” este cea mai costisitoare greșeală.",
    date: "2026-01-15",
    category: "Strategie de preț",
  },
  {
    slug: "reprezentare-exclusiva-ce-inseamna",
    title: "Reprezentare exclusivă: ce înseamnă, de fapt",
    excerpt:
      "De ce un singur interes în tranzacție — al tău — schimbă complet rezultatul vânzării.",
    date: "2025-11-02",
    category: "Chestii imobiliare",
  },
  {
    slug: "pregatirea-casei-pentru-vanzare",
    title: "Pregătirea casei pentru vânzare",
    excerpt:
      "De la acte la home staging: pașii care transformă locuința într-o opțiune atractivă.",
    date: "2025-09-20",
    category: "Ghid vânzare",
  },
  {
    slug: "cartierele-din-nordul-bucurestiului",
    title: "Cartierele din nordul Bucureștiului, pe scurt",
    excerpt:
      "Bucureștii Noi, Domenii, Băneasa, Străulești — ce caută cumpărătorii în fiecare zonă.",
    date: "2025-07-08",
    category: "Zone",
  },
];
