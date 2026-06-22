export type Partner = {
  name: string;
  logo: string;
  width: number;
  height: number;
  /** White logos are shown on the dark marquee band. */
  variant?: "light" | "color";
};

export const partners: Partner[] = [
  {
    name: "Luminis Health",
    logo: "/partners/luminis.svg",
    width: 304,
    height: 48,
    variant: "color",
  },
  {
    name: "U.S. Department of Defense",
    logo: "/partners/us-department-of-defense.png",
    width: 616,
    height: 419,
    variant: "light",
  },
  {
    name: "George Mason University",
    logo: "/partners/george-mason-university.png",
    width: 500,
    height: 500,
    variant: "light",
  },
  {
    name: "National Institutes of Health",
    logo: "/partners/nih.png",
    width: 500,
    height: 500,
    variant: "light",
  },
  {
    name: "HealthCrest Surgical Partners",
    logo: "/partners/healthcrest-surgical-partners.png",
    width: 242,
    height: 53,
    variant: "light",
  },
  {
    name: "Capital Women's Care",
    logo: "/partners/capital-womens-care.png",
    width: 500,
    height: 194,
    variant: "light",
  },
  {
    name: "United Surgical Partners International",
    logo: "/partners/uspi.png",
    width: 1200,
    height: 1200,
    variant: "light",
  },
  {
    name: "SurgCenter of Bel Air",
    logo: "/partners/surgcenter-bel-air.png",
    width: 1200,
    height: 1200,
    variant: "light",
  },
  {
    name: "SurgCenter of Towson",
    logo: "/partners/surgcenter-towson.png",
    width: 373,
    height: 445,
    variant: "light",
  },
  {
    name: "Mercy Medical Center",
    logo: "/partners/mercy-medical.png",
    width: 1249,
    height: 629,
    variant: "light",
  },
  {
    name: "Whitman-Walker",
    logo: "/partners/whitman-walker.png",
    width: 587,
    height: 477,
    variant: "light",
  },
  {
    name: "Consolidated Sterilizer Systems",
    logo: "/partners/consolidated-sterilizer.png",
    width: 200,
    height: 54,
    variant: "light",
  },
];
