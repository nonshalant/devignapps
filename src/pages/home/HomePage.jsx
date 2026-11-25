import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiStar } from "react-icons/fi";
import { usePageMeta } from "../../lib/usePageMeta";
import { useReveal } from "../../lib/useReveal";
import { cld } from "../../lib/cloudinary";
import { site } from "../../config/site";
import { services } from "../../data/services";
import { featuredProjects, websiteProjects, appProjects } from "../../data/projects";
import { stats, aboutImages } from "../../data/company";
import Button from "../../components/ui/Button";
import ServiceCard from "../../components/sections/ServiceCard";
import ProjectCard from "../../components/sections/ProjectCard";
import Testimonials from "../../components/sections/Testimonials";
import ContactSection from "../../components/sections/ContactSection";
import "./home.css";

const heroShot = websiteProjects[0];
const heroApp = appProjects[0];

export default function HomePage() {
  usePageMeta({
    title: "Web & Mobile App Development in New York",
    description:
      "Devign Apps designs and builds fast, secure websites and mobile apps for startups, e-commerce stores and growing businesses. Based in New York City.",
    path: "/",
  });
  useReveal();

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="eyebrow">Web &amp; mobile app studio · New York</span>
            <h1>
              From sketch to screen, we bring your next{" "}
              <span className="hero__accent">website</span> or{" "}
              <span className="hero__accent">app</span> to life.
            </h1>
            <p className="hero__lead">
              Devign Apps is an IT consultancy that partners with founders and growing brands to
              design, build and launch digital products that look premium and convert visitors into
              customers.
            </p>
            <div className="hero__actions">
              <Button to="/contact" size="lg" icon={FiArrowRight}>
                Start a project
              </Button>
              <Button to="/projects" size="lg" variant="ghost-light">
                See our work
              </Button>
            </div>
            <ul role="list" className="hero__proof">
              <li>
                <FiStar aria-hidden="true" /> 5-star client reviews
              </li>
              <li>
                <FiCheck aria-hidden="true" /> Free consultation
              </li>
              <li>
                <FiCheck aria-hidden="true" /> Websites in 1-3 days
              </li>
            </ul>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__browser">
              <div className="hero__browser-bar">
                <span />
                <span />
                <span />
                <i>{heroShot.href.replace("https://", "")}</i>
              </div>
              <img
                src={cld(heroShot.image, { width: 1200 })}
                alt=""
                width="1200"
                height="750"
                fetchpriority="high"
              />
            </div>
            <div className="hero__phone">
              <img src={cld(heroApp.image, { width: 160 })} alt="" width="56" height="56" />
              <div>
                <strong>{heroApp.name}</strong>
                <span>Live on the App Store</span>
              </div>
            </div>
            <div className="hero__chip">
              <strong>20+</strong>
              <span>clients launched</span>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- Stats */}
      <section className="stats" aria-label="Company highlights">
        <div className="container">
          <ul role="list" className="stats__list">
            {stats.map((stat, index) => (
              <li
                key={stat.label}
                className="reveal"
                style={{ "--reveal-delay": `${index * 70}ms` }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ Services */}
      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading section-heading--split reveal">
            <div>
              <span className="eyebrow">Our expertise</span>
              <h2 id="services-title">Everything you need to go from idea to launch</h2>
              <p>
                Strategy, design, development and support, all under one roof, so you have a single
                partner from the first sketch to the final deploy.
              </p>
            </div>
            <Link to="/careers" className="section-heading__aside">
              We&apos;re hiring <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid--3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- About */}
      <section className="section section--muted" aria-labelledby="about-title">
        <div className="container about-teaser">
          <div className="about-teaser__media reveal">
            <img
              src={cld(aboutImages.hero, { width: 900 })}
              alt="Devign Apps team collaborating on a project"
              loading="lazy"
              decoding="async"
              width="900"
              height="675"
            />
            <div className="about-teaser__card">
              <strong>Built in NYC</strong>
              <span>Partnering with startups, personal brands and e-commerce stores.</span>
            </div>
          </div>
          <div className="about-teaser__content reveal" style={{ "--reveal-delay": "120ms" }}>
            <span className="eyebrow">Why Devign Apps</span>
            <h2 id="about-title">Dedicated to advancing your success.</h2>
            <p className="lead">
              We deliver exceptional web design, development, hosting and digital marketing, and we
              partner with you to create customised online solutions that meet your specific needs.
              Your success is our success.
            </p>
            <ul role="list" className="checklist">
              <li>
                <FiCheck aria-hidden="true" /> Transparent pricing and timelines before work starts
              </li>
              <li>
                <FiCheck aria-hidden="true" /> You own the code, the design and the accounts
              </li>
              <li>
                <FiCheck aria-hidden="true" /> Direct access to the people building your product
              </li>
              <li>
                <FiCheck aria-hidden="true" /> Support and hosting after launch
              </li>
            </ul>
            <Button to="/about" variant="outline" icon={FiArrowRight}>
              More about us
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Work */}
      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <div className="section-heading section-heading--split reveal">
            <div>
              <span className="eyebrow">Featured work</span>
              <h2 id="work-title">Our reputation is of utmost significance.</h2>
              <p>
                From startups to personal blogs and e-commerce stores, we have a proven track record
                of delivering measurable online success. A few recent launches:
              </p>
            </div>
            <Link to="/projects" className="section-heading__aside">
              View all projects <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid--3">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                kind={project.href.includes("apps.apple.com") ? "app" : "website"}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Process */}
      <section className="section section--dark" aria-labelledby="process-title">
        <div className="container">
          <div className="section-heading section-heading--center reveal">
            <span className="eyebrow">How we work</span>
            <h2 id="process-title">A simple, transparent process</h2>
            <p>Three steps from first conversation to launch day. No surprises along the way.</p>
          </div>
          <ol role="list" className="steps">
            {[
              {
                title: "Consultation",
                copy: "A free call to understand your goals, audience and must-haves. You get a clear scope, price and timeline.",
              },
              {
                title: "Design & build",
                copy: "We design, develop and test your product, sharing progress at every milestone so there are no surprises.",
              },
              {
                title: "Launch & support",
                copy: "We deploy, hand over ownership and stay on for hosting, maintenance and the next set of features.",
              },
            ].map((step, index) => (
              <li
                key={step.title}
                className="steps__item reveal"
                style={{ "--reveal-delay": `${index * 100}ms` }}
              >
                <span className="steps__number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
          <div className="steps__links reveal">
            <Link to="/expertise/web-development">
              Website pricing &amp; timeline <FiArrowRight aria-hidden="true" />
            </Link>
            <Link to="/expertise/app-development">
              App pricing &amp; timeline <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <ContactSection title={`Let's begin your journey with ${site.name}.`} />
    </>
  );
}
