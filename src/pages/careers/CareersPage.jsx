import { FiArrowRight, FiMapPin, FiMail } from "react-icons/fi";
import { usePageMeta } from "../../lib/usePageMeta";
import { useReveal } from "../../lib/useReveal";
import { cld } from "../../lib/cloudinary";
import { site } from "../../config/site";
import { stats, values, locations, openRoles, aboutImages } from "../../data/company";
import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import "./careers.css";

export default function CareersPage() {
  usePageMeta({
    title: "Careers",
    description:
      "Build your career, build the future. Devign Apps welcomes engineers, designers and marketers from a wide range of backgrounds.",
    path: "/careers",
  });
  useReveal();

  const applyHref = (role) =>
    `mailto:${site.careersEmail}?subject=${encodeURIComponent(`Application: ${role.title}`)}`;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
        eyebrow="Join us"
        title="Build your career, build the future."
        lead="We embrace diversity and welcome people from a wide range of backgrounds in engineering, marketing and design. Remote-friendly, across the USA."
        aside={
          <img
            src={cld(aboutImages.culture, { width: 1000 })}
            alt="Team members collaborating"
            width="1000"
            height="750"
            fetchpriority="high"
          />
        }
      >
        <div className="page-hero__actions">
          <Button
            href="#open-roles"
            size="lg"
            icon={FiArrowRight}
            target={undefined}
            rel={undefined}
          >
            See open roles
          </Button>
        </div>
      </PageHero>

      <section className="section section--tight" aria-label="Company stats">
        <div className="container">
          <ul role="list" className="careers-stats">
            {stats.slice(0, 2).map((stat, index) => (
              <li
                key={stat.label}
                className="reveal"
                style={{ "--reveal-delay": `${index * 80}ms` }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="locations-title">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Our locations</span>
            <h2 id="locations-title">Where we work</h2>
            <p>Headquartered in New York City with teammates across the East Coast.</p>
          </div>
          <ul role="list" className="locations">
            {locations.map((location, index) => (
              <li
                key={location.id}
                className="location reveal"
                style={{ "--reveal-delay": `${index * 80}ms` }}
              >
                <img
                  src={cld(location.image, { width: 640 })}
                  alt={`${location.name} skyline`}
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="480"
                />
                <span>
                  <FiMapPin aria-hidden="true" /> {location.name}
                  {location.headquarters ? <em>HQ</em> : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Culture &amp; values</span>
            <h2 id="values-title">How we work together</h2>
          </div>
          <div className="grid grid--4">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="why-card reveal"
                style={{ "--reveal-delay": `${index * 80}ms` }}
              >
                <span className="why-card__index">0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted" id="open-roles" aria-labelledby="roles-title">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Open roles</span>
            <h2 id="roles-title">We&apos;d love to hear from you</h2>
            <p>Send us a copy of your resume or a portfolio of your work to be considered.</p>
          </div>
          <div className="roles">
            {openRoles.map((role, index) => (
              <article
                key={role.id}
                className="role reveal"
                style={{ "--reveal-delay": `${index * 90}ms` }}
              >
                <img
                  src={cld(role.image, { width: 700 })}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="470"
                />
                <div className="role__body">
                  <span className="role__type">{role.type}</span>
                  <h3>{role.title}</h3>
                  <p>{role.copy}</p>
                  {role.stacks ? (
                    <div className="role__stacks">
                      {role.stacks.map((stack) => (
                        <div key={stack.label}>
                          <h4>{stack.label}</h4>
                          <ul role="list">
                            {stack.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <Button
                    href={applyHref(role)}
                    variant="navy"
                    icon={FiMail}
                    target={undefined}
                    rel={undefined}
                  >
                    Apply by email
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
