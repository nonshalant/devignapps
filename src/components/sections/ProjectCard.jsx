import { FiArrowUpRight } from "react-icons/fi";
import { cld } from "../../lib/cloudinary";
import "./ProjectCard.css";

export default function ProjectCard({ project, kind = "website", index = 0 }) {
  const isApp = kind === "app";
  return (
    <article
      className={`project-card ${isApp ? "project-card--app" : ""} reveal`}
      style={{ "--reveal-delay": `${index * 80}ms` }}
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__link"
        aria-label={`${project.name}: ${isApp ? "view on the App Store" : "open website"}`}
      >
        <div className="project-card__media">
          <img
            src={cld(project.image, { width: isApp ? 320 : 960 })}
            alt={`${project.name} ${isApp ? "app icon" : "screenshot"}`}
            loading="lazy"
            decoding="async"
            width={isApp ? 160 : 960}
            height={isApp ? 160 : 600}
          />
        </div>
        <div className="project-card__body">
          <span className="project-card__category">{project.category}</span>
          <h3>
            {project.name}
            <FiArrowUpRight aria-hidden="true" />
          </h3>
          <p>{project.description}</p>
          {project.tags?.length ? (
            <ul role="list" className="project-card__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </a>
    </article>
  );
}
