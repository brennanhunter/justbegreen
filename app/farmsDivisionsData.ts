// Just Be Green Farms Divisions Configuration
// Edit this file to change the divisions for the Farms modal

export interface FarmsDivision {
  name: string;
  link?: string;
  image: string;
}

export const farmsDivisions: FarmsDivision[] = [
  { name: "Shrimp", link: "https://justbegreenshrimp.com/", image: "/images/industries/jbg-shrimp.jpg" },
  { name: "Seeds", link: "https://justbegreenseeds.com/", image: "/images/industries/jbg-seeds.webp" },
  { name: "Fabricators", link: "https://justbegreenfabricators.com/", image: "/images/industries/jbg-fabricators.jpg" },
  { name: "Processing", link: "https://justbegreenprocessing.com/", image: "/images/industries/jbg-processing.png" },
  { name: "Fish Foods", image: "/images/industries/jbg-fish-food.jpg" },
  { name: "Foods", link: "https://justbegreenfoods.com/", image: "/images/industries/jbg-foods.jpg" },
  { name: "Water", link: "https://justbegreenwater.com/", image: "/images/industries/jbg-water.jpg" },
  { name: "Co-Op", link: "https://justbegreenco-op.com/", image: "/images/industries/jbg-co-op.jpg" },
  { name: "Hatchery", link: "https://justbegreenfishhatchery.com/", image: "/images/industries/jbg-hatchery.jpg" },
  { name: "Fertilizer", link: "https://justbegreenfertilizer.com/", image: "/images/industries/jbg-fertilizer.jpg" },
  { name: "Hemp", link: "https://justbegreenhemp.com/", image: "/images/industries/jbg-hemp.jpg" },
];
