export interface TimelineEntry {
  description: string;
  title: string;
  year: string;
}

export const timelineEntries = [
  {
    description: "Two years in, with a bigger role on the online banking team.",
    title: "Software Engineer II at Citizens Bank",
    year: "2025",
  },
  {
    description:
      "Finished my computer science degree at UMass Amherst and joined Citizens as an Associate Software Engineer.",
    title: "Graduated and started at Citizens Bank",
    year: "2023",
  },
  {
    description:
      "Four years in Amherst, a lot of side projects, and the start of writing software for real.",
    title: "Started computer science at UMass Amherst",
    year: "2019",
  },
  {
    description:
      "Bags, carts and tee times for 250 to 300 golfers a day, through 2021.",
    title: "Started at Pinehills Golf Club",
    year: "2018",
  },
  {
    description:
      "Ride attendant at 16, keeping the slides safe and training new hires.",
    title: "First job at Water Wizz",
    year: "2017",
  },
] satisfies TimelineEntry[];
