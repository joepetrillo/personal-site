---
title: The Markdown Kitchen Sink
description: A reference post that exercises every common Markdown element — headings, code, tables, lists, quotes, images, and the small mechanical bits in between.
pubDate: 2026-06-05
draft: false
---

This post exists to wring out the writing styles. It runs through everything I
expect to reach for — **bold** and _italic_ emphasis, `inline code`, [prose
links](https://astro.build), and the occasional ~~struck-through~~ afterthought —
so I can see how the page reads when every tool is on the table at once.

If a paragraph needs a little more room to breathe, it should still feel calm and
unhurried. Good body copy is mostly about restraint: generous line height, a
comfortable measure, and just enough contrast to stay legible without shouting.

## Headings set the rhythm

Sections open with a serif heading that carries a bit of weight. Below it, the
text returns to the workhorse sans. The contrast between the two is the whole
point — it tells you where you are without a single rule or box.

### A third level for finer structure

Use these sparingly. When a subsection genuinely needs its own label, it should
sit a notch quieter than the section above it.

## Emphasis and the small mechanical bits

Inline styling should feel woven in, never pasted on. Here is a sentence with
**strong emphasis**, some _lighter stress_, a bit of `monospace`, and a
<mark>highlighted phrase</mark> for good measure. Keyboard shortcuts render as
keys: press <kbd>Cmd</kbd> + <kbd>K</kbd> to open the palette, or <kbd>Esc</kbd>
to back out.

Abbreviations get a subtle dotted underline, like
<abbr title="Cascading Style Sheets">CSS</abbr> and
<abbr title="HyperText Markup Language">HTML</abbr>, so the expansion is one
hover away.

## Quotes

Block quotes are for borrowed voices and pulled-out ideas.

> Simplicity is a great virtue but it requires hard work to achieve it and
> education to appreciate it. And to make matters worse: complexity sells better.
>
> — Edsger W. Dijkstra

They should hold up across more than one line, and they should look deliberate
rather than like an indented accident.

## Lists

An unordered list, for things that have no inherent order:

- A clear point, stated once.
- Another, with a [link](https://developer.mozilla.org) tucked inside it.
- A third that runs a little longer to confirm that wrapped list items keep their
  left edge aligned under the first word rather than the bullet.

An ordered list, for steps that happen in sequence:

1. Read the whole thing first.
2. Make the smallest change that could possibly work.
3. Confirm it actually worked before moving on.

Lists can nest when the structure calls for it:

- Frontend
  - Layout and typography
  - Color and theming
- Backend
  - Content pipeline
  - Build and deploy

And task lists, for tracking what's done:

- [x] Draft the prose styles
- [x] Wire up the code theme
- [ ] Decide on a pull-quote treatment
- [ ] Write something actually worth reading

## Code

Inline references like `useState` or `const x = 1` sit comfortably mid-sentence.
But the real test is the block. Here is a small, idiomatic chunk of TypeScript:

```ts
type Post = {
  title: string;
  pubDate: Date;
  draft?: boolean;
};

// Newest first, drafts hidden.
function publishedPosts(posts: Post[]): Post[] {
  return posts
    .filter((post) => !post.draft)
    .toSorted((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
}

const next = publishedPosts(allPosts).at(0);
console.log(`Up next: ${next?.title ?? "nothing yet"}`);
```

A different language should look just as at home. Some CSS:

```css
.prose {
  display: grid;
  gap: 1.2rem;
  font-size: var(--text-md);
  line-height: var(--leading-body);
}

.prose a {
  text-decoration-line: underline;
  text-underline-offset: 0.16rem;
}
```

And a quick shell snippet, the kind that ends up in a lot of posts:

```bash
# Build the site and preview the output locally
bun run build
bun run preview --host
```

## Tables

Tables earn their keep for genuinely tabular data. They should stay readable, and
they should scroll gracefully on narrow screens rather than blowing out the layout.

| Element      | Renders as        | Notes                                  |
| ------------ | ----------------- | -------------------------------------- |
| `# Heading`  | Serif display     | Balanced wrapping, tight leading       |
| `> Quote`    | Accent left rule  | Italic, slightly louder than body text |
| `` `code` `` | Bordered inline   | Surface background, monospace          |
| Table        | Bordered, striped | Scrolls horizontally when needed       |
| Image        | Framed figure     | Click to open the lightbox             |

## Images

A plain Markdown image stretches to the measure and picks up a subtle frame:

![A wide landscape standing in for a hero image.](https://picsum.photos/seed/joe-hero/1600/900)

For anything that deserves a caption, a figure pairs the image with a line of
context underneath — and either way, clicking or tapping opens a full-view
lightbox so the details are actually legible.

<figure>
  <img
    src="https://picsum.photos/seed/joe-detail/1200/800"
    alt="A closer, more detailed placeholder image."
    loading="lazy"
  />
  <figcaption>
    A figure with a caption. Tap the image to open it full-screen.
  </figcaption>
</figure>

## A quiet break

When a post needs to change gears, a horizontal rule marks the seam without
making a scene.

---

That's the whole inventory. If every element above reads cleanly on its own and
sits well next to its neighbors, the prose styles are doing their job — and I can
get back to worrying about the words instead of the CSS.
