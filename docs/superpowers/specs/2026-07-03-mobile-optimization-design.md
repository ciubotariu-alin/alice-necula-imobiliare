# Optimizare mobil — reparare esențială (design)

**Data:** 2026-07-03
**Scop:** Situl `alicenecula.ro` (Next.js 15) nu se afișează corect pe telefon. Reparăm strict esențialul, fără a atinge conținut, poze, date sau panoul `/admin`.

## Problema (verificată)

Capturi la lățime de telefon (390px) au arătat, pe **toate** paginile:

1. **Depășire pe orizontală** — conținutul e mai lat decât ecranul; partea dreaptă (titluri, texte, carduri) e tăiată și pagina se poate trage lateral.
2. **Secțiunile pe 2 coloane nu se așază pe o coloană** — la Contact, formularul e împins în afara ecranului; la fel secțiunea de evaluare de pe prima pagină și pagina Proprietari.
3. **Meniul de navigare pare absent** — butonul-hamburger e împins în afara ecranului de aceeași lățime în plus; pe telefon nu se poate naviga.

## Cauza (identificată în cod)

Regulile responsive **există** în `src/styles/globals.css`:
- `@media (max-width: 960px)` → `.split { grid-template-columns: 1fr }`, grilele pe 2 coloane, `.contact-inline` ascuns.
- `@media (max-width: 640px)` → grile pe 1 coloană, `.mainnav` devine meniu-hamburger (`.nav-toggle` vizibil).

Dar **trei** secțiuni suprascriu regula cu stil inline (specificitate mai mare decât media query), deci NU se pliază pe mobil:
- `src/app/page.tsx:252` — `style={{ gridTemplateColumns: "1fr 1.1fr", alignItems: "start" }}`
- `src/app/contact/page.tsx:26` — `style={{ gridTemplateColumns: "0.9fr 1.1fr", alignItems: "start" }}`
- `src/app/proprietari/page.tsx:75` — `style={{ gridTemplateColumns: "1fr 1.1fr", alignItems: "start" }}`

O secțiune rămasă pe 2 coloane la 390px lățește întreaga pagină → apare scroll orizontal → tot restul (inclusiv hamburgerul din antet) e împins/tăiat. Practic **o singură cauză** produce aproape toate simptomele.

`.container` este corect (`width:100%; max-width; padding:0 24px`) și nu contribuie la problemă.

## Soluția (Opțiunea A: reparăm cauza + plasă de siguranță)

### 1. Eliminăm stilul inline din cele 3 secțiuni
- Definim o clasă CSS pentru raportul de coloane pe desktop, ex.:
  - `.split-wide { grid-template-columns: 1fr 1.1fr; align-items: start; }`
  - `.split-contact { grid-template-columns: 0.9fr 1.1fr; align-items: start; }` (raportul diferit de la Contact)
- Înlocuim în cele 3 fișiere atributul `style={{ gridTemplateColumns... }}` cu clasa corespunzătoare (`className="split split-wide"` / `split-contact`).
- Regula existentă `@media (max-width: 960px) .split { grid-template-columns: 1fr }` va plia automat aceste secțiuni pe o coloană, pentru că nu mai există override inline.

### 2. Plasă de siguranță globală împotriva depășirii orizontale
- Antetul este `position: sticky` (`.site-header`, globals.css:213–214). De aceea **NU** folosim `overflow-x: hidden` pe `html`/`body` (ar strica lipirea antetului).
- Folosim `overflow-x: clip` pe `body` — previne scroll-ul orizontal fără a rupe `position: sticky`.
- Garda este redundantă după reparația de la pasul 1, dar previne regresii viitoare (un tabel/o poză lată nu va mai putea sparge layout-ul). Verificăm în test că antetul rămâne lipit sus la derulare pe mobil.

### 3. Meniul (hamburger)
- Niciun cod nou necesar: după eliminarea lățimii în plus, butonul revine în ecran.
- Verificăm explicit că `.nav-toggle` apare pe mobil și că meniul se **deschide/închide** (starea `open` din `Header.tsx`).

## Fișiere atinse
- `src/app/page.tsx` — înlocuit stil inline cu clasă.
- `src/app/contact/page.tsx` — înlocuit stil inline cu clasă.
- `src/app/proprietari/page.tsx` — înlocuit stil inline cu clasă.
- `src/styles/globals.css` — clase noi `.split-wide` / `.split-contact` + garda anti-overflow.

## Ce NU atingem
Conținut, texte, poze, fișierele `content/*`, panoul `/admin`, rutele API, aspectul pe **desktop** (care trebuie să rămână identic).

## Verificare (că merge pe ORICE dimensiune, nu doar câteva)

Principiu: reparația e **fluidă** (procente/`fr`/`max-width:100%` + un prag care pliază pe o coloană), deci layout-ul se adaptează continuu. Există doar 3 „benzi" de layout (telefon ≤640, tabletă 640–960, desktop ≥960); în interiorul fiecărei benzi conținutul curge. Deci e suficient să verificăm interiorul benzilor + **marginile pragurilor**, unde apar de obicei bug-urile.

1. **Test automat anti-depășire pe o gamă continuă de lățimi.** Script (Chrome headless) care încarcă fiecare pagină la lățimile: **320, 360, 375, 390, 414, 430, 480, 600, 768** și la marginile pragurilor **639, 641, 959, 961**; pentru fiecare verifică `document.documentElement.scrollWidth <= window.innerWidth` (fără scroll orizontal). Rulat pe toate paginile: `/`, `/despre`, `/portofoliu`, `/proprietari`, `/servicii`, `/blog`, `/contact`. Criteriu: **0 depășiri** pe toate combinațiile. Dovadă deterministă, nu vizuală.
2. **Landscape** — aceeași verificare la o dimensiune telefon rotit (ex. 740×360).
3. **Capturi vizuale** la 3 lățimi-cheie (320 mic / 390 mediu / 414 mare) pentru fiecare pagină — pentru aspect (lizibilitate, secțiuni pe o coloană), nu doar absența overflow-ului.
4. **Meniu** — pe mobil, hamburgerul apare și deschide/închide navigația; antetul rămâne lipit sus la derulare.
5. **Desktop (regresie)** — captură la 1280px pentru `/`, `/contact`, `/proprietari`. Criteriu: **identic** cu starea actuală (secțiunile pe 2 coloane, ca acum).
6. `npm run build` trece.

## Criterii de succes
- Pe telefon: fără conținut tăiat, fără scroll orizontal, secțiuni citibile pe o coloană, meniu funcțional.
- Pe desktop: aspect neschimbat.
- Modificări limitate la CSS + înlocuirea a 3 stiluri inline cu clase.

## Riscuri
- **Mic:** interacțiunea gărzii anti-overflow cu antetul sticky — mitigat prin folosirea `overflow-x: clip` (nu `hidden`) și verificarea explicită că antetul rămâne lipit la derulare.
- **Mic:** clasele noi trebuie să reproducă exact raporturile actuale (1fr 1.1fr și 0.9fr 1.1fr) ca desktopul să rămână identic — verificat prin captura pe desktop.
