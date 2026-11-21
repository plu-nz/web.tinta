# Tinta GTK theme

Dark GTK 2, 3 and 4 theme in the Tinta palette, used by the PLUNZ desktop apps (Lounge, Stage, Nexus, Passport read its named colors) and by the Omarchy `tinta` theme in the Dotfiles repository.

- [`Tinta/`](Tinta): the installable theme. Copy or link it to `~/.themes/Tinta`, then select it with `gsettings set org.gnome.desktop.interface gtk-theme Tinta`.
- Every color in the CSS, `.rc` files, SVGs and the neutral PNG pixels comes from [`../../src/palette.js`](../../src/palette.js): backgrounds `#0F0F0F` and `#1C1C1C`, text `#D7D7D7`, neutral grays `#333333` to `#C3C3C3`, the Tinta accents, and the red accent `#F38BA8` as the theme accent. Pure black appears only in shadows.
- It was derived from the Darkppuccin GTK build by snapping each color to the nearest Tinta color (neutrals to the gray ramp, saturated colors to the closest accent hue) and remapping the neutral grays of the GTK 2 PNG assets. Window background `#151515` became `#0F0F0F`.
- Known limitation: text on the pastel accent uses `#D7D7D7`, as in the original; very small text on accent buttons has low contrast.

Back to the [project README](../../README.md).
