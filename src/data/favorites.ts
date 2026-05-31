import type { ImageMetadata } from "astro";

import atomicHabitsCover from "../assets/favorites/atomic-habits.jpg";
import savingPrivateRyanPoster from "../assets/favorites/saving-private-ryan.jpg";
import sendHerMyLoveArtwork from "../assets/favorites/send-her-my-love.jpg";

export interface FavoriteImage {
  alt: string;
  aspectRatio?: string;
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

export const favoriteBooks = [
  {
    creator: "James Clear",
    image: {
      alt: "Atomic Habits book cover",
      src: atomicHabitsCover,
    },
    title: "Atomic Habits",
    url: "https://www.goodreads.com/en/book/show/40121378-atomic-habits",
    year: 2018,
  },
  {
    creator: "Frank Herbert",
    title: "Dune",
    year: 1965,
  },
  {
    creator: "J.R.R. Tolkien",
    title: "The Hobbit",
    year: 1937,
  },
  {
    creator: "Robert A. Caro",
    title: "The Power Broker",
    year: 1974,
  },
  {
    creator: "Emily St. John Mandel",
    title: "Station Eleven",
    year: 2014,
  },
  {
    creator: "Rick Rubin",
    title: "The Creative Act",
    year: 2023,
  },
  {
    creator: "Andy Weir",
    title: "Project Hail Mary",
    year: 2021,
  },
] satisfies FavoriteItem[];

export const favoriteMovies = [
  {
    creator: "Steven Spielberg",
    image: {
      alt: "Saving Private Ryan movie poster",
      src: savingPrivateRyanPoster,
    },
    title: "Saving Private Ryan",
    url: "https://letterboxd.com/film/saving-private-ryan",
    year: 1998,
  },
  {
    creator: "David Fincher",
    title: "The Social Network",
    year: 2010,
  },
  {
    creator: "Denis Villeneuve",
    title: "Arrival",
    year: 2016,
  },
  {
    creator: "Christopher Nolan",
    title: "Interstellar",
    year: 2014,
  },
  {
    creator: "Gus Van Sant",
    title: "Good Will Hunting",
    year: 1997,
  },
  {
    creator: "Bennett Miller",
    title: "Moneyball",
    year: 2011,
  },
  {
    creator: "Alexander Payne",
    title: "The Holdovers",
    year: 2023,
  },
] satisfies FavoriteItem[];

export const favoriteMusic = [
  {
    creator: "Journey",
    image: {
      alt: "Send Her My Love album artwork",
      src: sendHerMyLoveArtwork,
    },
    title: "Send Her My Love",
    url: "https://music.apple.com/us/song/send-her-my-love/160024370",
    year: 1983,
  },
  {
    creator: "The Temper Trap",
    title: "Sweet Disposition",
    year: 2008,
  },
  {
    creator: "Billy Joel",
    title: "Vienna",
    year: 1977,
  },
  {
    creator: "New Radicals",
    title: "You Get What You Give",
    year: 1998,
  },
  {
    creator: "Florence + The Machine",
    title: "Dog Days Are Over",
    year: 2008,
  },
  {
    creator: "The Killers",
    title: "All These Things That I Have Done",
    year: 2004,
  },
  {
    creator: "Frank Ocean",
    title: "Pink + White",
    year: 2016,
  },
] satisfies FavoriteItem[];

export const favoriteQuotes = [
  {
    person: "Mara Chen",
    quote: "Good work usually gets quieter as it gets better.",
  },
  {
    person: "Elliot Rowan",
    quote: "The useful thing is often the simple thing done with care.",
  },
  {
    person: "June Vale",
    quote: "Pay attention to what still feels true after the mood changes.",
  },
  {
    person: "Theo Mercer",
    quote: "Taste is mostly the habit of noticing small differences.",
  },
  {
    person: "Nina Cole",
    quote: "Leave things easier to return to than you found them.",
  },
] satisfies FavoriteQuote[];
