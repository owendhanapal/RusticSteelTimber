export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "outdoor-entertainment-area",
    title: "Outdoor Entertainment Area",
    category: "Outdoor Living",
    description:
      "A covered timber-deck entertainment area built for year-round hosting — complete with a full brick braai, wood storage and a bespoke bar under a durable pitched roof. A space where family and friends gather, rain or shine.",
    images: [
      "/images/Cranmeer1.webp",
      "/images/Cranmeer3.webp",
    ],
  },
  {
    id: "painting",
    title: "Painting",
    category: "Exterior Painting",
    description:
      "A complete exterior repaint that transformed a tired facade into a bold, modern statement. Fresh charcoal walls, crisp white trim and a weather-ready finish built to protect and impress for years to come.",
    images: [
      "/images/painting-house-1.webp",
    ],
  },
  {
    id: "piano-art",
    title: "Piano Art",
    category: "Custom Feature",
    description:
      "An antique upright piano reborn as a one-of-a-kind illuminated drinks cabinet and wine bar. A true showpiece — proof that we turn unexpected ideas into functional works of art.",
    images: [
      "/images/piano-art-1.webp",
      "/images/piano-art-2.webp",
    ],
  },
];
