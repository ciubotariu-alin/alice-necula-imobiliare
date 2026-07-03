import data from "../../content/neighborhoods.json";

export type Neighborhood = {
  slug: string;
  name: string;
  description: string;
  intro: string;
  image?: string;
};

// Cartierele sunt editabile din panoul /admin (content/neighborhoods.json).
export const neighborhoods: Neighborhood[] = data.items as unknown as Neighborhood[];
