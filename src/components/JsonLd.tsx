/**
 * Injectează un bloc JSON-LD (date structurate schema.org) în pagină.
 * Server component — se randează în HTML-ul inițial, vizibil pentru Google și AI.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // Conținutul e generat de noi din date interne, nu din input de la utilizator.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
