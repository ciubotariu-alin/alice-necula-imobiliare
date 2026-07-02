export type Property = {
  id: string;
  title: string;
  location: string;
  neighborhood: string;
  price: string;
  rooms: number;
  baths: number;
  surface: number; // mp
  status: "de-vanzare" | "rezervat" | "vandut";
  exclusive: boolean;
  zeroCommission: boolean;
};

export const listedProperties: Property[] = [
  {
    id: "pajura-scoala-europeana",
    title: "Pajura – Școala Europeană, apartament 3 camere",
    location: "București, Pajura",
    neighborhood: "pajura",
    price: "114.800 €",
    rooms: 3,
    baths: 1,
    surface: 63,
    status: "de-vanzare",
    exclusive: true,
    zeroCommission: true,
  },
  {
    id: "damaroaia-teren",
    title: "Dămăroaia – teren cu precontract semnat",
    location: "București, Dămăroaia",
    neighborhood: "damaroaia",
    price: "465 €/mp",
    rooms: 0,
    baths: 0,
    surface: 473,
    status: "rezervat",
    exclusive: true,
    zeroCommission: true,
  },
  {
    id: "baneasa-greenfield",
    title: "Băneasa – Greenfield, 2 camere",
    location: "București, Băneasa",
    neighborhood: "baneasa",
    price: "119.500 €",
    rooms: 2,
    baths: 1,
    surface: 47,
    status: "de-vanzare",
    exclusive: true,
    zeroCommission: true,
  },
  {
    id: "domenii-apartament",
    title: "Domenii – apartament 3 camere renovat",
    location: "București, Domenii",
    neighborhood: "domenii",
    price: "189.000 €",
    rooms: 3,
    baths: 2,
    surface: 78,
    status: "de-vanzare",
    exclusive: true,
    zeroCommission: false,
  },
  {
    id: "straulesti-nou",
    title: "Străulești – apartament 2 camere, bloc nou",
    location: "București, Străulești",
    neighborhood: "straulesti",
    price: "98.500 €",
    rooms: 2,
    baths: 1,
    surface: 54,
    status: "de-vanzare",
    exclusive: true,
    zeroCommission: true,
  },
];

export const soldProperties: Property[] = [
  {
    id: "sold-bucurestii-noi",
    title: "Bucureștii Noi – apartament 3 camere",
    location: "București, Bucureștii Noi",
    neighborhood: "bucurestii-noi",
    price: "132.000 €",
    rooms: 3,
    baths: 1,
    surface: 66,
    status: "vandut",
    exclusive: true,
    zeroCommission: false,
  },
  {
    id: "sold-1-mai",
    title: "1 Mai – apartament 2 camere",
    location: "București, 1 Mai",
    neighborhood: "1-mai",
    price: "104.000 €",
    rooms: 2,
    baths: 1,
    surface: 52,
    status: "vandut",
    exclusive: true,
    zeroCommission: false,
  },
  {
    id: "sold-domenii",
    title: "Domenii – vilă cu grădină",
    location: "București, Domenii",
    neighborhood: "domenii",
    price: "410.000 €",
    rooms: 5,
    baths: 3,
    surface: 210,
    status: "vandut",
    exclusive: true,
    zeroCommission: false,
  },
];
