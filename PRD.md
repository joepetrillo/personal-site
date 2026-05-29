# PRD: Joe Petrillo Personal Site v1

## 1. Purpose

This project is a v1 rewrite of Joe Petrillo's personal site.

The site should be a simple, durable, tasteful home for Joe's professional identity, writing, projects, links, and things worth sharing. It should support career credibility without becoming a formal resume website, content-marketing blog, flashy portfolio template, or overbuilt digital garden.

The site should feel personal, calm, credible, easy to maintain, and easy to understand quickly.

## 2. Product Framing

This is a personal site.

It should function partly as a career-facing profile, but not as a traditional portfolio, resume site, or personal-brand landing page. Visitors should leave with a clear sense of:

- who Joe is
- what kind of engineer he is
- what he cares about
- what he makes
- how he thinks
- what he finds worth sharing

The site should be broad enough to include career-related content, technical writing, projects, travel notes, life and learning notes, and useful links.

## 3. Primary Audience

The primary audience includes:

- engineering managers
- tech leads
- recruiters
- other software engineers
- friends or internet strangers who land on the site
- people interested in Joe's writing, projects, or links

Within roughly 60 seconds, a visitor should understand that Joe is a thoughtful software engineer with good taste, practical engineering values, and a personal site worth exploring.

## 4. v1 Success Criteria

v1 is successful if:

- the site feels complete, calm, and credible with a small amount of content
- the home page gives a strong big-picture understanding of Joe
- the site supports career credibility without feeling like a resume clone
- writing, projects, and links can grow over time without redesigning the site
- the site is easy to navigate on mobile and desktop
- the site feels fast, simple, and polished
- sparse content does not make the site feel broken or abandoned

## 5. Non-goals

The v1 site should not be:

- a formal resume website
- a startup-founder personal brand
- a content-marketing blog
- a flashy portfolio template
- a heavily categorized digital garden
- a generic developer blog
- a site that requires constant updates to feel alive
- an image-heavy portfolio
- a place with complex filtering, search, comments, analytics, or social features

## 6. v1 Page Set

The site includes exactly these main pages:

```txt
/
  Home

/writing
  Writing

/projects
  Projects

/links
  Links
```

Out of scope for v1:

```txt
/about
/blog
/resume
/now
/uses
/contact
/photos
/travel
```

Travel and personal notes can live under Writing. Resume is handled as a static PDF link, not as a dedicated page. There is no `/about` page and no `/blog` page.

## 7. Homepage

The home page should be a durable personal overview. It should not be a feed, recent-content dashboard, or featured-content index.

The home page should feel like a website-form resume in spirit, but not in structure. It should explain Joe's story, values, and direction in a more meaningful way than a skills list or formal work history.

### Homepage Order

```txt
1. Personal overview
2. Selected timeline
3. How I work
4. Small bottom link area
```

### Personal Overview

The homepage opening area combines the intro, restrained avatar, and quiet links. It should not be split into separate Hero and About sections, and it does not need an "About" heading.

The opening should be text-first and include a small real-photo avatar near Joe's name. The avatar is required for v1, but it should be restrained and secondary to the copy. It should not turn the page into a profile-card layout.

Approved draft opening copy:

```txt
I'm Joe, a software engineer who cares about writing good code and building things that are reliable, easy to use, and hard to break.

I use this site to write about software, projects, travel, things I'm learning, and whatever else I find worth sharing.
```

The opening copy may also include a human, lightly personal paragraph that mentions engineering, frontend-heavy experience if useful, side projects, writing, golf, travel, and curiosity. It should not include private relationship or family details, and it should not become a deeply personal autobiography.

Hero links should appear quietly as text links:

```txt
GitHub · LinkedIn · Resume · Email
```

Do not show the full email address as visible text. Use `Email` as the visible link text.

The opening copy should not mention Joe's current employer unless it adds useful credibility without making the page feel dated. Employer context belongs in the selected timeline when useful.

### Selected Timeline

The homepage should include a selected timeline of up to 6 entries.

The selected timeline should:

- use years, not resume-style month ranges
- mix career, learning, projects, and personal direction
- show meaningful progression
- avoid becoming a complete biography or work history
- mention employer context only when it helps the story
- leave exact entries and content to be filled in later

The resume PDF handles formal employment details.

### How I Work

The "How I work" section should communicate engineering judgment and taste.

It should use a short list of sentence-style statements. It should be concrete, personal, and skimmable, not corporate values copy.

Example direction:

```txt
I like code that is easy to change.
I care when interfaces feel confusing.
I prefer simple systems over clever ones.
I like understanding the product, not just closing tickets.
Good engineering usually means fewer surprises.
```

Final copy can change, but should preserve this plain, practical tone.

### Bottom Link Area

The homepage should end with a small, unheaded link area pointing to:

```txt
Writing · Projects · Links
```

This should feel like a quiet continuation of the page, not a featured section, content dashboard, or navigation block.

## 8. Global Navigation

The top navigation should be static, simple, and text-only.

Recommended structure:

```txt
Joe        Writing   Projects   Links
```

Requirements:

- no sticky header in v1
- no logo or monogram
- active page state should be visible but subtle
- no pill-style active states
- no large selected backgrounds
- no theme toggle in the top nav
- no `/about` or `/blog` link

Use "Joe" in visible navigation. Use "Joe Petrillo" in metadata, resume context, and SEO where appropriate.

## 9. Footer

Every page should include a minimal footer.

Footer should include:

```txt
GitHub · LinkedIn · Resume · Email · RSS
System · Light · Dark
```

Requirements:

- present on every page
- minimal and quiet
- no large sitemap
- no corporate footer sections
- theme control lives here, not in the header
- RSS is visible here, but not part of primary navigation
- email visible text is `Email`, not the full address

The theme control should be a segmented System / Light / Dark control. It should be quiet, text-sized, keyboard accessible, and visibly selected without pills or heavy backgrounds.

## 10. Theme

The site should support both light and dark mode in v1.

Requirements:

- default to the user's system preference
- allow manual selection between System, Light, and Dark
- persist the user's chosen preference
- apply the theme before first paint using a small inline script that reads the saved preference, sets the root theme class, and updates `color-scheme`
- use a small semantic color system rather than scattered one-off colors
- no flashy theme animation

Use semantic color tokens such as:

```txt
background
surface
text
muted
border
accent
focus
```

Exact color values are implementation details and should be tuned visually.

Visual target:

```txt
Light mode:
  eggshell / warm off-white
  stone / taupe borders
  dark charcoal text
  not yellow, cream-heavy, or overly beige

Dark mode:
  dark stone / gunmetal
  warm off-white text
  subtle low-contrast borders
  not pure black or neon

Overall:
  earthy, flattened, restrained, readable
```

Accent color should be used sparingly for links, focus states, and subtle active indicators. It should not become a loud brand color.

## 11. Visual Design Direction

The site should feel:

- minimal
- clean
- spacious
- tasteful
- easy to navigate
- calm
- flattened
- text-first
- not gimmicky

Avoid:

- heavy gradients
- glassmorphism
- animation-heavy sections
- card grids everywhere
- huge portrait sections
- startup-style badges
- bright SaaS blue accents
- overly beige or yellow color palettes
- overly clever brand language

The design should rely on:

- strong typography
- spacing
- subtle borders
- quiet metadata
- clean lists
- restrained color
- good mobile layout

## 12. Typography

Use self-hosted fonts in v1.

Primary typography:

```txt
Supreme
```

Accent typography:

```txt
Lora
```

Requirements:

- Supreme is the primary sans font for nearly all interface and reading text
- code can use a normal system monospace stack
- typography should feel modern, readable, understated, and personal without becoming quirky

## 13. Layout Principles

Use lists first.

Cards, split layouts, and framed surfaces may be used sparingly when they improve clarity, especially on the homepage. They should not become the default presentation model.

Requirements:

- Writing page uses a simple list
- Projects page uses a simple annotated list
- Links page uses a simple list
- Homepage may use subtle section separation
- Avoid card grids unless there is a clear reason

## 14. Motion

No motion in v1.

Requirements:

- no page transitions
- no scroll animations
- no animated hero elements
- no decorative motion
- no cursor effects

Basic hover and focus feedback is allowed, but should be instant or near-instant.

## 15. Images

Images are allowed, but they are not a core design element in v1.

Requirements:

- homepage requires a small real-photo avatar
- avatar appears on the homepage only
- avatar is not repeated in nav or footer
- images can appear naturally inside writing and project pages
- no required cover images for writing
- no required thumbnails for projects
- no image-heavy index pages
- the design must still work well when pages are text-only
- images inside writing should use meaningful alt text unless decorative

## 16. Writing

`/writing` is the general home for authored pieces.

Writing can include technical posts, travel notes, learning notes, personal notes, and other things worth sharing. The page should be low-friction and flexible. It should not over-define what belongs there.

Use `writing` as the public section name and the content collection name. Do not use `blog` as a public concept.

Writing entries may be Markdown or MDX. MDX is supported for posts that genuinely need embedded components, but ordinary writing should remain plain Markdown by default.

### Writing Index

The `/writing` page should show:

```txt
Writing

Post Title
May 2026

Another Post
April 2026
```

Requirements:

- page title only
- no intro copy
- no summaries
- no tags
- no categories
- no filtering
- no featured posts
- newest to oldest
- visible dates in simple format
- sparse content is acceptable

Date display:

- list page: `May 2026`
- detail page: `May 28, 2026`

### Writing Detail Pages

Writing detail pages should include:

```txt
<- Writing

Post Title
May 28, 2026
```

Requirements:

- subtle Back to Writing link
- title
- full date
- article body
- no reading time
- no table of contents
- no previous/next navigation
- no related posts
- no full breadcrumbs

## 17. Projects

`/projects` is an annotated external-link list for public things Joe personally built or materially shaped.

Projects should support credibility without becoming a portfolio or case-study section. READMEs and external project destinations are enough for v1.

### Project Index

The `/projects` page should show:

```txt
Projects

Personal Site
A small, durable home for my writing, projects, and links.
2026 · GitHub · Live

Pinbound
A tool for ...
2026 · GitHub
```

Requirements:

- page title only
- no intro copy
- title
- required one-line note
- year
- required GitHub link
- optional Live link
- no internal project detail pages
- no status badges
- no filters
- no categories
- newest to oldest by year

Project title behavior:

```txt
Project title -> GitHub
GitHub -> GitHub
Live -> live URL, if available
```

The rule should be consistent across projects. Do not choose a different "best" title destination per project.

## 18. Links

`/links` is a simple curated list of external things worth sharing.

Links are curated by default and chronological in presentation. The page should feel selected, not like a high-volume feed.

### Links Page

Each item should show:

```txt
Title
domain.com · May 2026
Optional note
```

Requirements:

- page title only
- no intro copy
- title
- clean hostname/domain
- subtle added date
- optional note, usually omitted
- newest added to oldest added
- no tags
- no categories
- no filtering
- no full raw URLs in the visible UI

External links from `/links` should open in a new tab and use `rel="noopener"`.

The URL display should use clean hostnames:

```txt
https://react.dev/learn/synchronizing-with-effects
-> react.dev
```

## 19. RSS

RSS is included in v1.

Requirements:

- RSS feed lives at `/rss.xml`
- RSS feed includes Writing entries only
- projects do not appear in RSS
- links do not appear in RSS
- RSS is linked in the footer
- RSS is included in site metadata for discovery
- RSS is not part of the primary top navigation

## 20. Resume

Resume support in v1 is a static PDF link only.

Requirements:

- no dedicated `/resume` page
- link appears in the homepage opening area and footer
- PDF is the formal artifact for recruiters
- homepage should not become a resume clone

## 21. 404 Page

The site should include a custom 404 page.

Requirements:

- minimal copy
- clear path back home
- matches the site's visual tone
- may include one restrained playful visual element

Suggested copy:

```txt
Page not found

This page doesn't exist, or it moved.

Go home
```

Visual element may be:

- small dithered black-and-white illustration
- ASCII-style detail
- quiet missing-page/path motif
- a restrained Lora accent

No loud jokes, animations, or gimmicks.

## 22. Empty States

Sparse content is acceptable at launch.

Requirements:

- empty or near-empty pages must feel intentional
- no cute "coming soon" language
- no construction-sign tone
- no padded filler content

Example:

```txt
Writing

Nothing here yet.
```

This sentence is state copy, not intro copy.

## 23. SEO and Sharing

V1 should include basic SEO and social support.

Requirements:

- clear page titles
- clear meta descriptions
- Open Graph metadata
- one static Open Graph image for v1
- clean canonical URLs
- sitemap
- robots.txt
- RSS feed discoverability

SEO should make the site presentable when shared. It should not drive the content strategy.

## 24. Analytics

No analytics in v1.

Requirements:

- no Google Analytics
- no tracking scripts
- no privacy banner
- no analytics dashboard requirement

The site should prioritize being fast, simple, and privacy-respecting.

## 25. Accessibility

Accessibility is part of the v1 quality bar.

Requirements:

- strong readable contrast in light and dark mode
- keyboard-accessible navigation and controls
- visible focus states
- semantic headings
- comfortable line length
- readable type sizes
- meaningful images support alt text
- no motion-dependent interactions
- tap targets work well on mobile

## 26. Performance

Performance is an explicit v1 requirement.

The site should feel fast because it is mostly text, simple navigation, and restrained visuals.

Requirements:

- fast initial load
- minimal JavaScript
- optimized images where used
- no heavy third-party scripts
- no analytics
- no unnecessary client-side behavior
- self-hosted fonts
- works well on mobile connections

## 27. Mobile

Mobile is equal priority to desktop.

The site should be designed mobile-first and scale up gracefully.

Requirements:

- mobile must feel intentionally designed, not like compressed desktop
- no cramped navigation
- comfortable reading size
- good line length
- clear tap targets
- no horizontal scrolling
- lists remain readable
- article pages feel good on phones
- footer remains simple
- theme control is usable but not prominent
- desktop and mobile should feel equally polished

## 28. Launch Content Requirements

### Home

Must feel complete.

Requires:

- final opening copy
- real photo avatar
- personal overview
- selected timeline with up to 6 entries
- How I work section
- social, contact, and resume links
- bottom links to Writing, Projects, Links

### Writing

Can launch with 0-2 posts.

If sparse, page should still feel intentional.

### Projects

Should launch with 2-3 project entries.

Each project requires:

- title
- one-line note
- year
- GitHub link

Live links are optional.

### Links

Should launch with 3-5 links.

Notes are optional and will usually be omitted.

## 29. Copy Principles

Copy should be:

- first-person
- plain
- direct
- specific
- thoughtful
- lightly personal
- professional without sounding like a resume
- personal without oversharing

Avoid:

- inflated branding language
- "crafting digital experiences"
- startup-founder positioning
- generic corporate values
- overexplaining what each page is for
- third-person bio language

The site should sound like a thoughtful person wrote it, not a resume, strategist, or template.

## 30. Final v1 Product Summary

The v1 site is a calm, text-first personal site for Joe Petrillo.

It has:

- a durable homepage
- simple Writing index and detail pages
- simple annotated Projects index with GitHub and optional Live links
- simple Links page
- Writing-only RSS feed
- light and dark mode
- minimal footer
- static resume PDF link
- small real-photo homepage avatar
- custom 404 page
- strong mobile experience
- basic SEO and social metadata
- one static Open Graph image
- no analytics
- no heavy interaction model

The product should feel finished even before it has a large archive of posts, projects, or links.
