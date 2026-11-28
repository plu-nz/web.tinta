# Tinta GTK themes

Dark and light GTK 2, 3 and 4 themes in the Tinta palette, used by the PLUNZ desktop apps (Lounge, Nexus, Passport read its named colors) and by the Omarchy `tinta` theme in the Dotfiles repository.

- [`Tinta-Dark/`](Tinta-Dark): the dark theme. Copy or link it to `~/.themes/Tinta-Dark`, then select it with `gsettings set org.gnome.desktop.interface gtk-theme Tinta-Dark`.
- [`Tinta-Light/`](Tinta-Light): the light variant (`gsettings set org.gnome.desktop.interface gtk-theme Tinta-Light`), generated from the dark theme by mapping each neutral to its Tinta light counterpart (`#0F0F0F`→`#F7F7F9`, `#1C1C1C`→`#FFFFFF`, text `#D7D7D7`→`#515151`, the gray ramp inverted) and inverting the neutral pixels of the GTK 2 assets. Accents are unchanged, as in the Tinta light palette.
- Every color in the CSS, `.rc` files, SVGs and the neutral PNG pixels comes from [`../../src/palette.js`](../../src/palette.js): backgrounds `#0F0F0F` and `#1C1C1C`, text `#D7D7D7`, neutral grays `#333333` to `#C3C3C3`, the Tinta accents, and the red accent `#F38BA8` as the theme accent. Pure black appears only in shadows.
- It was derived from the Darkppuccin GTK build by snapping each color to the nearest Tinta color (neutrals to the gray ramp, saturated colors to the closest accent hue) and remapping the neutral grays of the GTK 2 PNG assets. Window background `#151515` became `#0F0F0F`.
- Known limitation: text on the pastel accent has low contrast in the dark theme (`#D7D7D7`, as in the original) and moderate contrast in the light one (`#515151`); very small text on accent buttons is hard to read.

Back to the [project README](../../README.md).
