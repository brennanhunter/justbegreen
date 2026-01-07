// TV Grid Slots Configuration
// Edit this file to change the content of each TV slot

import { farmsDivisions } from "./farmsDivisionsData";

export interface TVSlot {
  id: number;
  title: string;
  description: string;
  image: string;
  showLogo?: boolean;
  link?: string;
  hasModal?: boolean;
  divisions?: Array<{ name: string; link?: string }>;
}

export const tvSlots: TVSlot[] = [
  { id: 1, title: "Just Be Green World", description: "Helping to feed and educate people about sustainable agriculture with aquaponics", image: "/web-snips/jbg-world.png", link: "https://justbegreenworld.com/" },
  { id: 2, title: "Just Be Green Farms", description: "Helping to feed the world", image: "/web-snips/jbg-farms.png", link: "https://justbegreenfarms.com/", hasModal: true, divisions: farmsDivisions },
  { id: 3, title: "Just Be Green Academy", description: "Shaping Future Leaders for a Green Tomorrow", image: "/web-snips/jbg-academy.png", link: "https://justbegreenacademy.com/" },
  { id: 4, title: "Just Be Green Villages of America", description: "Listening to Mother Nature", image: "/web-snips/jbg-villages-america.png", link: "https://www.justbegreenvillagesamerica.com/" },
  { id: 5, title: "Just Be Green Energy", description: "Plugging Into Mother Nature", image: "/web-snips/jbg-energy.png", link: "https://justbegreenenergy.com/" },
  { id: 6, title: "Just Be Green Lodging", description: "Supporting a proposed non profit hospital and Veterans housing complex", image: "/web-snips/jbg-lodging.png", link: "https://justbegreenlodging.com/" },
  { id: 7, title: "Cherokee Path", description: "The gathering place for Veterans", image: "/web-snips/cherokee-path.png", link: "https://cherokeepath.com/" },
  { id: 8, title: "Just Be Green Developers", description: "Practicing Conscious Economics", image: "/web-snips/jbg-developers.png", link: "https://justbegreendevelopers.com/" },
  { id: 9, title: "Conthien Veterans Memorial", description: "Under Construction", image: "/web-snips/conthiens.png", link: "https://conthienveteransmemorial.com/" },
  { id: 10, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 11, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 12, title: "Title Here", description: "This will be the description", image: "/images/justbegreenhome.jpg", showLogo: true },
  { id: 13, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 14, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 15, title: "Title Here", description: "This will be the description", image: "/images/justbegreenhome.jpg", showLogo: true },
  { id: 16, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 17, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 18, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 19, title: "Title Here", description: "This will be the description", image: "/images/justbegreenhome.jpg", showLogo: true },
  { id: 20, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 21, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 22, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 23, title: "Title Here", description: "This will be the description", image: "/images/justbegreenhome.jpg", showLogo: true },
  { id: 24, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 25, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 26, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 27, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 28, title: "Title Here", description: "This will be the description", image: "/images/justbegreenhome.jpg", showLogo: true },
  { id: 29, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
  { id: 30, title: "Title Here", description: "This will be the description", image: "/images/placeholder.png" },
];
