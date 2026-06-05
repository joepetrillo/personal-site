import type { ImageMetadata } from "astro";

export interface FavoriteImage {
  alt: string;
  src: ImageMetadata;
}

export interface FavoriteItem {
  creator: string;
  image?: FavoriteImage;
  title: string;
  url?: string;
  year?: number;
}

export interface FavoriteQuote {
  person: string;
  quote: string;
}

interface FavoriteInput {
  creator: string;
  slug?: string;
  title: string;
  url?: string;
  year?: number;
}

const coverModules = import.meta.glob<{ default: ImageMetadata }>(
  "../../assets/favorites/*.{jpg,jpeg,png,webp,gif,avif}",
  { eager: true }
);

const coversBySlug = new Map<string, { default: ImageMetadata }>();
for (const [path, module] of Object.entries(coverModules)) {
  const slug = path.match(/\/([^/]+)\.[^./]+$/u)?.[1];
  if (!slug) {
    continue;
  }

  if (coversBySlug.has(slug)) {
    throw new Error(`Duplicate favorite cover slug: ${slug}`);
  }

  coversBySlug.set(slug, module);
}

// Resolves each entry's `slug` to its build-optimized cover and derives alt
// text from the title, so data files stay free of image imports and plumbing.
export function defineFavorites(
  altSuffix: string,
  items: FavoriteInput[]
): FavoriteItem[] {
  return items.map(({ slug, ...rest }) => {
    if (!slug) {
      return rest;
    }

    const cover = coversBySlug.get(slug);
    if (!cover) {
      throw new Error(`Missing favorite image for slug: ${slug}`);
    }

    return {
      ...rest,
      image: {
        alt: `${rest.title} ${altSuffix}`,
        src: cover.default,
      },
    };
  });
}
