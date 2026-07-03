import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.role}`,
    short_name: site.name,
    description:
      "Agent imobiliar specializat pe vânzarea locuințelor din zona de nord a Bucureștiului.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#17324b",
    lang: "ro",
    icons: [{ src: "/icon", sizes: "any", type: "image/png" }],
  };
}
