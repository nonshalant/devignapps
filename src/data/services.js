import { FiGlobe, FiSmartphone, FiTrendingUp } from "react-icons/fi";

const CLD = "https://res.cloudinary.com/dyzydm9nl/image/upload";

const processImages = {
  consultation: `${CLD}/v1679358111/Ever%20Last%20Apps/photo-1616587894289-86480e533129_yvgyxc.jpg`,
  building: `${CLD}/v1679359307/Ever%20Last%20Apps/137-1379308_website-work-in-progress_tl7zbb.jpg`,
  launch: `${CLD}/v1679365514/Ever%20Last%20Apps/download_xuasyd.png`,
};

/**
 * Each service drives its own landing page (/expertise/:slug) and the cards
 * on the home page, so copy, pricing and process steps are defined once.
 */
export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    short: "Website Development",
    icon: FiGlobe,
    tagline: "Sleek, secure, scalable and high-performance websites.",
    summary:
      "Stunning, functional websites that help businesses and individuals succeed online. We work closely with you to understand your needs and build a solution tailored to your requirements.",
    description:
      "With a focus on user experience and responsive design, we create websites that are not only visually appealing but also easy to navigate, fast-loading and optimised for search engines. From a single landing page to a full e-commerce store, every build is written with clean, maintainable code you own.",
    image: `${CLD}/v1678387815/Ever%20Last%20Apps/photo-1593720213428-28a5b9e94613_h05boi.jpg`,
    highlights: [
      "Custom design matched to your brand",
      "Mobile-first, responsive on every screen",
      "Search engine optimised from day one",
      "Fast load times and accessible markup",
      "E-commerce, booking and portfolio builds",
      "Hosting setup and post-launch support",
    ],
    timeline: "1-2 weeks",
    retainer: "$250 - $500",
    finalPayment: "$250 - $500",
    process: [
      {
        title: "Consultation",
        image: processImages.consultation,
        copy: "We start by understanding your goals, audience and must-haves. Book a free consultation and take the first step towards transforming your business.",
        note: "A retainer of $250 - $500 secures your spot and kicks off design.",
      },
      {
        title: "Website in progress",
        image: processImages.building,
        copy: "Kick your feet up while everything we discussed is designed and developed into your new website. You'll see progress along the way.",
        note: "Please allow 1-2 weeks, depending on complexity.",
      },
      {
        title: "Finish line",
        image: processImages.launch,
        copy: "The wait is over. We hand over the finished site, walk you through it and make sure you're set up to succeed.",
        note: "Final payment of $250 - $500 is due before ownership is transferred.",
      },
    ],
  },
  {
    slug: "app-development",
    title: "App Development",
    short: "App Development",
    icon: FiSmartphone,
    tagline: "Bring your app idea to life with cutting-edge mobile development.",
    summary:
      "Custom mobile applications for iOS and Android that meet your unique needs. We focus on user experience and modern technology to create apps that are intuitive, responsive and easy to use.",
    description:
      "We work closely with you to understand your goals and objectives, then design and develop a solution that delivers value and improves your bottom line. Our developers use the latest tools to build high-quality, scalable and secure applications optimised for performance. From design and development to testing and App Store deployment, we provide end-to-end delivery on time and on budget.",
    image: `${CLD}/v1679418876/Ever%20Last%20Apps/photo-1611162617213-7d7a39e9b1d7_mxif9k.jpg`,
    highlights: [
      "iOS and Android from one React Native codebase",
      "UX-first design and interactive prototypes",
      "Secure APIs, authentication and payments",
      "App Store and Google Play submission handled",
      "Periodic progress reports throughout the build",
      "Maintenance and feature roadmaps after launch",
    ],
    timeline: "3-5 months",
    retainer: "$1,000 - $3,000",
    finalPayment: "$1,000 - $3,000",
    process: [
      {
        title: "Consultation",
        image: processImages.consultation,
        copy: "We map out your idea, the features that matter most and the platforms you need. Contact us to schedule a consultation and start creating your app.",
        note: "A retainer of $1,000 - $3,000 (based on complexity) kicks off the build.",
      },
      {
        title: "App in progress",
        image: processImages.building,
        copy: "Everything discussed in the consultation is designed, built and tested. Periodic progress reports keep you in the loop at every milestone.",
        note: "Please allow 3-5 months for completion.",
      },
      {
        title: "Finish line",
        image: processImages.launch,
        copy: "We submit your app to the stores, hand over the codebase and make sure your launch goes smoothly.",
        note: "Final payment of $1,000 - $3,000 is due before ownership is transferred.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Digital Marketing",
    icon: FiTrendingUp,
    comingSoon: true,
    tagline: "Maximise your online reach with data-driven marketing strategies.",
    summary:
      "Comprehensive growth strategies using SEO, content creation, email marketing and more. Our approach drives results and propels your business forward.",
    description:
      "Our digital marketing services are designed to increase your online visibility, reach and engagement with your target audience. By leveraging data analytics, industry-proven tactics and a results-focused approach, we develop personalised marketing strategies that drive real business growth.",
    image: `${CLD}/v1678388171/Ever%20Last%20Apps/photo-1533750349088-cd871a92f312_fhslx2.jpg`,
    highlights: [
      "Search engine optimisation and content strategy",
      "Social media management and paid campaigns",
      "Email marketing and automation",
      "Analytics, reporting and conversion tracking",
    ],
    process: [],
  },
];

export const getService = (slug) => services.find((service) => service.slug === slug);
