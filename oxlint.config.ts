import { defineConfig } from "oxlint";
import antiSlop from "ultracite/oxlint/anti-slop";
import astro from "ultracite/oxlint/astro";
import core from "ultracite/oxlint/core";
import landmines from "ultracite/oxlint/landmines";
import react from "ultracite/oxlint/react";

export default defineConfig({
  env: core.env,
  extends: [core, react, astro, antiSlop, landmines],
  ignorePatterns: [...(core.ignorePatterns ?? []), ".agents/**", ".claude/**"],
  jsPlugins: landmines.jsPlugins,
  rules: {
    "eslint/sort-keys": "off",
    "func-style": "off",
    "unicorn/filename-case": "off",
  },
});
