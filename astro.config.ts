import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import { SITE } from "./src/data/site";
import { rehypeWrapTables } from "./src/utils/rehype-wrap-tables";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      cssVariable: "--font-lora",
      fallbacks: ["Georgia", "serif"],
      name: "Lora",
      options: {
        variants: [
          {
            display: "swap",
            src: ["./src/assets/fonts/lora-variable.woff2"],
            style: "normal",
            weight: "100 900",
          },
          {
            display: "swap",
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
      fallbacks: ["Arial", "sans-serif"],
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
      fallbacks: ["Georgia", "serif"],
      name: "Comico",
      options: {
        variants: [
          {
            display: "swap",
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
    processor: unified({ rehypePlugins: [rehypeWrapTables] }),
    shikiConfig: {
      themes: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
      defaultColor: "light-dark()",
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
