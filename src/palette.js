// Catppuccin Mocha (dark) and Latte (light), exact values, except the background colours,
// which are PLUNZ's own adaptation (Darkppuccin for dark). Text, overlays and surfaces
// keep Catppuccin's lightness but drop its blue tint (Rec. 709 luminance, no hue).
export const names = {"rosewater": "Rosewater", "flamingo": "Flamingo", "pink": "Pink", "mauve": "Mauve", "red": "Red", "maroon": "Maroon", "peach": "Peach", "yellow": "Yellow", "green": "Green", "teal": "Teal", "sky": "Sky", "sapphire": "Sapphire", "blue": "Blue", "lavender": "Lavender", "text": "Text", "subtext1": "Subtext1", "subtext0": "Subtext0", "overlay2": "Overlay2", "overlay1": "Overlay1", "overlay0": "Overlay0", "surface2": "Surface2", "surface1": "Surface1", "surface0": "Surface0", "background": "Background", "lighter_background": "Lighter background"}
export const values = {
  dark: {"rosewater": "#F5E0DC", "flamingo": "#F2CDCD", "pink": "#F5C2E7", "mauve": "#CBA6F7", "red": "#F38BA8", "maroon": "#EBA0AC", "peach": "#FAB387", "yellow": "#F9E2AF", "green": "#A6E3A1", "teal": "#94E2D5", "sky": "#89DCEB", "sapphire": "#74C7EC", "blue": "#89B4FA", "lavender": "#B4BEFE", "text": "#D7D7D7", "subtext1": "#C3C3C3", "subtext0": "#AEAEAE", "overlay2": "#9A9A9A", "overlay1": "#858585", "overlay0": "#717171", "surface2": "#5C5C5C", "surface1": "#484848", "surface0": "#333333", "background": "#0F0F0F", "lighter_background": "#1C1C1C"},
  light: {"rosewater": "#DC8A78", "flamingo": "#DD7878", "pink": "#EA76CB", "mauve": "#8839EF", "red": "#D20F39", "maroon": "#E64553", "peach": "#FE640B", "yellow": "#DF8E1D", "green": "#40A02B", "teal": "#179299", "sky": "#04A5E5", "sapphire": "#209FB5", "blue": "#1E66F5", "lavender": "#7287FD", "text": "#515151", "subtext1": "#606060", "subtext0": "#707070", "overlay2": "#808080", "overlay1": "#909090", "overlay0": "#A0A0A0", "surface2": "#B0B0B0", "surface1": "#C0C0C0", "surface0": "#D0D0D0", "background": "#F7F7F9", "lighter_background": "#FFFFFF"}
}
export const groups = [{"id": "colors", "title": {"en": "Colors", "pt": "Cores", "es": "Colores"}, "keys": ["rosewater", "flamingo", "pink", "mauve", "red", "maroon", "peach", "yellow", "green", "teal", "sky", "sapphire", "blue", "lavender"]}, {"id": "text", "title": {"en": "Text", "pt": "Texto", "es": "Texto"}, "keys": ["text", "subtext1", "subtext0"]}, {"id": "overlays", "title": {"en": "Overlays", "pt": "Sobreposições", "es": "Superposiciones"}, "keys": ["overlay2", "overlay1", "overlay0"]}, {"id": "surfaces", "title": {"en": "Surfaces", "pt": "Superfícies", "es": "Superficies"}, "keys": ["surface2", "surface1", "surface0"]}, {"id": "background", "title": {"en": "Background", "pt": "Fundo", "es": "Fondo"}, "keys": ["background", "lighter_background"]}]
export function visibleGroups(mode, locale) {
  return groups.map((g) => ({
    id: g.id,
    title: g.title[locale],
    items: g.keys.map((k) => ({ key: k, name: names[k], hex: values[mode][k] }))
  }))
}
