export interface TimelineEntry {
  description: string;
  title: string;
  year: string;
}

export const timelineEntries = [
  {
    description:
      "Built practical software across product surfaces, internal tools, and the systems that keep them reliable.",
    title: "Kept choosing useful software over flashy software",
    year: "2026",
  },
  {
    description:
      "Focused more deeply on frontend-heavy engineering, design judgment, and product details that make tools easier to trust.",
    title: "Sharpened the product side of engineering",
    year: "2025",
  },
  {
    description:
      "Started treating writing, notes, links, and small projects as durable artifacts instead of scattered side channels.",
    title: "Made room for a more public notebook",
    year: "2024",
  },
  {
    description:
      "Spent more time learning through side projects, travel, golf, and the kind of curiosity that tends to make work better.",
    title: "Followed the useful tangents",
    year: "2023",
  },
] satisfies TimelineEntry[];

export const workPrinciples = [
  "I like code that is easy to change.",
  "I care when interfaces feel confusing.",
  "I prefer simple systems over clever ones.",
  "I like understanding the product, not just closing tickets.",
  "Good engineering usually means fewer surprises.",
] as const;
