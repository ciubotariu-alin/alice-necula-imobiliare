"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import { IconMail, IconPhone } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="container topbar">
        <Link href="/" className="brand" aria-label="Alice Necula - acasă">
          <span className="brand-mark">N</span>
          <span className="brand-name">{site.name}</span>
        </Link>
        <div className="contact-inline">
          <a href={`mailto:${site.email}`}>
            <IconMail style={{ width: 15, height: 15, verticalAlign: "-2px", marginRight: 6 }} />
            {site.email}
          </a>
          <a href={site.phoneHref}>
            <IconPhone style={{ width: 15, height: 15, verticalAlign: "-2px", marginRight: 6 }} />
            {site.phone}
          </a>
        </div>
        <button
          className="nav-toggle"
          aria-label="Meniu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <nav className={`mainnav ${open ? "open" : ""}`} aria-label="Navigație principală">
        <div className="container">
          {nav.map((item) =>
            item.children ? (
              <div className="has-dropdown" key={item.href}>
                <Link
                  href={item.href}
                  className={`navlink ${isActive(item.href) ? "active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label} ▾
                </Link>
                <div className="dropdown">
                  {item.children.map((c) => (
                    <Link href={c.href} key={c.href} onClick={() => setOpen(false)}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={item.href}
                key={item.href}
                className={`navlink ${isActive(item.href) ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
