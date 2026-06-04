# joepetrillo.com

My personal site — a home for writing, projects, and a running notebook of the books, movies, music, quotes, and links I've enjoyed. Built to be fast, accessible, and easy to maintain.

Live at [joepetrillo.com](https://joepetrillo.com).

## Tech stack

- **[Astro 6](https://astro.build)** — static site generation
- **MDX** content collections for writing
- **RSS** feed and **sitemap** generation
- Local variable fonts (Lora, Supreme, Comico)
- Light/dark mode with selectable color palettes
- **[Ultracite](https://www.ultracite.ai/)** (Oxlint + Oxfmt) for linting and formatting

## Structure

```text
src/
├── assets/       # fonts, images, favorite covers
├── components/   # Astro components
├── content/      # writing (Markdown/MDX collection)
├── data/         # site config, projects, favorites, links, palettes
├── layouts/      # SiteLayout
├── pages/        # routes (home, writing, projects, books, movies, music, quotes, links)
├── styles/       # global + normalize CSS
└── utils/        # date + url helpers
```

## Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `bun install`     | Install dependencies                 |
| `bun run dev`     | Start dev server at `localhost:4321` |
| `bun run build`   | Build production site to `./dist/`   |
| `bun run preview` | Preview the production build locally |
| `bun run check`   | Lint and format check (Ultracite)    |
| `bun run fix`     | Auto-fix lint and formatting issues  |
