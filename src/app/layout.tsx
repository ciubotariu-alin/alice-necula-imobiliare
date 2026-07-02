import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
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
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Te ajut să îți vinzi locuința din zona de nord cu o evaluare corectă, în condițiile tale.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
