# Top G Nutrition – Website

Interaktive One-Page-Website für **Top G Nutrition** (Made for Champions · 100% Made in Germany).
Reines HTML/CSS/JS, ohne Build-Schritt. `index.html` im Browser öffnen oder auf einem beliebigen Static Hosting (Netlify, Vercel, GitHub Pages) deployen.

## Struktur

```
index.html               Seitenaufbau & Texte (Logo als Vektor eingebettet)
assets/css/style.css     Design (Dark/Gold, responsive, Animationen)
assets/js/main.js        Produktdaten, Warenkorb, Ziel-Finder, Effekte
assets/img/logo.svg      Logo als Vektor (aus dem Original-Logo nachgezeichnet)
assets/img/products/     Freigestellte Produktbilder (+ kleine *-thumb.webp)
assets/img/posts/        Die echten Instagram-Motive
```

## Features

- Hero mit 3D-Maus-Parallax und Produkt-Switch durch alle 7 Produkte
- Shop mit Filtern (Protein, Aminos & Vitamine, Vegan, Zubehör) und Sortenwahl direkt auf der Karte
- Clear-Whey-Bereich mit Sorten-Wechsler (Apple Rings ↔ Fresh Cherry), Farbwelt wechselt mit
- Produkt-Detailansicht mit Sorte und Menge
- Warenkorb mit Gratis-Versand-Fortschritt (im Browser gespeichert)
- Ziel-Finder („Dein Ziel. Deine Formel.“) mit Stack-Empfehlung
- EAA+ „Back in Stock“-Spotlight
- Community-Bereich mit den echten Instagram-Motiven, verlinkt auf die Beiträge
- FAQ, Newsletter, Footer mit Pflichtseiten-Links

## Sortiment (von den Etiketten in den Instagram-Beiträgen abgelesen)

| Produkt | Sorte | Angaben vom Etikett |
|---|---|---|
| Clear Whey Protein | Apple Rings, Fresh Cherry | 1000 g · 33 Servings · 26 g Protein · glutenfrei · laktosefrei |
| Vegan Whey Protein | Vanille | 1000 g · 33 Servings · 24 g Protein · glutenfrei · laktosefrei |
| Whey Protein | Shoko-Coco | „High Protein / Muscle Support“ (Rest im Bild verdeckt) |
| Mass Gainer | Cookies & Cream | (unterer Teil des Etiketts im Bild verdeckt) |
| EAA+ | Cherry Fruit | 300 g · 20 Servings · 11 g Protein · 9 EAAs · glutenfrei · laktosefrei |
| Multi-Vitamin | – | 120 Kapseln · „All in One / Supports Health“ |
| Top G Shaker | Black & Gold | – |

## Produktbilder

Die freigestellten Produktbilder wurden mit Higgsfield (GPT Image) aus den Instagram-Motiven nachgebaut, weil die Dosen dort schräg stehen und sich überlappen. Dose, Etikett-Aufbau, Farben, Logo und die großen Texte entsprechen den Originalen. Zwei Einschränkungen:

- **Verdeckte Stellen** wurden nach dem Muster der Schwesterprodukte ergänzt: bei **Whey Protein** und **Mass Gainer** die untere Etiketthälfte (Zeile „High Protein / Muscle Support / Fast Recovery“ und „1000 g / 2.2 lb“) sowie die kleinen Symbole links.
- **Kleingedrucktes** (Social-Media-Zeilen am rechten Rand) ist nicht lesbar nachgebildet.

Für den Livegang am besten die Original-Packshots der Druckerei/des Designers einsetzen: Datei in `assets/img/products/` ersetzen (freigestelltes PNG oder WebP, gleicher Dateiname) und bei Bedarf `w`/`h` in `PRODUCTS` anpassen. Die kleinen `*-thumb.webp` (168 px hoch) gehören jeweils dazu.

## Vor dem Livegang anpassen

Alle Produktdaten stehen zentral in `PRODUCTS` in `assets/js/main.js`.

- **Preise**: Platzhalter, stehen nirgends auf Instagram. Bitte die echten Preise eintragen.
- **Nährwert- und Mengenangaben** (Portionen, Protein pro Portion, Gramm): aus teils unscharfen Etiketten abgelesen, bitte gegen die echten Etiketten prüfen. Der Name „Vegan Whey Protein“ ist ebenfalls abgelesen.
- **Gratis-Versand-Grenze**: `FREE_SHIPPING` in `main.js` (aktuell 59 €), Text auch in `index.html` (Ankündigungsleiste, FAQ).
- **Checkout**: Der Button „Zur Kasse“ ist noch nicht angebunden (z. B. Shopify Buy Button, Stripe Checkout).
- **Newsletter**: Formular an einen Anbieter anbinden (z. B. Klaviyo, Mailchimp).
- **Rechtliches**: Impressum, Datenschutz, AGB und Widerruf sind in Deutschland Pflicht. Die Links im Footer zeigen noch auf `#`.
- **Bestandsanzeige EAA+**: dekorativ (fester Wert), sollte mit echtem Lagerbestand verbunden oder entfernt werden.
- **Logo**: aus einem Screenshot nachgezeichnet. Wenn die Original-Vektordatei vorliegt, den Pfad im `<symbol id="logo-topg">` in `index.html` ersetzen.
