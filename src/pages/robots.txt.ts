import type { APIRoute } from "astro";

import { SITE } from "../data/site";

const getRobotsTxt = (sitemapUrl: URL) => {
  if (!SITE.indexable) {
    return "User-agent: *\nDisallow: /\n";
  }

  return `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`;
};

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapUrl), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
