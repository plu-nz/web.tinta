# Agent instructions

Read [README.md](README.md) and the [PLUNZ shared context](https://github.com/plu-nz/.github/blob/main/CONTEXT.md) first.

- **Responsibilities:** `src/palette.js` owns colours, names and groups; `src/index.jsx` renders the page and copy; `src/style.css` owns presentation. `scripts/check-palette.mjs` verifies the CSS uses only palette colours and `scripts/check-gtk.mjs` does the same for `themes/gtk/Tinta`; keep the `:root` tokens in `style.css` in sync with `palette.js` and never write raw hex elsewhere.
- **Colours:** this palette is the PLUNZ theme source; other products mirror it. Accent colours derive from Catppuccin Mocha (the orange is Peach, renamed). Backgrounds are PLUNZ values; text, overlays and surfaces are neutral grays (Rec. 709 luminance, see `src/palette.js`). Order the accent colours by hue (Mauve after Lavender). Light reuses the dark accent colours. Change a colour here first, then propagate it to `lib.storybook` and the Dotfiles `tinta` Omarchy theme.
- **Conventions:** English for source and docs; page copy in en/pt/es. Keep each language's names in sync.
- **Commands:** `pnpm install --frozen-lockfile`, `pnpm dev`, `pnpm build`, `pnpm deploy`.
- **Completion checks:** `pnpm build`, then check small-screen layout, all three languages, and tinta.plu.nz over HTTPS after deploying.
