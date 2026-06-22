# Design Notes

A plain-language read on how joepetrillo.com looks and feels in its current
state, and the system underneath it. Written for a person, not a build tool —
read it top to bottom and you should be able to picture the site without opening
it. The source of truth is `src/styles/global.css` and `src/data/palettes.ts`;
this describes what those values add up to.

---

## The overall feel

Quiet, warm, and bookish. The site reads like a well-set page in a paperback
rather than a web app — generous line spacing, a single narrow column of text,
muted earth tones, and almost no chrome. Nothing glows, bounces, or floats:
there are no drop shadows on cards, no rounded "pill" buttons, no gradients, no
brand-blue accents. Color is dialed back to the point where the *words* are the
loudest thing on the screen. The mood is calm, literary, and a little
old-paper — closer to a reading app or a typographer's personal site than to a
SaaS landing page.

It works in light and dark mode equally, and in both it stays warm: light mode
is a soft cream rather than stark white, and dark mode is a near-black brown
rather than pure black or cool slate. Even the dark theme feels like dim lamp
light on paper, not a glowing screen.

## Color

Everything is built from **seven tokens**, each defined as a light/dark pair so
one value covers both schemes:

- **Background** — the page. A warm off-white cream in light mode (`#f8f5ef`),
  a very dark warm brown-black in dark mode (`#151514`).
- **Surface** — slightly raised areas (code, table stripes, the palette
  dropdown). One shade off the background, never a hard contrast.
- **Text** — near-black warm brown on cream, soft warm off-white on dark. Never
  pure `#000` or `#fff`; the contrast is intentionally gentle.
- **Muted** — secondary text: dates, captions, list markers, the theme
  controls at rest. A mid-tone taupe.
- **Border** — hairline rules and dividers. Low-contrast; lines are meant to be
  felt, not seen.
- **Accent** — the one color with any saturation. A muted terracotta/clay brown
  (`#7a4f36` light, a softer tan `#d7aa84` dark). It shows up only in small
  doses: link underlines, text selection, the checkbox tick, the tap highlight.
- **Focus** — a slightly punchier version of the accent, used for the
  keyboard-focus ring so it stays visible for accessibility.

The palette is deliberately **flat and desaturated**. There is no success-green,
error-red, or info-blue; no semantic color system at all. The whole site lives
on one warm neutral ramp plus a single clay accent.

### Selectable color themes

On top of light/dark, the reader can pick an **accent palette** from a dropdown,
saved to their browser. All of them keep the same flat, muted, earth-toned
character and readable contrast in both modes — they swap the *hue*, not the
mood:

- **Default** — the baseline clay/terracotta.
- **Rust** — warmer, more orange clay.
- **Olive** — soft muted green.
- **Ink** — almost no hue; a near-neutral warm grey-brown.
- **Pine** — deep muted teal-green.
- **Oxblood** — dusty dark red.
- **Plum** — muted mauve/purple.
- **Denim** — soft slate blue (the one cool option).
- **Mocha** — warm coffee brown.
- **Rose** — dusty pink-red.

Think of these as choosing the color of the ink, not redecorating the room. The
paper, the spacing, and the type never change.

## Typography

Three local variable fonts, each with a clear job:

- **Lora** (serif) — used for all **headings** and for **blockquotes**. This is
  what gives the site its literary, editorial voice. Headings are serif and
  semibold; pull-quotes are serif italic.
- **Supreme** (sans-serif) — the **body and UI** face. Clean and neutral, it
  carries running text, navigation, lists, and controls.
- **Comico** — a **display/decorative** face reserved for one moment: the big
  number on the 404 page. It's the site's only flourish.

The type sets the reading tone more than anything else:

- **Body text is large and airy.** Long-form writing runs at ~19px with a very
  open line height (~1.72) — noticeably looser than typical web text, which is
  what makes pages feel like a book rather than a screen.
- **Headings sit close to the text they introduce.** Heading line height is
  tight (~1.18) and bottom margins are deliberately small, so a heading reads as
  attached to the paragraph below it, not floating between sections.
- **A modest type scale.** Meta (~14px) → body (~17px) → medium (~19px) →
  large (24px) → display (36px). The jumps are gentle; nothing is huge.
- **Careful small details.** Numbers in ordered lists and (where used) data are
  tabular so they line up; headings and list items use balanced/pretty
  text-wrapping to avoid ugly orphans; fonts are anti-aliased; inline code,
  keyboard keys (`kbd` styled as little keycaps), and highlight marks all have
  their own quiet treatments.

## Layout and space

- **One narrow column.** Content is capped at **43rem (~688px)** and centered,
  with a 1rem gutter on small screens. There is no sidebar, no multi-column
  grid — just a single readable measure down the middle of the page.
- **Generous vertical rhythm.** Major page sections are separated by a big
  ~4.5rem gap; list entries by ~1.2rem. The spacing does the work that borders
  and boxes would do elsewhere.
- **Almost no boxes.** Sections are divided by whitespace and the occasional
  hairline rule, not by cards or panels.

## Borders, edges, and shape

- **Hairline-everything.** Most borders are 1px in the low-contrast border
  color. Tables, code blocks, images, and the palette select all get the same
  thin ring.
- **Slightly rounded, never round.** A small 6px radius softens images, code
  blocks, and tables. Buttons and the palette dropdown are deliberately
  **square** (0 radius). There are no large pill shapes anywhere.
- **No shadows, no depth.** The site is visually flat. The only shadow in the
  whole system is the faux "dropped edge" on a `kbd` keycap. Surfaces are
  distinguished by a one-step color shift, not by elevation.

## Interaction and motion

The site is restrained and accessible by default:

- **Links are quiet until you touch them.** In running prose, links are
  underlined and slightly heavier so they're clear in dense text. Standalone
  links (nav, controls) have **no underline at rest** and only underline on
  hover, in the accent color, with a comfortable 4px offset. The active item in
  the theme switcher shows its state with that same underline.
- **Focus is always visible.** Keyboard focus draws a 2px solid ring in the
  focus color, offset from the element — a genuine accessibility feature, not
  decoration.
- **Motion is minimal and opt-out-aware.** Smooth scrolling and the few small
  transitions are disabled under `prefers-reduced-motion`. Nothing animates for
  show.
- **Small thoughtful affordances.** Custom thin scrollbars tinted to the theme,
  a soft accent-tinted tap highlight on mobile, a "copy link" button that
  appears next to headings on writing pages, and text selection tinted with the
  accent. These are the kind of details you only notice if you're looking — the
  point is that they never shout.

## In one sentence

A warm, paper-like, single-column reading site in muted earth tones, set in a
literary serif/sans pairing, almost entirely flat and border-light, where the
only real color is a single clay accent the reader can re-tint — designed so the
writing is always the loudest thing on the page.
