import { FiArrowRight } from "react-icons/fi";
import Button from "../ui/Button";
import { site } from "../../config/site";
import "./CtaBand.css";

export default function CtaBand({
  title = "Let's discuss your project",
  copy = "We're eager to hear your ideas and turn them into a polished digital product. Book a free consultation today.",
}) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta-band reveal">
          <div>
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
          <div className="cta-band__actions">
            <Button to="/contact" size="lg" icon={FiArrowRight}>
              Schedule a consultation
            </Button>
            <a className="cta-band__phone" href={site.phoneHref}>
              or call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
