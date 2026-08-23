#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORK_DIR="$(mktemp -d)"
trap 'rm -rf "$WORK_DIR"' EXIT

cd "$WORK_DIR"

# 1. Fetch Fraunces font and extract 'M' glyph outline
curl -sL "https://github.com/google/fonts/raw/main/ofl/fraunces/Fraunces%5BSOFT%2CWONK%2Copsz%2Cwght%5D.ttf" -o Fraunces.ttf

python3 - << 'EOF'
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen

f = TTFont("Fraunces.ttf")
instantiateVariableFont(f, {"wght": 600, "opsz": 72, "SOFT": 0, "WONK": 0}, inplace=True)

glyph_name = f.getBestCmap()[ord("M")]
glyph_set = f.getGlyphSet()
glyph = glyph_set[glyph_name]

pen = SVGPathPen(glyph_set)
glyph.draw(pen)

with open("m_glyph_path.txt", "w") as fh:
    fh.write(pen.getCommands())
EOF

GLYPH_PATH=$(cat m_glyph_path.txt)

# 2. Build layered vector SVGs (stroke underneath, fill on top)
cat > favicon.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <rect class="bg" width="128" height="128" rx="28" fill="#fff5ee"/>
  <g transform="matrix(0.055714285714,0,0,-0.055714285714,15.748294324970667,103)">
    <path class="outline" d="${GLYPH_PATH}" fill="none" stroke="#241c18" stroke-width="40" stroke-linejoin="round" stroke-linecap="round"/>
    <path class="fill" d="${GLYPH_PATH}" fill="#dd5d2f"/>
  </g>
  <style>
    @media (prefers-color-scheme: dark) {
      .bg { fill: #1c1917; }
      .outline { stroke: #f2e9e4; }
      .fill { fill: #ff8f6b; }
    }
  </style>
</svg>
EOF

cat > apple-touch.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <rect width="128" height="128" fill="#fff5ee"/>
  <g transform="matrix(0.055714285714,0,0,-0.055714285714,15.748294324970667,103)">
    <path d="${GLYPH_PATH}" fill="none" stroke="#241c18" stroke-width="40" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="${GLYPH_PATH}" fill="#dd5d2f"/>
  </g>
</svg>
EOF

# 3. Rasterize all sizes and bundle multi-res .ico
magick -background none favicon.svg -resize 16x16 favicon-16.png
magick -background none favicon.svg -resize 32x32 favicon-32.png
magick -background none favicon.svg -resize 48x48 favicon-48.png
magick -background none apple-touch.svg -resize 180x180 apple-touch-icon.png
magick -background none favicon.svg -resize 192x192 icon-192.png
magick -background none favicon.svg -resize 512x512 icon-512.png
magick favicon-16.png favicon-32.png favicon-48.png favicon.ico

# 4. Copy to repo public directory
cp favicon.svg favicon.ico apple-touch-icon.png icon-192.png icon-512.png "$REPO_ROOT/public/"
echo "Favicons generated successfully in public/"
