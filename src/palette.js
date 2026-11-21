// Colour keys follow the Omarchy colors.toml of the Darkppuccin theme; values are hex.
export const keys=["accent", "selection", "muted", "background", "dark_background", "darker_background", "lighter_background", "foreground", "dark_foreground", "light_foreground", "bright_foreground", "red", "yellow", "orange", "green", "cyan", "blue", "magenta", "brown", "bright_red", "bright_yellow", "bright_green", "bright_cyan", "bright_blue", "bright_magenta"]
export const names={"en": ["Accent", "Selection", "Muted", "Background", "Dark background", "Darker background", "Lighter background", "Foreground", "Dark foreground", "Light foreground", "Bright foreground", "Red", "Yellow", "Orange", "Green", "Cyan", "Blue", "Magenta", "Brown", "Bright red", "Bright yellow", "Bright green", "Bright cyan", "Bright blue", "Bright magenta"], "pt": ["Destaque", "Seleção", "Apagado", "Fundo", "Fundo escuro", "Fundo mais escuro", "Fundo mais claro", "Texto", "Texto escuro", "Texto claro", "Texto brilhante", "Vermelho", "Amarelo", "Laranja", "Verde", "Ciano", "Azul", "Magenta", "Marrom", "Vermelho vivo", "Amarelo vivo", "Verde vivo", "Ciano vivo", "Azul vivo", "Magenta vivo"], "es": ["Acento", "Selección", "Atenuado", "Fondo", "Fondo oscuro", "Fondo más oscuro", "Fondo más claro", "Texto", "Texto oscuro", "Texto claro", "Texto brillante", "Rojo", "Amarillo", "Naranja", "Verde", "Cian", "Azul", "Magenta", "Marrón", "Rojo vivo", "Amarillo vivo", "Verde vivo", "Cian vivo", "Azul vivo", "Magenta vivo"]}
export const values={"dark": ["#F38BA8", "#393947", "#585B70", "#0F0F0F", "#0F0F0F", "#0F0F0F", "#1C1C1C", "#CDD6F4", "#6C7086", "#BAC2DE", "#CDD6F4", "#F38BA8", "#F9E2AF", "#F6B6AB", "#A6E3A1", "#94E2D5", "#89B4FA", "#F5C2E7", "#7B5B55", "#F38BA8", "#F9E2AF", "#A6E3A1", "#94E2D5", "#89B4FA", "#F5C2E7"], "light": ["#A64061", "#DFE2EB", "#6B7082", "#F7F7F9", "#ECECF1", "#E0E1E9", "#FFFFFF", "#25283B", "#25283B", "#555B70", "#161827", "#A64061", "#806019", "#A34E43", "#3D7548", "#236F69", "#315FA5", "#8F4F80", "#76544D", "#B3486B", "#8D6A1C", "#468350", "#287D76", "#396BB4", "#9D588E"]}

// Display groups. A key marked in `base` is hidden when it equals that base colour.
export const base = { dark_background: 'background', darker_background: 'background', bright_red: 'red', bright_yellow: 'yellow', bright_green: 'green', bright_cyan: 'cyan', bright_blue: 'blue', bright_magenta: 'magenta' }
export const groups = [
  { id: 'accent', title: { en: 'Accent', pt: 'Destaque', es: 'Acento' }, keys: ['accent'] },
  { id: 'surfaces', title: { en: 'Surfaces', pt: 'Superfícies', es: 'Superficies' }, keys: ['background', 'dark_background', 'darker_background', 'lighter_background', 'selection', 'muted'] },
  { id: 'text', title: { en: 'Text', pt: 'Texto', es: 'Texto' }, keys: ['foreground', 'light_foreground', 'dark_foreground', 'bright_foreground'] },
  { id: 'colors', title: { en: 'Colors', pt: 'Cores', es: 'Colores' }, keys: ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'magenta', 'brown'] },
  { id: 'vivid', title: { en: 'Vivid', pt: 'Vivas', es: 'Vivos' }, keys: ['bright_red', 'bright_yellow', 'bright_green', 'bright_cyan', 'bright_blue', 'bright_magenta'] }
]
export function visibleGroups(mode, locale) {
  return groups.map((g) => ({
    id: g.id,
    title: g.title[locale],
    items: g.keys.map((k) => {
      const i = keys.indexOf(k)
      return { key: k, name: names[locale][i], hex: values[mode][i] }
    }).filter((it) => !base[it.key] || it.hex !== values[mode][keys.indexOf(base[it.key])])
  })).filter((g) => g.items.length)
}
