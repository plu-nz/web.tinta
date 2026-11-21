# web.tinta

Showcase site for Tinta, the PLUNZ colour palette, live at [tinta.plu.nz](https://tinta.plu.nz).

- **Dark:** Catppuccin-derived accents; backgrounds `#0F0F0F` and `#1C1C1C`; text, overlays and surfaces are neutral grays (blue tint removed).
- **Light:** the same accents; backgrounds `#F7F7F9` and `#FFFFFF`; neutral grays for text, overlays and surfaces.
- **Source of truth:** `src/palette.js` is the PLUNZ theme source for all products (`lib.storybook` tokens mirror it). The orange accent was Catppuccin's Peach.
- **Stack:** SolidJS, Vite, pnpm; static assets served by Cloudflare Workers.
- **Languages:** English, Portuguese, Spanish (device default, `plunz_locale` cookie). Group titles are translated in `src/palette.js`.

Commands: `pnpm install`, `pnpm dev`, `pnpm build` (also validates the CSS colours against the palette), `pnpm deploy`.

- **GTK theme:** [`themes/gtk`](themes/gtk/README.md) ships Tinta as a GTK 2/3/4 theme for the desktop.

See [AGENTS.md](AGENTS.md) and the [src index](src/README.md).
