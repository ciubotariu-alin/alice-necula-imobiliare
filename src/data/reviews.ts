export type Review = {
  author: string;
  initial: string;
  date: string;
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  {
    author: "Andrei Marian",
    initial: "A",
    date: "2024-09",
    rating: 5,
    text: "Foarte profesionistă. M-a ajutat la vânzarea unui imobil și apoi la cumpararea altui imobil. Recomand!",
  },
  {
    author: "George Wainwright",
    initial: "G",
    date: "2023-11",
    rating: 5,
    text: "We came to Bucharest from Ukraine and started renting our apartment via Airbnb. With Alice's help we found something more comfortable, with good space and fair conditions.",
  },
  {
    author: "Cristina Gorga",
    initial: "C",
    date: "2023-05",
    rating: 5,
    text: "O recomand pe doamna Alice pentru tranzacționarea oricărui imobil. Este o persoană orientată către client, care dă dovadă de mult profesionalism.",
  },
  {
    author: "Mircea Preotu",
    initial: "M",
    date: "2022-07",
    rating: 5,
    text: "Alexandra a fost extrem de profesionistă, implicată în tot procesul, deschisă la conversație și mereu la curent cu tot ce ține de tranzacție. Recomand cu încredere.",
  },
  {
    author: "Ioana Dumitrescu",
    initial: "I",
    date: "2024-02",
    rating: 5,
    text: "Comunicare excelentă și transparență de la început până la sfârșit. Am simțit că lucrează cu adevărat în interesul meu.",
  },
];
