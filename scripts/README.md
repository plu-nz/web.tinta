# scripts

- `check-palette.mjs`: fails the build when the CSS colour tokens differ from `src/palette.js` or raw hex colours appear outside `:root`.
- [`check-gtk.mjs`](check-gtk.mjs): verifies that the GTK theme in [`../themes/gtk`](../themes/gtk/README.md) uses only palette colours (plus black shadows).
