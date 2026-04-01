export const siteConfig = {
  name: "Complete Care Landscaping (C.C.L. Pro)",
  shortName: "C.C.L. Pro",
  owner: "Nic Walker",
  phoneDisplay: "(801) 717-6995",
  phoneHref: "tel:+18017176995",
  phoneRaw: "+18017176995",
  email: "cclpro@hotmail.com",
  emailHref: "mailto:cclpro@hotmail.com",
  url: "https://www.cclprolandscaping.com",
  region: "Utah",
  areaCode: "801",
  description:
    "Professional landscaping services in Utah including lawn maintenance, sprinkler repair, rain gutter cleaning, and seasonal clean-up for residential and commercial properties.",
  keywords: [
    "Landscaping Provo",
    "Lawn Maintenance Utah",
    "Sprinkler Repair 801",
    "C.C.L. Pro Landscaping",
    "Rain gutter cleaning",
    "Yard hauling",
    "Landscape design Salt Lake County",
    "Fall clean-up services",
  ],
  serviceAreas: [
    "Provo",
    "Orem",
    "Lehi",
    "American Fork",
    "Pleasant Grove",
    "Salt Lake County",
    "Utah County",
  ],
} as const;

export const services = [
  {
    title: "Lawn Maintenance",
    description:
      "Reliable mowing, edging, trimming, and seasonal turf care to keep Utah lawns clean and healthy.",
  },
  {
    title: "Sprinkler Repair",
    description:
      "Troubleshooting, repairs, and tune-ups to keep irrigation systems efficient through every season.",
  },
  {
    title: "Landscape Design & Install",
    description:
      "Thoughtful planting, mulch, rock, and bed updates that improve curb appeal and simplify upkeep.",
  },
  {
    title: "Tree & Bush Removal",
    description:
      "Safe clearing and haul-away for overgrown shrubs, small trees, and debris-heavy problem areas.",
  },
  {
    title: "Rain Gutter Cleaning",
    description:
      "Seasonal gutter cleaning that helps protect roofs, siding, and foundations from water buildup.",
  },
  {
    title: "Seasonal Clean-up",
    description:
      "Spring and fall yard clean-ups for leaves, branches, overgrowth, and ready-to-enjoy outdoor spaces.",
  },
] as const;

export const trustPoints = [
  "Owner-led service from Nic Walker",
  "Residential and commercial outdoor maintenance",
  "Fast estimates for Utah homeowners and property managers",
] as const;

export const heroImages = [
  "/After/YinYangAfter.jpg",
  "/After/PondAfter.jpg",
  "/After/DeckAfter.jpg",
  "/Sprinklers/SprinklerWork1.jpg",
];

export type GalleryItem = 
  | { type: "image"; src: string; alt: string; tag: string; service: string; location: string }
  | { type: "before-after"; beforeSrc: string; afterSrc: string; alt: string; tag: string; service: string; location: string };

export const galleryItems: GalleryItem[] = [
  {
    type: "before-after",
    beforeSrc: "/Before/YinYangBefore.jpg",
    afterSrc: "/After/YinYangAfter.jpg",
    alt: "Yin Yang landscaping transformation",
    tag: "Before & After",
    service: "Landscape Design & Install",
    location: "Utah County, UT",
  },
  {
    type: "before-after",
    beforeSrc: "/Before/PondBefore.jpg",
    afterSrc: "/After/PondAfter.jpg",
    alt: "Pond area cleanup",
    tag: "Before & After",
    service: "Seasonal Clean-up",
    location: "Provo, UT",
  },
  {
    type: "before-after",
    beforeSrc: "/Before/DeckBefore.jpg",
    afterSrc: "/After/DeckAfter.jpg",
    alt: "Deck area landscaping",
    tag: "Before & After",
    service: "Landscape Design",
    location: "Orem, UT",
  },
  {
    type: "image",
    src: "/Sprinklers/SprinklerWork.jpg",
    alt: "Complex sprinkler system installation",
    tag: "Irrigation System",
    service: "Sprinkler Repair",
    location: "Lehi, UT",
  },
  {
    type: "before-after",
    beforeSrc: "/Before/StorageBefore.jpg",
    afterSrc: "/After/SelfStorageAfter.jpg",
    alt: "Commercial storage facility cleanup",
    tag: "Before & After",
    service: "Commercial Maintenance",
    location: "American Fork, UT",
  },
  {
    type: "before-after",
    beforeSrc: "/Before/BushBefore.jpg",
    afterSrc: "/After/BushAfter.jpg",
    alt: "Bush removal and cleanup",
    tag: "Before & After",
    service: "Tree & Bush Removal",
    location: "Pleasant Grove, UT",
  },
  {
    type: "image",
    src: "/Sprinklers/SprinklerWork2.jpg",
    alt: "Sprinkler manifold and valves",
    tag: "Irrigation System",
    service: "Sprinkler Repair",
    location: "Utah County, UT",
  },
  {
    type: "before-after",
    beforeSrc: "/Before/RockBefore.jpg",
    afterSrc: "/After/RockAfter.jpg",
    alt: "Rock bed installation",
    tag: "Before & After",
    service: "Landscape Design",
    location: "Provo, UT",
  },
  {
    type: "before-after",
    beforeSrc: "/Before/StripBefore.jpg",
    afterSrc: "/After/StripAfter.jpg",
    alt: "Park strip transformation",
    tag: "Before & After",
    service: "Landscape Design",
    location: "Orem, UT",
  },
  {
    type: "image",
    src: "/647379688_122231100932491126_1683581499259921498_n.jpg",
    alt: "Finished landscaping project",
    tag: "Completed Project",
    service: "Lawn Maintenance",
    location: "Lehi, UT",
  },
  {
    type: "before-after",
    beforeSrc: "/Before/412Before.jpg",
    afterSrc: "/After/412After.jpg",
    alt: "Yard transformation",
    tag: "Before & After",
    service: "Seasonal Clean-up",
    location: "American Fork, UT",
  },
  {
    type: "before-after",
    beforeSrc: "/Before/12Before.jpg",
    afterSrc: "/After/12After.jpg",
    alt: "Lawn and garden transformation",
    tag: "Before & After",
    service: "Landscape Design",
    location: "Provo, UT",
  },
  {
    type: "before-after",
    beforeSrc: "/Before/BlueRedBefore.jpg",
    afterSrc: "/After/BlueRedAfter.jpg",
    alt: "Flower bed update",
    tag: "Before & After",
    service: "Landscape Design",
    location: "Orem, UT",
  },
  {
    type: "image",
    src: "/559405747_122202467588491126_6800893402414010461_n.jpg",
    alt: "Finished landscaping project",
    tag: "Completed Project",
    service: "Lawn Maintenance",
    location: "Utah County, UT",
  },
  {
    type: "image",
    src: "/559189680_122202467330491126_2679529573008008689_n.jpg",
    alt: "Finished landscaping project",
    tag: "Completed Project",
    service: "Lawn Maintenance",
    location: "Salt Lake County, UT",
  },
  {
    type: "image",
    src: "/Sprinklers/651105889_122232604394491126_7857425332019038658_n.jpg",
    alt: "Sprinkler installation",
    tag: "Irrigation System",
    service: "Sprinkler Repair",
    location: "Lehi, UT",
  },
];

export const reviewPlaceholders = [
  {
    name: "Google Business Profile",
    quote:
      "Five-star customer reviews will appear here once the business profile is fully set up.",
  },
  {
    name: "Local Homeowners",
    quote:
      "Before launch, add real project photos and short testimonials that mention service quality, speed, and trust.",
  },
  {
    name: "Property Managers",
    quote:
      "Commercial maintenance reviews can reinforce reliability for recurring service contracts.",
  },
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingService",
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.phoneRaw,
  email: siteConfig.email,
  founder: {
    "@type": "Person",
    name: siteConfig.owner,
  },
  url: siteConfig.url,
  areaServed: siteConfig.serviceAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  })),
  address: {
    "@type": "PostalAddress",
    addressRegion: "UT",
    addressCountry: "US",
  },
} as const;
