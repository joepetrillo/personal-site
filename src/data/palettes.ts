/**
 * Color palettes selectable from the footer dropdown.
 *
 * Each palette overrides the base color tokens defined on `:root` in global.css.
 * Token values are [light, dark] and are emitted as `light-dark(light, dark)` so
 * a single palette covers both color schemes. `default` has no tokens — it is the
 * untouched baseline defined in global.css.
 *
 * All palettes are flat, muted, earth-toned, and keep readable contrast in both
 * light and dark modes. Add a new one here and it flows to the override CSS, the
 * early theme script, and the footer dropdown automatically.
 */

type ColorToken =
  | "--color-background"
  | "--color-surface"
  | "--color-text"
  | "--color-muted"
  | "--color-border"
  | "--color-accent"
  | "--color-focus";

export interface Palette {
  key: string;
  label: string;
  /** [light, dark] values per overridden token. Omit for the baseline. */
  tokens?: Record<ColorToken, [string, string]>;
}

export const PALETTES: Palette[] = [
  { key: "default", label: "Default" },
  {
    key: "rust",
    label: "Rust",
    tokens: {
      "--color-background": ["#f8f4ee", "#15130f"],
      "--color-surface": ["#f0eadf", "#1e1b16"],
      "--color-text": ["#28231e", "#efe7d9"],
      "--color-muted": ["#71695e", "#ab9f8e"],
      "--color-border": ["#dad1c4", "#36312a"],
      "--color-accent": ["#9c4221", "#e08a5a"],
      "--color-focus": ["#ad4a26", "#ee9663"],
    },
  },
  {
    key: "ochre",
    label: "Ochre",
    tokens: {
      "--color-background": ["#f9f5ea", "#16130c"],
      "--color-surface": ["#f1ebdc", "#201c14"],
      "--color-text": ["#2a2519", "#f0e8d6"],
      "--color-muted": ["#6e6452", "#aea08b"],
      "--color-border": ["#ddd3bf", "#383229"],
      "--color-accent": ["#8f6312", "#d9a94a"],
      "--color-focus": ["#a07014", "#e7b556"],
    },
  },
  {
    key: "olive",
    label: "Olive",
    tokens: {
      "--color-background": ["#f7f4ec", "#141413"],
      "--color-surface": ["#eeeae0", "#1d1d1b"],
      "--color-text": ["#262420", "#ece8dc"],
      "--color-muted": ["#6d685c", "#a8a394"],
      "--color-border": ["#d7d0c3", "#34332e"],
      "--color-accent": ["#586031", "#b3bd7a"],
      "--color-focus": ["#666e38", "#c2cc86"],
    },
  },
  {
    key: "ink",
    label: "Ink",
    tokens: {
      "--color-background": ["#f6f4ef", "#141413"],
      "--color-surface": ["#ebe8e1", "#1d1c1a"],
      "--color-text": ["#1f1d19", "#efeadf"],
      "--color-muted": ["#67625a", "#a9a294"],
      "--color-border": ["#d6cfc4", "#34322d"],
      "--color-accent": ["#43382c", "#cdbfa9"],
      "--color-focus": ["#574737", "#ddcfb6"],
    },
  },
  {
    key: "pine",
    label: "Pine",
    tokens: {
      "--color-background": ["#f4f5f1", "#121413"],
      "--color-surface": ["#e9ece5", "#1a1d1b"],
      "--color-text": ["#212421", "#e6eae5"],
      "--color-muted": ["#656b63", "#99a39b"],
      "--color-border": ["#cfd4cb", "#2e322f"],
      "--color-accent": ["#2f5d52", "#80b4a7"],
      "--color-focus": ["#3a6e62", "#8dc2b4"],
    },
  },
  {
    key: "oxblood",
    label: "Oxblood",
    tokens: {
      "--color-background": ["#f8f4ef", "#15110f"],
      "--color-surface": ["#f0eade", "#1f1916"],
      "--color-text": ["#271f1e", "#efe5dd"],
      "--color-muted": ["#6f655f", "#ab9d92"],
      "--color-border": ["#dacfc6", "#36302b"],
      "--color-accent": ["#7e2f2c", "#d98477"],
      "--color-focus": ["#8f3733", "#e6907f"],
    },
  },
  {
    key: "plum",
    label: "Plum",
    tokens: {
      "--color-background": ["#f7f4f0", "#141315"],
      "--color-surface": ["#eeeae3", "#1d1c1e"],
      "--color-text": ["#262125", "#ece6e9"],
      "--color-muted": ["#6c6660", "#a8a09f"],
      "--color-border": ["#d8d0c8", "#343134"],
      "--color-accent": ["#6e4659", "#c39ab2"],
      "--color-focus": ["#7d4f66", "#d0a7bf"],
    },
  },
  {
    key: "denim",
    label: "Denim",
    tokens: {
      "--color-background": ["#f5f5f2", "#121315"],
      "--color-surface": ["#eaeae5", "#1a1c1f"],
      "--color-text": ["#212329", "#e7e8ec"],
      "--color-muted": ["#666770", "#a0a1a6"],
      "--color-border": ["#d3d3cd", "#313234"],
      "--color-accent": ["#2f4d72", "#88a6d0"],
      "--color-focus": ["#3a5a82", "#95b3dd"],
    },
  },
  {
    key: "mocha",
    label: "Mocha",
    tokens: {
      "--color-background": ["#f6f1e9", "#13110d"],
      "--color-surface": ["#ede6d9", "#1c1813"],
      "--color-text": ["#2a221a", "#efe6d6"],
      "--color-muted": ["#756857", "#ada08b"],
      "--color-border": ["#ddd0bd", "#373027"],
      "--color-accent": ["#8a5a34", "#d3a172"],
      "--color-focus": ["#9a6539", "#e0ad7c"],
    },
  },
  {
    key: "rose",
    label: "Rose",
    tokens: {
      "--color-background": ["#f8f3f0", "#151110"],
      "--color-surface": ["#efe8e3", "#1e1917"],
      "--color-text": ["#29221f", "#f0e6e1"],
      "--color-muted": ["#6f655e", "#ab9d96"],
      "--color-border": ["#dccfc8", "#36302c"],
      "--color-accent": ["#9c4f55", "#dd9098"],
      "--color-focus": ["#ad585e", "#ea9ba3"],
    },
  },
  {
    key: "fog",
    label: "Fog",
    tokens: {
      "--color-background": ["#f3f4f4", "#121313"],
      "--color-surface": ["#e8eaea", "#1b1c1d"],
      "--color-text": ["#1e2122", "#e6e9ea"],
      "--color-muted": ["#62686a", "#9aa1a3"],
      "--color-border": ["#d0d4d5", "#2f3132"],
      "--color-accent": ["#3f4a4d", "#b5c0c2"],
      "--color-focus": ["#4d5a5e", "#c2cdcf"],
    },
  },
  {
    key: "forest",
    label: "Forest",
    tokens: {
      "--color-background": ["#f5f5ef", "#121311"],
      "--color-surface": ["#eaece3", "#1b1d19"],
      "--color-text": ["#232520", "#e7eae0"],
      "--color-muted": ["#686b60", "#9ba394"],
      "--color-border": ["#d2d5c9", "#2f322c"],
      "--color-accent": ["#2f5a32", "#84bd86"],
      "--color-focus": ["#386b3b", "#92cc94"],
    },
  },
];

/** Keys that map to a real override (everything except the baseline). */
export const PALETTE_KEYS = PALETTES.map((p) => p.key);

/** CSS for the `html[data-palette="…"]` override rules, baked into the head. */
export function paletteOverrideCss(): string {
  return PALETTES.filter((p) => p.tokens)
    .map((p) => {
      const decls = Object.entries(p.tokens ?? {})
        .map(
          ([token, [light, dark]]) =>
            `  ${token}: light-dark(${light}, ${dark});`
        )
        .join("\n");
      return `html[data-palette="${p.key}"] {\n${decls}\n}`;
    })
    .join("\n\n");
}
