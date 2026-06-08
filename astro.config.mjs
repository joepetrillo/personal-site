// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import { SITE } from "./src/data/site.ts";

/**
 * Wrap every Markdown `<table>` in a `.table-scroll` container at build time so
 * wide tables scroll horizontally with pure HTML + CSS — no client-side
 * JavaScript needed. (Replaces the former runtime DOM-wrapping enhancement.)
 */
function rehypeTableScroll() {
  /** @param {any[]} nodes */
  const wrap = (nodes) => {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.type === "element" && node.tagName === "table") {
        nodes[i] = {
          type: "element",
          tagName: "div",
          properties: { className: ["table-scroll"] },
          children: [node],
        };
      } else if (node.children) {
        wrap(node.children);
      }
    }
  };
  /** @param {any} tree */
  return (tree) => {
    if (tree.children) {
      wrap(tree.children);
    }
  };
}

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      cssVariable: "--font-lora",
      name: "Lora",
      options: {
        variants: [
          {
            display: "block",
            src: ["./src/assets/fonts/lora-variable.woff2"],
            style: "normal",
            weight: "100 900",
          },
          {
            display: "block",
            src: ["./src/assets/fonts/lora-variable-italic.woff2"],
            style: "italic",
            weight: "100 900",
          },
        ],
      },
      provider: fontProviders.local(),
    },
    {
      cssVariable: "--font-supreme",
      name: "Supreme",
      options: {
        variants: [
          {
            display: "swap",
            src: ["./src/assets/fonts/supreme-variable.woff2"],
            style: "normal",
            weight: "100 900",
          },
          {
            display: "swap",
            src: ["./src/assets/fonts/supreme-variable-italic.woff2"],
            style: "italic",
            weight: "100 900",
          },
        ],
      },
      provider: fontProviders.local(),
    },
    {
      cssVariable: "--font-comico",
      name: "Comico",
      options: {
        variants: [
          {
            display: "block",
            src: ["./src/assets/fonts/comico-regular.woff2"],
            style: "normal",
            weight: 400,
          },
        ],
      },
      provider: fontProviders.local(),
    },
  ],
  image: {
    layout: "constrained",
    objectFit: "cover",
    objectPosition: "center",
  },
  markdown: {
    rehypePlugins: [rehypeTableScroll],
    shikiConfig: {
      // Dual themes: light tokens render inline, dark tokens ride along as
      // `--shiki-dark` custom props and are switched on by the prose CSS when
      // `html[data-theme="dark"]`. Both are muted and warm to match the site.
      themes: {
        dark: "vitesse-dark",
        light: "vitesse-light",
      },
      wrap: false,
    },
  },
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },
  integrations: [mdx(), ...(SITE.indexable ? [sitemap()] : [])],
  site: "https://joepetrillo.com",
  trailingSlash: "never",
});
