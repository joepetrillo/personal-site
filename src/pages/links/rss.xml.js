import rss from "@astrojs/rss";

import { curatedLinks } from "../../data/links";
import { SITE } from "../../data/site";

export function GET(context) {
  const sortedLinks = curatedLinks.toSorted(
    (a, b) => new Date(b.addedAt).valueOf() - new Date(a.addedAt).valueOf()
  );

  return rss({
    description: "A small, curated list of external things worth sharing.",
    items: sortedLinks.map((link) => ({
      link: link.url,
      pubDate: new Date(link.addedAt),
      title: link.title,
    })),
    site: context.site,
    title: `${SITE.name} — Links`,
    trailingSlash: false,
  });
}
