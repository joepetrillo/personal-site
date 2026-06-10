import { defineConfig } from "oxlint";
import astro from "ultracite/oxlint/astro";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";

export default defineConfig({
  extends: [core, astro, react],
  ignorePatterns: [
    ...(core.ignorePatterns ?? []),
    ...(astro.ignorePatterns ?? []),
    ...(react.ignorePatterns ?? []),
    ".agents/**",
    ".claude/**",
  ],
  rules: {
    "eslint/sort-keys": "off",
    "func-style": "off",
    "unicorn/filename-case": "off",
  },
});
