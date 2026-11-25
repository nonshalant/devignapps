import { FiArrowRight, FiTarget } from "react-icons/fi";
import { usePageMeta } from "../../lib/usePageMeta";
import { useReveal } from "../../lib/useReveal";
import { cld } from "../../lib/cloudinary";
import { services } from "../../data/services";
import { whyChooseUs, aboutImages, stats } from "../../data/company";
import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import CtaBand from "../../components/sections/CtaBand";
import "./about.css";

export default function AboutPage() {
  usePageMeta({
    title: "About",
    description:
      "Devign Apps is a New York IT consultancy helping businesses optimise their technology, from custom websites and mobile apps to digital marketing.",
    path: "/about",
  });
  useReveal();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        eyebrow="About us"
        title="Welcome to Devign Apps"
        lead="A New York IT consultancy dedicated to helping businesses optimise their technology, systems and processes for efficiency and growth."
        aside={
          <img
            src={cld(aboutImages.hero, { width: 1000 })}
            alt="Devign Apps team at work"
            width="1000"
            height="750"
            fetchpriority="high"
          />
        }
      />

      <section className="section" aria-labelledby="story-title">
        <div className="container about-story">
          <div className="about-story__text reveal">
            <span className="eyebrow">Who we are</span>
            <h2 id="story-title">A trusted partner to companies across industries</h2>
            <p>
              Our team of experienced, highly skilled technology experts is committed to delivering
              innovative solutions that meet the unique needs of each client. Devign Apps has
              quickly established itself as a trusted partner to companies across a range of
              industries.
            </p>
            <p>
              With a focus on top-notch service and unparalleled customer support, we have earned a
              reputation for excellence and are committed to keeping it.
            </p>
          </div>
          <aside className="about-mission reveal" style={{ "--reveal-delay": "120ms" }}>
            <FiTarget aria-hidden="true" />
            <h3>Our mission</h3>
            <p>
              To provide exceptional IT consultancy that helps our clients navigate the complex
              world of technology: innovative solutions that meet business needs, enhance operations
              and drive growth, delivered with outstanding service. Our goal is to be the trusted
              partner that empowers you to thrive in an ever-evolving digital landscape.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Our services</span>
            <h2 id="services-title">A comprehensive suite for businesses of every size</h2>
            <p>Everything you need to enhance your digital footprint.</p>
          </div>
          <div className="about-services">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="about-service reveal"
                style={{ "--reveal-delay": `${index * 90}ms` }}
              >
                <img
                  src={cld(service.image, { width: 700 })}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="470"
                />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  {service.comingSoon ? (
                    <span className="service-card__badge">Coming soon</span>
                  ) : (
                    <Button to={`/expertise/${service.slug}`} variant="link" icon={FiArrowRight}>
                      Explore {service.title.toLowerCase()}
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Why choose us</span>
            <h2 id="why-title">Committed to the best possible customer experience</h2>
          </div>
          <div className="grid grid--4">
            {whyChooseUs.map((item, index) => (
              <article
                key={item.title}
                className="why-card reveal"
                style={{ "--reveal-delay": `${index * 80}ms` }}
              >
                <span className="why-card__index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <ul role="list" className="about-stats reveal">
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Get in touch"
        copy="Looking for an IT consultancy dedicated to helping your business succeed? Our team is always available to answer your questions and help you get started."
      />
    </>
  );
}
