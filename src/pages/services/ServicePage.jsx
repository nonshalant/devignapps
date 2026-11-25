import { Navigate, useParams } from "react-router-dom";
import { FiArrowRight, FiCheck, FiClock, FiDollarSign, FiFlag } from "react-icons/fi";
import { usePageMeta } from "../../lib/usePageMeta";
import { useReveal } from "../../lib/useReveal";
import { cld } from "../../lib/cloudinary";
import { getService, services } from "../../data/services";
import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import ProcessSteps from "../../components/sections/ProcessSteps";
import ServiceCard from "../../components/sections/ServiceCard";
import CtaBand from "../../components/sections/CtaBand";
import "./service.css";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);

  usePageMeta({
    title: service ? service.title : "Expertise",
    description: service ? service.summary : "",
    path: `/expertise/${slug}`,
  });
  useReveal([slug]);

  if (!service) return <Navigate to="/404" replace />;

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Expertise" }, { label: service.title }]}
        eyebrow={service.comingSoon ? "Coming soon" : "Expertise"}
        title={service.title}
        lead={service.tagline}
        aside={
          <img
            src={cld(service.image, { width: 1000 })}
            alt=""
            width="1000"
            height="750"
            fetchpriority="high"
          />
        }
      >
        <div className="page-hero__actions">
          <Button to="/contact" size="lg" icon={FiArrowRight}>
            {service.comingSoon ? "Join the waitlist" : "Book a free consultation"}
          </Button>
          {!service.comingSoon && (
            <Button to="/projects" size="lg" variant="ghost-light">
              See examples
            </Button>
          )}
        </div>
      </PageHero>

      <section className="section" aria-labelledby="overview-title">
        <div className="container service-overview">
          <div className="service-overview__text reveal">
            <span className="eyebrow">Overview</span>
            <h2 id="overview-title">{service.summary}</h2>
            <p className="lead">{service.description}</p>
          </div>
          <div className="service-overview__aside reveal" style={{ "--reveal-delay": "120ms" }}>
            <h3>What&apos;s included</h3>
            <ul role="list" className="checklist">
              {service.highlights.map((item) => (
                <li key={item}>
                  <FiCheck aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            {!service.comingSoon && (
              <dl className="service-facts">
                <div>
                  <dt>
                    <FiClock aria-hidden="true" /> Timeline
                  </dt>
                  <dd>{service.timeline}</dd>
                </div>
                <div>
                  <dt>
                    <FiDollarSign aria-hidden="true" /> Retainer
                  </dt>
                  <dd>{service.retainer}</dd>
                </div>
                <div>
                  <dt>
                    <FiFlag aria-hidden="true" /> On delivery
                  </dt>
                  <dd>{service.finalPayment}</dd>
                </div>
              </dl>
            )}
          </div>
        </div>
      </section>

      {service.process.length > 0 && (
        <section className="section section--muted" aria-labelledby="process-title">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Development process</span>
              <h2 id="process-title">Three steps from idea to launch</h2>
              <p>
                Every engagement follows the same transparent path, so you always know what happens
                next and what it costs.
              </p>
            </div>
            <ProcessSteps steps={service.process} />
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="more-title">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">More expertise</span>
            <h2 id="more-title">Other ways we can help</h2>
          </div>
          <div className="grid grid--2">
            {others.map((other, index) => (
              <ServiceCard key={other.slug} service={other} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
