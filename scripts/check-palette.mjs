// Verifies that the site's CSS only uses colours from src/palette.js.
import { readFileSync } from 'node:fs'
import { values } from '../src/palette.js'

const css = readFileSync(new URL('../src/style.css', import.meta.url), 'utf8')
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const rootMatch = css.match(/:root\{([^}]*--c-[^}]*)\}/)
if (!rootMatch) throw new Error('style.css has no :root colour tokens')
const rest = css.replace(rootMatch[0], '')

const dark = { bg: 'background', 'bg-lighter': 'lighter_background' }
const light = { bg: 'background', surface: 'lighter_background', line: 'surface0', muted: 'subtext1', text: 'text' }
const expected = {}
for (const k of ['surface0', 'surface1', 'surface2', 'overlay0', 'overlay1', 'overlay2', 'subtext0', 'subtext1', 'text', 'red', 'peach', 'green', 'blue']) {
  expected[`--c-${k}`] = values.dark[k]
}
for (const [t, k] of Object.entries(dark)) expected[`--c-${t}`] = values.dark[k]
for (const [t, k] of Object.entries(light)) expected[`--l-${t}`] = values.light[k]

const errors = []
const found = Object.fromEntries([...rootMatch[1].matchAll(/(--[\w-]+):(#[0-9A-Fa-f]{6})/g)].map((m) => [m[1], m[2].toUpperCase()]))
for (const [token, hex] of Object.entries(expected)) {
  if (found[token] !== hex.toUpperCase()) errors.push(`${token}: CSS has ${found[token]}, palette has ${hex}`)
}
for (const token of Object.keys(found)) if (!(token in expected)) errors.push(`${token}: not mapped to the palette`)
const stray = rest.match(/#[0-9A-Fa-f]{3,8}\b/g)
if (stray) errors.push(`raw colours outside :root: ${[...new Set(stray)].join(', ')}`)
const theme = html.match(/name="theme-color" content="(#[0-9A-Fa-f]{6})"/)?.[1]
if (theme?.toUpperCase() !== values.dark.background.toUpperCase()) errors.push(`theme-color ${theme} != dark background ${values.dark.background}`)

if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`palette ok: ${Object.keys(expected).length} tokens, no stray colours`)
