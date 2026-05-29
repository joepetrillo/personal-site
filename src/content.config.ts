import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    description: z.string(),
    draft: z.boolean().optional(),
    pubDate: z.coerce.date(),
    title: z.string(),
  }),
});

export const collections = { writing };
