import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { SITE } from "../../data/site";

export async function GET(context) {
  const posts = await getCollection("writing");
  const sortedPosts = posts.toSorted(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const publicPosts = sortedPosts.filter((post) => !post.data.draft);

  return rss({
    description:
      "Writing by Joe Petrillo about software, projects, travel, learning, and things worth sharing.",
    items: publicPosts.map((post) => ({
      description: post.data.description,
      link: `/writing/${post.id}/`,
      pubDate: post.data.pubDate,
      title: post.data.title,
    })),
    site: context.site,
    title: `${SITE.name} — Writing`,
  });
}
