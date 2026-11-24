# Top G Nutrition – Website

Interaktive One-Page-Website für **Top G Nutrition** (Made for Champions · 100% Made in Germany).
Reines HTML/CSS/JS, ohne Build-Schritt. `index.html` im Browser öffnen oder auf einem beliebigen Static Hosting (Netlify, Vercel, GitHub Pages) deployen.

## Struktur

```
index.html               Seitenaufbau & Texte (Logo als Vektor eingebettet)
assets/css/style.css     Design (Dark/Gold, responsive, Animationen)
assets/js/main.js        Produktdaten, Warenkorb, Ziel-Finder, Scroll-Animation, Effekte
assets/img/logo.svg      Logo als Vektor (aus dem Original-Logo nachgezeichnet)
assets/img/products/     Freigestellte Produktbilder (+ kleine *-thumb.webp)
assets/img/act/          Bilder der Scroll-Animation: je Dose 48 Einzelbilder in Sammelbildern + Ruhebild
assets/img/posts/        Die echten Instagram-Motive
tools/                   Skripte, mit denen die Bilder der Scroll-Animation gebaut wurden
```

## Features

- Hero mit 3D-Maus-Parallax und Produkt-Switch durch alle 7 Produkte
- Scroll-Animation „Auftritt“: Nur die Produkte. Vor dem großen Logo kommen drei Dosen nacheinander ins Bild und drehen sich beim Scrollen nach vorn
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

## Scroll-Animation „Auftritt“

Der Abschnitt nach dem Hero (`#auftritt`) zeigt nur die Produkte: Clear Whey Protein in der Mitte, EAA+ links, Multi-Vitamin rechts. Die Bühne bleibt stehen, das Scrollen steuert den Ablauf (Logo, drei Dosen, Zeile, Knopf).

- **Technik:** Je Dose gibt es 48 Einzelbilder einer knappen halben Drehung, gepackt in sechs Sammelbilder, in zwei Größen (Computer und Handy). `buildAct()` in `assets/js/main.js` zeichnet beim Scrollen das passende Bild. Steht die Dose, zeigt die Seite das scharfe Ruhebild `f00.webp`. Reihenfolge, Größe und Zeitpunkte stehen in `ACT` direkt darüber.
- **Herkunft:** Die Drehung stammt je Dose aus einem KI-Clip (Higgsfield, MiniMax H3, 5 Sekunden), der mit dem freigestellten Produktbild als erstem Bild vor einfarbigem Hintergrund startet. `tools/act_start_image.py` baut dieses Startbild, `tools/build_act_sheets.py` stellt die Einzelbilder frei und packt die Sammelbilder.
- **Einschränkung:** Die Vorderseite stammt aus dem Produktbild. Die **Seiten und Rückseiten der Dosen sind von der KI erfunden** (angedeutete Nährwerttabelle, bei Multi-Vitamin ein weißes Feld mit Strichcode). Sie sind nur kurz und klein zu sehen, entsprechen aber nicht den echten Etiketten. Mit echten Rundum-Aufnahmen der Dosen lassen sich die Bilder 1:1 ersetzen.
- **Gewicht:** Die Sammelbilder wiegen zusammen etwa 3,7 MB (Computer) bzw. 2,0 MB (Handy). Sie werden erst geladen, wenn die Seite selbst fertig geladen ist. Bis dahin steigen die Dosen ohne Drehung auf.
- **Ohne Bewegung:** Bei „Bewegung reduzieren“, ohne JavaScript und in sehr flachen Fenstern stehen Logo, Dosen und Zeile ruhig untereinander.

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
