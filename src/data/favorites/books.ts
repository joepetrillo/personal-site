import { defineFavorites } from "./types";

export const favoriteBooks = defineFavorites("book cover", [
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    creator: "James Clear",
    year: 2018,
    url: "https://jamesclear.com/atomic-habits",
  },
  {
    slug: "wherever-you-go",
    title: "Wherever You Go, There You Are",
    creator: "Jon Kabat-Zinn",
    year: 1994,
    url: "https://www.goodreads.com/en/book/show/14096.Wherever_You_Go_There_You_Are",
  },
  {
    slug: "dive-into-systems",
    title: "Dive Into Systems",
    creator: "Suzanne J. Matthews, Tia Newhall & Kevin C. Webb",
    year: 2022,
    url: "https://diveintosystems.org/book/introduction.html",
  },
  {
    slug: "c-programming-language",
    title: "The C Programming Language",
    creator: "Brian W. Kernighan & Dennis M. Ritchie",
    year: 1988,
    url: "https://www.goodreads.com/book/show/515601.The_C_Programming_Language",
  },
  {
    slug: "operating-systems",
    title: "Operating Systems: Three Easy Pieces",
    creator: "Remzi H. Arpaci-Dusseau & Andrea C. Arpaci-Dusseau",
    year: 2018,
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
  },
  {
    slug: "computer-networking",
    title: "Computer Networking: A Top-Down Approach",
    creator: "James F. Kurose & Keith W. Ross",
    year: 2020,
    url: "https://www.goodreads.com/book/show/55954729-computer-networking",
  },
  {
    slug: "eloquent-javascript",
    title: "Eloquent JavaScript",
    creator: "Marijn Haverbeke",
    year: 2024,
    url: "https://eloquentjavascript.net/",
  },
  {
    slug: "the-power-of-now",
    title: "The Power of Now",
    creator: "Eckhart Tolle",
    year: 1997,
    url: "https://www.goodreads.com/en/book/show/6708.The_Power_of_Now",
  },
]);
