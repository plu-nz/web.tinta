# Agent instructions

Read [README.md](README.md) and the [PLUNZ shared context](https://github.com/plu-nz/.github/blob/main/CONTEXT.md) first.

- **Responsibilities:** `src/palette.js` owns colours, names and groups; `src/index.jsx` renders the page and copy; `src/style.css` owns presentation.
- **Colours:** keep Mocha and Latte values exactly as published by Catppuccin; only the two background colours are PLUNZ adaptations.
- **Conventions:** English for source and docs; page copy in en/pt/es. Keep each language's names in sync.
- **Commands:** `pnpm install --frozen-lockfile`, `pnpm dev`, `pnpm build`, `pnpm deploy`.
- **Completion checks:** `pnpm build`, then check small-screen layout, all three languages, and tinta.plu.nz over HTTPS after deploying.
