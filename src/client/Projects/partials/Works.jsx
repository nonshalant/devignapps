import { Image } from "cloudinary-react";
import React from "react";

const Works = ({ websiteProjects, appProjects }) => {
  const renderProjects = (projects, label) =>
    projects.map((project) => (
      <article key={project.id} className="project-card">
        <a
          href={project.redirect || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <div className="project-media">
            <Image cloudName={project.cloudName} publicId={project.image} />
          </div>
          <div className="project-details">
            <div className="project-meta">
              <span className="project-type">{label}</span>
              <span className="project-name">{project.name}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <span className="project-action">
              {label === "Apps" ? "View on App Store" : "Open website"}
            </span>
          </div>
        </a>
      </article>
    ));

  return (
    <div className="works-container">
      <div className="projects-hero">
        <span className="hero-eyebrow">Featured work</span>
        <h1>Projects that look premium and convert visitors into customers.</h1>
        <p className="hero-copy">
          Explore our latest websites and App Store launches, built to make a
          strong first impression on any screen.
        </p>
      </div>

      <section className="project-block">
        <div className="section-title">
          <span>Websites</span>
          <p>
            Responsive web experiences designed for speed, clarity, and strong
            brand presence.
          </p>
        </div>
        <div className="projects-grid">
          {renderProjects(websiteProjects, "Websites")}
        </div>
      </section>

      <section className="project-block">
        <div className="section-title">
          <span>Apps</span>
          <p>
            App Store-ready mobile products with polished visuals and smooth
            user journeys.
          </p>
        </div>
        <div className="projects-grid">
          {renderProjects(appProjects, "Apps")}
        </div>
      </section>
    </div>
  );
};

export default Works;
