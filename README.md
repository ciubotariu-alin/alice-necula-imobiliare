# alicenecula-site

Site de prezentare pentru **Alice Necula — agent imobiliar**, specializat pe vânzarea
locuințelor din zona de nord a Bucureștiului.

Construit cu **Next.js 15 (App Router) + TypeScript**, fără dependențe UI externe.
Structura urmează macheta din documentul `alicenecula.ro 2026`.

## Pagini

| Rută | Descriere |
| --- | --- |
| `/` | Acasă — hero, servicii, despre, video, recenzii, proprietăți, cartiere, evaluare |
| `/despre` | Despre Alice, statistici, valori |
| `/portofoliu` | Proprietăți listate, cartiere, proprietăți vândute |
| `/proprietari` | Pagină pentru vânzători + proces + formular |
| `/servicii` | Servicii proprietari, de ce exclusiv, ofertă financiară |
| `/experienta-de-vanzare` | Parcursul complet al unei vânzări, pas cu pas |
| `/blog` | „Amărănt & cuișoare” — articole |
| `/contact` | Date de contact + formular |

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producție
npm start        # rulează build-ul
```

## Conținut & personalizare

- Datele editabile stau în `src/data/` (contact, cartiere, proprietăți, recenzii,
  servicii, experiență, articole).
- Culorile și tipografia sunt definite ca variabile CSS în `src/styles/globals.css`.
- Imaginile sunt momentan **placeholdere** (`src/components/Placeholder.tsx`). Se
  înlocuiesc cu fotografii reale (hero, portrete, proprietăți, cartiere) prin
  schimbarea componentei cu `<img>` / `next/image`.
- Formularul de contact este demonstrativ (fără backend). Se poate conecta la un
  serviciu de email / API.

## Mutare în repo propriu

Folderul este self-contained. Pentru un repository separat:

```bash
cp -r alicenecula-site /cale/noua && cd /cale/noua
git init && git add . && git commit -m "Initial commit"
```
