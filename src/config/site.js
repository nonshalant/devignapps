/**
 * Site-wide configuration. Content that is referenced from more than one
 * place (contact details, navigation, integrations) lives here so it is
 * changed in exactly one spot.
 */
export const site = {
  name: "Devign Apps",
  tagline: "From sketch to screen, we bring your next website or app to life.",
  url: "https://devignapps.com",
  phone: "646-352-2512",
  phoneHref: "tel:+16463522512",
  careersEmail: "everlastapps.co@gmail.com",
  location: "New York, NY",
  instagram: "https://www.instagram.com/devignapps",
  logo: "/images/brand/logo.png",
};

export const navigation = [
  {
    label: "Expertise",
    children: [
      {
        label: "Web Development",
        to: "/expertise/web-development",
        description: "Fast, secure websites that convert.",
      },
      {
        label: "App Development",
        to: "/expertise/app-development",
        description: "iOS and Android apps, built end to end.",
      },
      {
        label: "Digital Marketing",
        to: "/expertise/digital-marketing",
        description: "Coming soon. Growth strategy, SEO and content.",
        badge: "Soon",
      },
    ],
  },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
];

/**
 * EmailJS public identifiers. They are meant to be shipped to the browser;
 * override them via VITE_EMAILJS_* environment variables (see .env.example).
 */
export const emailJs = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_u56okd4",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_rfhdnwm",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "X1AhV2j4lZFoBsbdP",
};
