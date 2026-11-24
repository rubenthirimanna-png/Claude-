"""Aus einem Dreh-Clip die Bilder für die Scroll-Animation bauen (Abschnitt "Auftritt").

Der Clip zeigt eine Dose, die sich vor einem einfarbigen blauen oder grünen Hintergrund um die eigene Achse dreht.
Dieses Skript stellt die Einzelbilder frei, schneidet sie auf einen gemeinsamen Ausschnitt zu und packt sie in
Sammelbilder (8 Bilder je Datei, 4 Spalten), aus denen assets/js/main.js beim Scrollen zeichnet.

Aufruf:
    python3 build_act_sheets.py <Ordner mit Einzelbildern (PNG, nummeriert)> <Zielordner> <blue|green>
                                <erstes Bild> <letztes Bild> <Anzahl> <Höhen, z. B. 680,440>
                                <Startbild des Clips> <Höhe des Ruhebilds> [Qualität=70]

    Einzelbilder aus dem Clip:  ffmpeg -i clip.mp4 -vsync 0 frames/%04d.png
    Das Startbild macht tools/act_start_image.py aus dem freigestellten Produktbild.

Die Bilder erstes..letztes (ab 1 gezählt) werden gleichmäßig auf <Anzahl> Bilder verteilt. Bild 0 ist die
Frontansicht, das letzte die am weitesten gedrehte Ansicht; die Seite spielt sie beim Scrollen rückwärts ab.
Je Höhe entsteht ein Satz in <Zielordner>/<Höhe>/s0.webp ...; das Ruhebild f00.webp wird aus dem Startbild
geschnitten, weil es schärfer ist als ein Videobild. Dazu kommen contact.jpg (alle Bilder auf dunklem Grund,
zum Prüfen) und data.json (Maße für den Eintrag in ACT in assets/js/main.js).

Braucht Python mit numpy, opencv-python und Pillow.
"""
import glob
import json
import os
import sys

import cv2
import numpy as np
from PIL import Image

src, out, key = sys.argv[1], sys.argv[2], sys.argv[3]
first, last, count = (int(v) for v in sys.argv[4:7])
heights = [int(v) for v in sys.argv[7].split(",")]
start_image, rest_h = sys.argv[8], int(sys.argv[9])
quality = int(sys.argv[10]) if len(sys.argv) > 10 else 70
PER, COLS = 8, 4
os.makedirs(out, exist_ok=True)

files = sorted(glob.glob(os.path.join(src, "*.png")))
picks = [files[int(round(first - 1 + (last - first) * i / (count - 1)))] for i in range(count)]


def cut(bgr):
    """Hintergrundfarbe herausrechnen und ihren Schimmer auf dem Produkt entfernen; liefert ein RGBA-Bild."""
    bgr = bgr.astype(np.float32)
    b, g, r = bgr[..., 0], bgr[..., 1], bgr[..., 2]
    spill = b - np.maximum(r, g) if key == "blue" else g - np.maximum(r, b)
    raw = 1.0 - np.clip((spill - 22.0) / 55.0, 0.0, 1.0)          # 1 = Produkt, 0 = Hintergrund
    solid = (raw > 0.5).astype(np.uint8)
    n, labels, stats, _ = cv2.connectedComponentsWithStats(solid, 8)
    if n > 1:
        solid = (labels == 1 + int(np.argmax(stats[1:, cv2.CC_STAT_AREA]))).astype(np.uint8)
    # Löcher im Produkt schließen (Hintergrundfarbe, die sich im glänzenden Kunststoff spiegelt)
    flood = np.pad(solid, 1)
    cv2.floodFill(flood, None, (0, 0), 2)
    solid = (flood[1:-1, 1:-1] != 2).astype(np.uint8)
    core = cv2.erode(solid, np.ones((7, 7), np.uint8))
    near = cv2.dilate(solid, np.ones((5, 5), np.uint8))
    alpha = np.maximum(raw * near, core.astype(np.float32))
    # die Hintergrundfarbe darf die beiden anderen Kanäle nicht übersteigen
    if key == "blue":
        b = np.minimum(b, np.maximum(r, g))
    else:
        g = np.minimum(g, np.maximum(r, b))
    return np.dstack([r, g, b, alpha * 255.0]).clip(0, 255).astype(np.uint8)


frames = [cut(cv2.imread(p)) for p in picks]
fh, fw = frames[0].shape[:2]
# ein gemeinsamer Ausschnitt für alle Bilder, damit das Produkt nicht springt
ys, xs = np.where(np.max([f[..., 3] for f in frames], axis=0) > 10)
x0, x1, y0, y1 = max(0, xs.min() - 4), min(fw, xs.max() + 5), max(0, ys.min() - 4), min(fh, ys.max() + 5)
frames = [Image.fromarray(f[y0:y1, x0:x1], "RGBA") for f in frames]
w0, h0 = frames[0].size

# Ruhebild aus dem Startbild, gleicher Ausschnitt
big = cv2.imread(start_image)
k = big.shape[1] / fw
rest = Image.fromarray(cut(big)[int(round(y0 * k)):int(round(y1 * k)), int(round(x0 * k)):int(round(x1 * k))], "RGBA")
rest_w = int(round(w0 * rest_h / h0 / 2) * 2)
rest = rest.resize((rest_w, rest_h), Image.LANCZOS)
rest.save(os.path.join(out, "f00.webp"), "WEBP", quality=88, method=6)

data = {"n": count, "per": PER, "cols": COLS, "rest": [rest_w, rest_h], "sets": {}}
for h in heights:
    w = int(round(w0 * h / h0 / 2) * 2)
    small = [f.resize((w, h), Image.LANCZOS) for f in frames]
    small[0] = rest.resize((w, h), Image.LANCZOS)            # erstes Bild = das scharfe Ruhebild
    d = os.path.join(out, str(h))
    os.makedirs(d, exist_ok=True)
    total = 0
    for s in range(0, count, PER):
        chunk = small[s:s + PER]
        rows = (len(chunk) + COLS - 1) // COLS
        sheet = Image.new("RGBA", (COLS * w, rows * h), (0, 0, 0, 0))
        for i, im in enumerate(chunk):
            sheet.paste(im, ((i % COLS) * w, (i // COLS) * h))
        p = os.path.join(d, f"s{s // PER}.webp")
        sheet.save(p, "WEBP", quality=quality, alpha_quality=90, method=6)
        total += os.path.getsize(p)
    data["sets"][str(h)] = {"w": w, "h": h, "kb": total // 1024}
    if h == heights[0]:
        cw, th = 12, 240
        tw = int(w * th / h)
        contact = Image.new("RGBA", (cw * tw, ((count + cw - 1) // cw) * th), (16, 16, 16, 255))
        for i, im in enumerate(small):
            contact.alpha_composite(im.resize((tw, th), Image.LANCZOS), ((i % cw) * tw, (i // cw) * th))
        contact.convert("RGB").save(os.path.join(out, "contact.jpg"), quality=85)

json.dump(data, open(os.path.join(out, "data.json"), "w"))
print(json.dumps(data), "| Ausschnitt:", (int(x0), int(y0), int(x1), int(y1)))
