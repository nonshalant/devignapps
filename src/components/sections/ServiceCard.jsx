import { FiArrowRight } from "react-icons/fi";
import Button from "../ui/Button";
import "./ServiceCard.css";

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;
  return (
    <article className="service-card reveal" style={{ "--reveal-delay": `${index * 80}ms` }}>
      <span className="service-card__icon">
        <Icon aria-hidden="true" />
      </span>
      <h3>{service.short}</h3>
      <p>{service.summary}</p>
      {service.comingSoon ? (
        <span className="service-card__badge">Coming soon</span>
      ) : (
        <Button to={`/expertise/${service.slug}`} variant="link" icon={FiArrowRight}>
          Learn more
        </Button>
      )}
    </article>
  );
}
