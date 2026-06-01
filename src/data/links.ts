export interface CuratedLink {
  addedAt: string;
  title: string;
  url: string;
}

export const curatedLinks = [
  {
    addedAt: "2026-05-01",
    title: "Astro Content Collections",
    url: "https://docs.astro.build/en/guides/content-collections/",
  },
  {
    addedAt: "2026-04-15",
    title: "Web Interface Guidelines",
    url: "https://github.com/vercel-labs/web-interface-guidelines",
  },
  {
    addedAt: "2026-03-20",
    title: "React: Thinking in React",
    url: "https://react.dev/learn/thinking-in-react",
  },
  {
    addedAt: "2026-02-12",
    title: "Every Layout",
    url: "https://every-layout.dev/",
  },
] satisfies CuratedLink[];
