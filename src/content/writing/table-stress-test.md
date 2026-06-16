---
title: Table Stress Test
description: A table-only post with compact, wide, media-heavy, code-heavy, and hostile Markdown tables for checking prose table rendering.
pubDate: 2026-06-10
draft: true
---

## Table 01 - Compact key/value

| Key   | Value                                   |
| ----- | --------------------------------------- |
| Site  | joepetrillo.com                         |
| Stack | Astro 6, MDX, local fonts               |
| Theme | Light and dark with selectable palettes |

## Table 02 - Single-column notes

| Note                                                                                                           |
| -------------------------------------------------------------------------------------------------------------- |
| A single-column table should still get enough width to avoid feeling like a narrow tag.                        |
| This row includes `inline code` and a sentence that should wrap like normal prose.                             |
| This row includes a deliberately long token: abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789. |

## Table 03 - Short identifiers

| ID  | Key | Count | Flag  |
| --- | --- | ----- | ----- |
| 1   | nav | 4     | true  |
| 2   | rss | 2     | false |
| 3   | og  | 12    | true  |
| 4   | mdx | 1     | true  |

## Table 04 - First column labels

| Label | Description                                                   |
| ----- | ------------------------------------------------------------- |
| A     | One-letter labels should not force a wide first column.       |
| B     | The first column has a smaller minimum than ordinary columns. |
| C     | The second column should carry the prose.                     |

## Table 05 - Numeric measures

| Metric | Current | Target |  Delta |
| ------ | ------: | -----: | -----: |
| CLS    |    0.01 |   0.00 |  -0.01 |
| LCP    |   1.24s |  1.10s | -0.14s |
| Build  |   1.42s |  1.25s | -0.17s |
| Routes |      14 |     14 |      0 |

## Table 06 - Dates and versions

| Release | Date       | Runtime    | Notes                                |
| ------- | ---------- | ---------- | ------------------------------------ |
| Initial | 2026-06-01 | Node 22.12 | Content collections and local fonts. |
| Tables  | 2026-06-10 | Astro 6.4  | Scroll wrappers and column minimums. |
| Polish  | 2026-06-11 | Bun 1.x    | Placeholder row for a future pass.   |

## Table 07 - Inline code

| Context         | Code                                     | Why it is here                                   |
| --------------- | ---------------------------------------- | ------------------------------------------------ |
| CSS class       | `.prose-table-scroll`                    | Tests a normal short class token.                |
| Custom property | `var(--color-background)`                | Tests punctuation, parentheses, and dashes.      |
| Selector        | `.prose :global(:is(th, td):last-child)` | Tests a longer selector that may wrap.           |
| Function        | `formatFullDate(entry.data.pubDate)`     | Tests a JS expression with dots and parentheses. |

## Table 08 - Very long code tokens

| Kind    | Token                                                                           |
| ------- | ------------------------------------------------------------------------------- |
| hash    | `sha256:deadbeefcafef00dba5eba11deadbeefcafef00dba5eba11deadbeefcafef00d`       |
| package | `@example-org/some-extremely-long-package-name-for-table-overflow-testing`      |
| env     | `PUBLIC_EXPERIMENTAL_TABLE_RENDERING_STRESS_TEST_FLAG`                          |
| css     | `grid-template-columns:minmax(0,1fr)_minmax(max-content,2fr)_fit-content(24ch)` |

## Table 09 - Paths and commands

| Task    | Command                            | Path                                              |
| ------- | ---------------------------------- | ------------------------------------------------- |
| Build   | `bun run build`                    | `dist/writing/table-stress-test/index.html`       |
| Check   | `bun x ultracite check`            | `src/components/Prose.astro`                      |
| Preview | `bun run preview --host 127.0.0.1` | `http://127.0.0.1:4321/writing/table-stress-test` |

## Table 10 - Escaped pipes

| Example               | Rendered content                                          |
| --------------------- | --------------------------------------------------------- |
| Shell pipeline        | <code>cat access.log &#124; rg 404 &#124; sort</code>     |
| TypeScript union      | <code>type Size = Small &#124; Medium &#124; Large</code> |
| Markdown table source | <code>&#124; Header &#124; Header &#124;</code>           |

## Table 11 - Links

| Destination      | Link                                                                                                                                   | Notes                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Astro            | [Astro docs](https://docs.astro.build)                                                                                                 | Short text, ordinary destination.                                      |
| MDN              | [CSS overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)                                                    | Relevant to this stress test.                                          |
| Long visible URL | <https://example.com/this/is/a/very/long/url/that/keeps/going/through/multiple/path/segments/and/query?alpha=one&beta=two&gamma=three> | This should force the table wider or wrap gracefully when appropriate. |

## Table 12 - Images

| ID  | Preview                                                                                                                    | Caption                                           |
| --- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| 1   | <img src="https://picsum.photos/seed/table-one/96/64" alt="Random landscape one." width="96" height="64" loading="lazy">   | Small remote image in a table cell.               |
| 2   | <img src="https://picsum.photos/seed/table-two/128/72" alt="Random landscape two." width="128" height="72" loading="lazy"> | Wider thumbnail with the same prose image chrome. |
| 3   | <img src="https://picsum.photos/seed/table-three/64/64" alt="Random square." width="64" height="64" loading="lazy">        | Square image to test cell height.                 |

## Table 13 - Image metadata

| Asset                                                                                                                            | Dimensions | Alt text                  |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------- |
| <img src="https://picsum.photos/seed/avatar-like/48/48" alt="Tiny square placeholder." width="48" height="48" loading="lazy">    | `48x48`    | Tiny square placeholder.  |
| <img src="https://picsum.photos/seed/banner-like/160/60" alt="Small banner placeholder." width="160" height="60" loading="lazy"> | `160x60`   | Small banner placeholder. |

## Table 14 - Prose-heavy final column

| ID  | State  | Notes                                                                                                                                                   |
| --- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 101 | Draft  | This final column is intentionally prose-heavy so the last-column minimum has a chance to make the row readable before horizontal scrolling takes over. |
| 102 | Review | The text should wrap in a controlled measure rather than collapsing to a few words per line.                                                            |
| 103 | Done   | A short note should still sit naturally inside the same column.                                                                                         |

## Table 15 - Many narrow columns

| A   | B   | C   | D   | E   | F   | G   | H   | I   | J   | K   | L   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  |
| a   | b   | c   | d   | e   | f   | g   | h   | i   | j   | k   | l   |
| yes | no  | yes | no  | yes | no  | yes | no  | yes | no  | yes | no  |

## Table 16 - Mixed emphasis

| Element  | Example                        | Notes                                       |
| -------- | ------------------------------ | ------------------------------------------- |
| Strong   | **bold value**                 | Should keep normal prose rhythm.            |
| Emphasis | _italic value_                 | Should not change cell sizing too much.     |
| Mark     | <mark>highlighted value</mark> | Tests inline highlight inside a row.        |
| Code     | `highlighted_code_value`       | Tests boxed inline code next to plain text. |

## Table 17 - Keyboard shortcuts

| Action | Shortcut                       | Platform           |
| ------ | ------------------------------ | ------------------ |
| Search | <kbd>Cmd</kbd> + <kbd>K</kbd>  | macOS              |
| Close  | <kbd>Esc</kbd>                 | All                |
| Jump   | <kbd>G</kbd> then <kbd>T</kbd> | Keyboard-driven UI |

## Table 18 - Abbreviations

| Term                                                | Expansion                 | Example                                          |
| --------------------------------------------------- | ------------------------- | ------------------------------------------------ |
| <abbr title="Cascading Style Sheets">CSS</abbr>     | Cascading Style Sheets    | `overflow-wrap`, `text-wrap`, and `white-space`. |
| <abbr title="HyperText Markup Language">HTML</abbr> | HyperText Markup Language | Raw table cells can include `<img>` and `<kbd>`. |
| <abbr title="Really Simple Syndication">RSS</abbr>  | Really Simple Syndication | Feed links need predictable text wrapping.       |

## Table 19 - Empty and missing-looking values

| Field       | Value | Comment                         |
| ----------- | ----- | ------------------------------- |
| title       |       | Empty cell after the separator. |
| description | N/A   | Plain fallback text.            |
| url         | -     | Dash fallback.                  |
| tags        | `[]`  | Code fallback.                  |

## Table 20 - HTML line breaks

| Step | Detail                                                                         |
| ---- | ------------------------------------------------------------------------------ |
| 1    | First line<br>Second line<br>Third line                                        |
| 2    | Short line<br>A much longer second line that should wrap if the column narrows |
| 3    | `code-line-one`<br>`code-line-two-with-a-longer-token`                         |

## Table 21 - Nested HTML lists

| Category | Items                                                                          |
| -------- | ------------------------------------------------------------------------------ |
| Frontend | <ul><li>Astro layouts</li><li>Prose styles</li><li>Palette variables</li></ul> |
| Content  | <ul><li>Markdown posts</li><li>MDX support</li><li>RSS feeds</li></ul>         |
| Media    | <ul><li>Local images</li><li>Remote placeholders</li><li>Alt text</li></ul>    |

## Table 22 - Status matrix

| Item          | Draft | Checked | Published | Notes                       |
| ------------- | ----- | ------- | --------- | --------------------------- |
| Kitchen sink  | no    | yes     | yes       | Baseline Markdown coverage. |
| Overflow test | no    | yes     | yes       | Hostile content coverage.   |
| Table test    | no    | yes     | yes       | Table-specific coverage.    |

## Table 23 - Long prose and long code together

| Case | Code                                                              | Notes                                                                                                                                                           |
| ---- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A    | `config.markdown.processor.rehypePlugins.tableWrapper.enabled`    | The prose cell is intentionally long enough to compete with the code cell for space, which should expose whether the table algorithm makes a reasonable choice. |
| B    | `renderedContent.children.map((child) => child.type === "table")` | This one includes punctuation and arrows of meaning without actual arrow glyphs, keeping the token plain ASCII.                                                 |
| C    | `layoutWidth = min(43rem, calc(100% - 2rem))`                     | A CSS-like assignment that should remain readable in a table cell.                                                                                              |

## Table 24 - Long URL and hash

| Kind | Value                                                                                                                                                       | Comment          |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| URL  | <https://assets.example.com/content/writing/table-stress-test/with/a/path/that/keeps/going/and/going/and/going/image.png?width=1600&height=900&format=webp> | Long autolink.   |
| Hash | `0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`                                                                                         | Long code token. |
| Slug | `table-stress-test-with-everything-that-can-fit-inside-a-markdown-table`                                                                                    | Long slug token. |

## Table 25 - Very wide comparison

| Feature | Markdown              | MDX                 | HTML     | Astro component            | Notes                                                             |
| ------- | --------------------- | ------------------- | -------- | -------------------------- | ----------------------------------------------------------------- |
| Tables  | Native pipe syntax    | Supported           | Native   | Custom wrappers possible   | Pipe syntax is convenient but limited for complex cell content.   |
| Images  | Markdown image syntax | Components possible | `<img>`  | Optimized image components | This row deliberately mixes short labels with prose notes.        |
| Code    | Backticks             | Backticks and JSX   | `<code>` | Highlighted blocks         | Inline code needs good wrapping so it does not burst the measure. |

## Table 26 - One huge row

| ID    | Description                                                                                                                                    | Token                                                                 | Link                                                                              | Image                                                                                                                     |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| final | This single row combines prose, code, a long link, and an image so the table has to decide how wide it wants to be before the wrapper scrolls. | `final_row_token_with_a_long_name_and_many_segments_abcdef0123456789` | <https://example.com/final/row/with/a/long/path/and/query?table=true&stress=true> | <img src="https://picsum.photos/seed/final-row/96/64" alt="Final row placeholder." width="96" height="64" loading="lazy"> |

## Table 27 - Angular NgModule fields

| Field          | Question it answers                                                            | Put this there                                                            |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `declarations` | Which non-standalone declarables belong to this module?                        | Components, directives, pipes created by this feature.                    |
| `imports`      | What outside template features and provider packages does this module consume? | `CommonModule`, feature modules, standalone declarables, library modules. |
| `exports`      | What should other modules be allowed to use from this module?                  | Public components, directives, pipes, and re-exported modules.            |
| `providers`    | What injectable values should be registered?                                   | Services, injection tokens, values, factories, aliases.                   |
| `bootstrap`    | What component starts the NgModule app?                                        | The root component, usually `AppComponent`.                               |
