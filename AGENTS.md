# Agent instructions

Read [README.md](README.md) and the [PLUNZ shared context](https://github.com/plu-nz/.github/blob/main/CONTEXT.md) first.

- **Responsibilities:** `src/palette.js` owns colour keys, localized names and hex values; `src/index.jsx` renders the page and copy; `src/style.css` owns presentation.
- **Colours:** keep dark values identical to the Darkppuccin `colors.toml`, in the same key order. Light is a proposal; label it as such until approved.
- **Conventions:** English for source and docs; page copy in en/pt/es. Keep each language's names in sync.
- **Commands:** `pnpm install --frozen-lockfile`, `pnpm dev`, `pnpm build`, `pnpm deploy`.
- **Completion checks:** `pnpm build`, then check small-screen layout, all three languages, and tinta.plu.nz over HTTPS after deploying.
