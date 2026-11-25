import { FiArrowRight } from "react-icons/fi";
import { usePageMeta } from "../../lib/usePageMeta";
import { useReveal } from "../../lib/useReveal";
import { websiteProjects, appProjects } from "../../data/projects";
import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import ProjectCard from "../../components/sections/ProjectCard";
import CtaBand from "../../components/sections/CtaBand";

export default function ProjectsPage() {
  usePageMeta({
    title: "Projects",
    description:
      "Explore websites and App Store launches built by Devign Apps, designed to make a strong first impression on any screen.",
    path: "/projects",
  });
  useReveal();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
        eyebrow="Featured work"
        title="Projects that look premium and convert visitors into customers."
        lead="Explore our latest websites and App Store launches, built to make a strong first impression on any screen."
      >
        <div className="page-hero__actions">
          <Button to="/contact" size="lg" icon={FiArrowRight}>
            Start your project
          </Button>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="websites-title">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Websites</span>
            <h2 id="websites-title">Responsive websites built for speed and clarity</h2>
            <p>
              Strong brand presence, fast load times and flows designed to turn visitors into
              clients.
            </p>
          </div>
          <div className="grid grid--projects">
            {websiteProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="apps-title">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Apps</span>
            <h2 id="apps-title">App Store-ready mobile products</h2>
            <p>Polished visuals and smooth interfaces, shipped to real users on the App Store.</p>
          </div>
          <div className="grid grid--projects">
            {appProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} kind="app" index={index} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want to be our next launch?" />
    </>
  );
}
