import data from "../../content/properties.json";

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
  image?: string;
};

// Proprietățile sunt editabile din panoul /admin (content/properties.json).
const all = data.items as unknown as Property[];

export const listedProperties: Property[] = all.filter((p) => p.status !== "vandut");
export const soldProperties: Property[] = all.filter((p) => p.status === "vandut");
