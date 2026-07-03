import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";
import { realEstateAgentSchema, webSiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role} | Zona de nord București`,
    template: `%s | ${site.name}`,
  },
  description:
    "Alice Necula, agent imobiliar cu peste 12 ani de experiență, specializat pe vânzarea locuințelor din zona de nord a Bucureștiului. Reprezentare exclusivă a vânzătorilor.",
  keywords: [
    "agent imobiliar București",
    "vânzare apartament nord București",
    "Alice Necula",
    "reprezentare exclusivă",
    "Domenii",
    "Băneasa",
    "Bucureștii Noi",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Te ajut să îți vinzi locuința din zona de nord cu o evaluare corectă, în condițiile tale.",
    url: site.url,
    siteName: `${site.name} — ${site.role}`,
    type: "website",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "Agent imobiliar specializat pe zona de nord a Bucureștiului. Reprezentare exclusivă a vânzătorilor.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <JsonLd data={[realEstateAgentSchema(), webSiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
