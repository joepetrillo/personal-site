// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      cssVariable: "--font-atkinson",
      fallbacks: ["sans-serif"],
      name: "Atkinson",
      options: {
        variants: [
          {
            display: "swap",
            src: ["./src/assets/fonts/atkinson-regular.woff"],
            style: "normal",
            weight: 400,
          },
          {
            display: "swap",
            src: ["./src/assets/fonts/atkinson-bold.woff"],
            style: "normal",
            weight: 700,
          },
        ],
      },
      provider: fontProviders.local(),
    },
  ],
  integrations: [mdx(), sitemap()],
  site: "https://example.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
