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
