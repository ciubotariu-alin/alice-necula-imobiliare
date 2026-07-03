"use client";

import { useState } from "react";
import { neighborhoods } from "@/data/neighborhoods";

type Props = {
  compact?: boolean;
};

export default function ContactForm({ compact = false }: Props) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({ ok: false }));

      if (res.ok && json.ok) {
        setSent(true);
      } else {
        setError(json.error || "Trimiterea a eșuat. Te rog încearcă din nou.");
      }
    } catch {
      setError("Nu am putut trimite mesajul. Verifică conexiunea și încearcă din nou.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="form-success">
        Mulțumesc! Mesajul tău a fost trimis. Te contactez în cel mai scurt timp
        pentru a stabili o discuție.
      </div>
    );
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="nume">Nume</label>
        <input id="nume" name="nume" required placeholder="Numele tău" />
      </div>
      <div className="field">
        <label htmlFor="telefon">Telefon</label>
        <input id="telefon" name="telefon" required placeholder="07xx xxx xxx" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="email@exemplu.ro" />
      </div>
      <div className="field">
        <label htmlFor="zona">Zona proprietății</label>
        <select id="zona" name="zona" defaultValue="">
          <option value="" disabled>
            Alege cartierul
          </option>
          {neighborhoods.map((h) => (
            <option key={h.slug} value={h.slug}>
              {h.name}
            </option>
          ))}
          <option value="alta">Altă zonă</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="mesaj">Detalii despre proprietate</label>
        <textarea
          id="mesaj"
          name="mesaj"
          placeholder="Spune-mi câteva detalii: tip locuință, suprafață, ce îți dorești de la vânzare…"
          style={compact ? { minHeight: 90 } : undefined}
        />
      </div>

      {/* Câmp-capcană anti-spam: ascuns pentru oameni, îl completează doar roboții. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      {error && (
        <div className="field full">
          <p className="form-error">{error}</p>
        </div>
      )}

      <div className="field full" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
        <span className="form-note">Datele tale sunt folosite doar pentru a te contacta.</span>
        <button type="submit" className="btn btn-navy" disabled={sending}>
          {sending ? "Se trimite…" : "Trimite solicitarea"}
        </button>
      </div>
    </form>
  );
}
