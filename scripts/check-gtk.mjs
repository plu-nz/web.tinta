// Verifies that the GTK themes only use colours from src/palette.js (plus black for shadows).
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { values } from '../src/palette.js'

const themes = { Tinta: values.dark, 'Tinta-Light': values.light }
const errors = []
let allowed, root
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (/\.(css|rc|svg|ini|theme)$|gtkrc$/.test(e.name)) {
      const stray = new Set((readFileSync(p, 'utf8').match(/#[0-9A-Fa-f]{6}\b/g) ?? []).map((h) => h.toUpperCase()).filter((h) => !allowed.has(h)))
      if (stray.size) errors.push(`${p.replace(root, 'theme')}: ${[...stray].join(', ')}`)
    }
  }
}
for (const [name, palette] of Object.entries(themes)) {
  allowed = new Set([...Object.values(palette), '#000000'].map((h) => h.toUpperCase()))
  root = new URL(`../themes/gtk/${name}`, import.meta.url).pathname
  walk(root)
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log('gtk theme ok: only palette colours (dark and light)')
