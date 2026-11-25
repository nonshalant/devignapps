import { FiPhone, FiMapPin, FiInstagram, FiClock } from "react-icons/fi";
import { site } from "../../config/site";
import ContactForm from "./ContactForm";
import "./ContactSection.css";

export default function ContactSection({ title, eyebrow = "Get started" }) {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-section">
        <div className="contact-section__aside reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2 id="contact-title">Ready when you are.</h2>
          <p className="lead">
            Book a free consultation. We&apos;ll talk through your goals, timeline and budget, then
            map out the fastest route to launch.
          </p>
          <ul role="list" className="contact-section__list">
            <li>
              <FiPhone aria-hidden="true" />
              <div>
                <strong>Call us</strong>
                <a href={site.phoneHref}>{site.phone}</a>
              </div>
            </li>
            <li>
              <FiMapPin aria-hidden="true" />
              <div>
                <strong>Visit</strong>
                <span>Located in {site.location}</span>
              </div>
            </li>
            <li>
              <FiClock aria-hidden="true" />
              <div>
                <strong>Response time</strong>
                <span>Within one business day</span>
              </div>
            </li>
            <li>
              <FiInstagram aria-hidden="true" />
              <div>
                <strong>Follow along</strong>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  @devignapps
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="reveal" style={{ "--reveal-delay": "120ms" }}>
          <ContactForm title={title} />
        </div>
      </div>
    </section>
  );
}
