# web.tinta

Showcase site for Tinta, the PLUNZ colour palette, live at [tinta.plu.nz](https://tinta.plu.nz).

- **Dark:** Catppuccin Mocha with Darkppuccin backgrounds; text, overlays and surfaces are neutral grays (same luminance, blue tint removed).
- **Light:** Catppuccin Latte with PLUNZ light backgrounds (#F7F7F9, #FFFFFF); same neutral grays for text, overlays and surfaces.
- **Stack:** SolidJS, Vite, pnpm; static assets served by Cloudflare Workers.
- **Languages:** English, Portuguese, Spanish (device default, `plunz_locale` cookie). Group titles are translated in `src/palette.js`.

Commands: `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm deploy`.

See [AGENTS.md](AGENTS.md) and the [src index](src/README.md).
