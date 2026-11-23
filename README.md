# Top G Nutrition – Website

Interaktive One-Page-Website für **Top G Nutrition** (Made for Champions · 100% Made in Germany).
Reines HTML/CSS/JS, ohne Build-Schritt. `index.html` im Browser öffnen oder auf einem beliebigen Static Hosting (Netlify, Vercel, GitHub Pages) deployen.

## Struktur

```
index.html            Seitenaufbau & Texte
assets/css/style.css  Design (Dark/Gold, responsive, Animationen)
assets/js/main.js     Produktdaten, Warenkorb, Ziel-Finder, Effekte
```

## Features

- Hero mit 3D-Maus-Parallax und Produkt-Switch (rotiert automatisch)
- Shop mit Filtern (Muskelaufbau, Definition, Performance, Vegan), 3D-Tilt-Karten
- Produkt-Detail-Modal mit Geschmacksauswahl und Menge
- Warenkorb-Drawer mit Gratis-Versand-Fortschritt (im Browser gespeichert)
- Ziel-Finder-Quiz („Dein Ziel. Deine Formel.“) mit Stack-Empfehlung
- EAA+ „Back in Stock“-Spotlight mit Bestandsanzeige
- Instagram-Sektion, verlinkt auf die echten Beiträge
- FAQ, Newsletter, Footer mit Pflichtseiten-Links

## Produkte (aus Instagram)

| Produkt | Geschmack | Quelle |
|---|---|---|
| EAA+ | Cherry Fruit · 20 Servings · 9 EAAs · 11 g Protein · gluten- & laktosefrei | Post vom 12.04.2026 |
| Clear Protein | Apfel 🍏 | Post vom 05.04.2026 |
| Vegan Protein | – | Post vom 05.04.2026 |
| Mass Gainer | Cookies & Cream | Post vom 05.04.2026 |

## Vor dem Livegang anpassen

Alle Produktdaten stehen zentral in `PRODUCTS` in `assets/js/main.js`.

- **Preise, Packungsgrößen, Vegan-Geschmäcker**: Platzhalter, nicht aus Instagram. Bitte die echten Werte eintragen.
- **Produktfotos**: Bild nach `assets/img/` legen und beim Produkt `image: "assets/img/eaa.png"` setzen (freigestelltes PNG wirkt am besten). Ohne Foto wird automatisch eine gerenderte Dose angezeigt.
- **Gratis-Versand-Grenze**: `FREE_SHIPPING` in `main.js` (aktuell 59 €), Text auch in `index.html` (Ankündigungsleiste, FAQ).
- **Checkout**: Der Button „Zur Kasse“ ist noch nicht angebunden (z. B. Shopify Buy Button, Stripe Checkout).
- **Newsletter**: Formular an einen Anbieter anbinden (z. B. Klaviyo, Mailchimp).
- **Rechtliches**: Impressum, Datenschutz, AGB und Widerruf sind in Deutschland Pflicht. Die Links im Footer zeigen noch auf `#`.
- **Bestandsanzeige EAA+**: dekorativ (fester Wert), sollte mit echtem Lagerbestand verbunden oder entfernt werden.
