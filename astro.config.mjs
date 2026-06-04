// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

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
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },
  integrations: [mdx(), sitemap()],
  site: "https://joepetrillo.com",
});
