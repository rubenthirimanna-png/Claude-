"""Startbild für einen Dreh-Clip: das freigestellte Produktbild mittig auf einen einfarbigen Hintergrund setzen.

Aufruf:
    python3 act_start_image.py <Produktbild (PNG mit Transparenz)> <Ziel.png> <Breite> <Höhe> <Farbe> <Anteil>

    Farbe:  #0047BB (Blau) für Produkte mit Grün im Etikett, sonst #00B140 (Grün).
    Anteil: Höhe des Produkts im Bild, z. B. 0.72.

Das Ergebnis ist das erste Bild des Clips. Im Clip dreht sich die Dose einmal um die eigene Achse, die Kamera
steht still, der Hintergrund bleibt einfarbig. tools/build_act_sheets.py stellt die Einzelbilder danach frei.

Braucht Python mit numpy und Pillow.
"""
import sys

import numpy as np
from PIL import Image

src, out, W, H, hexcol, frac = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4]), sys.argv[5], float(sys.argv[6])
im = Image.open(src).convert("RGBA")
a = np.asarray(im.getchannel("A")).copy()
a[a < 12] = 0
ys, xs = np.where(a > 40)
im.putalpha(Image.fromarray(a))
im = im.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))
th = round(H * frac)
im = im.resize((round(im.width * th / im.height), th), Image.LANCZOS)
rgb = tuple(int(hexcol.lstrip("#")[i:i + 2], 16) for i in (0, 2, 4))
canvas = Image.new("RGBA", (W, H), rgb + (255,))
canvas.alpha_composite(im, ((W - im.width) // 2, (H - im.height) // 2))
canvas.convert("RGB").save(out)
print(out, canvas.size, "Produkt", im.size)
