const CLD = "https://res.cloudinary.com/dyzydm9nl/image/upload";

export const websiteProjects = [
  {
    id: "cb-exchange",
    name: "CB Exchange",
    category: "Trading platform",
    description:
      "A members-only trading community with a verified trade ledger, leaderboards, live calls and Stripe-powered memberships.",
    image: "/images/projects/cb-exchange.jpg",
    href: "https://app.cbexchange.net",
    tags: ["Web app", "Stripe", "Postgres"],
  },
  {
    id: "shophr-retailers",
    name: "Shophr Retailers",
    category: "E-commerce portal",
    description:
      "Retailer portal for the Shophr delivery marketplace where stores manage inventory, orders and payouts.",
    image: `${CLD}/v1772468795/Screen_Shot_2026-03-02_at_11.24.21_AM_knk46v.png`,
    href: "https://retailers.shophr.co/",
    tags: ["Web app", "Marketplace"],
  },
  {
    id: "chance-to-advance",
    name: "Chance To Advance LLC",
    category: "Business website",
    description:
      "A clean, conversion-focused website for a professional services firm, with booking and contact flows.",
    image: `${CLD}/v1757606878/Ever%20Last%20Apps/Screen_Shot_2025-09-11_at_11.19.25_AM_nuyozi.png`,
    href: "https://chance-to-advance.onrender.com/",
    tags: ["Website", "Booking"],
  },
  {
    id: "beary-soft-organic",
    name: "Beary Soft Organic",
    category: "E-commerce store",
    description:
      "An organic skincare storefront with a warm brand presence and a smooth checkout experience.",
    image: `${CLD}/v1672457364/Ever%20Last%20Apps/Screen_Shot_2022-12-30_at_10.27.30_PM_yxzgdf.png`,
    href: "https://bearysoftorganic.netlify.app",
    tags: ["E-commerce", "Branding"],
  },
];

export const appProjects = [
  {
    id: "shophr",
    name: "Shophr",
    category: "iOS app",
    description:
      "Same-day delivery marketplace connecting shoppers with local retailers. Live on the App Store.",
    image: `${CLD}/v1783651384/iconOrangeLarge_oe3atf.png`,
    href: "https://apps.apple.com/us/app/shophr/id6760482282",
    tags: ["React Native", "App Store"],
  },
  {
    id: "shophr-driver",
    name: "Shophr Driver",
    category: "iOS app",
    description:
      "Companion driver app with live routing, order pickup and earnings tracking for Shophr couriers.",
    image: `${CLD}/v1783651520/shophr-driver-logo_eyxzoj.png`,
    href: "https://apps.apple.com/us/app/shophr-drive/id6760732986",
    tags: ["React Native", "Maps"],
  },
];

export const featuredProjects = [websiteProjects[0], websiteProjects[1], appProjects[0]];
