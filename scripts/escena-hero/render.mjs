// Renderiza la escena del hero a una secuencia de frames WebP.
// Uso (con Playwright disponible): node scripts/escena-hero/render.mjs <playwright-dir>
// Salida: public/hero/d-XXX.webp (desktop, 960x800) y public/hero/m-XXX.webp (mobile, 600x500)
import { createRequire } from "node:module"
import { execFileSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

const dir = path.dirname(new URL(import.meta.url).pathname)
const raiz = path.resolve(dir, "../..")
const require = createRequire(path.join(process.argv[2] || raiz, "package.json"))
const { chromium } = require("playwright")

const OUT = path.join(raiz, "public/hero")
const TMP = path.join(dir, ".tmp")
fs.rmSync(OUT, { recursive: true, force: true })
fs.mkdirSync(OUT, { recursive: true })
fs.mkdirSync(TMP, { recursive: true })

const browser = await chromium.launch()
for (const [pref, n, escala] of [["d", 60, 1], ["m", 36, 0.625]]) {
  const page = await browser.newPage({ viewport: { width: 960, height: 800 }, deviceScaleFactor: escala })
  await page.goto("file://" + path.join(dir, "escena.html"))
  await page.evaluate(() => document.fonts.ready)
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1)
    await page.evaluate((t) => window.render(t), t)
    const png = path.join(TMP, `${pref}-${String(i).padStart(3, "0")}.png`)
    await page.locator("#esc").screenshot({ path: png })
  }
  await page.close()
}
await browser.close()
// PNG → WebP con Pillow
execFileSync("python3", ["-c", `
import glob, os
from PIL import Image
for f in sorted(glob.glob(os.path.join(${JSON.stringify(TMP)}, '*.png'))):
    Image.open(f).convert('RGB').save(os.path.join(${JSON.stringify(OUT)}, os.path.basename(f)[:-4] + '.webp'), 'WEBP', quality=74, method=6)
`])
fs.rmSync(TMP, { recursive: true, force: true })
console.log(fs.readdirSync(OUT).length, "frames")
