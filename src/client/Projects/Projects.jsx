import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Works from "./partials/Works";
import "./project.css";

const Projects = ({ websiteProjects, appProjects }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects">
      <Works websiteProjects={websiteProjects} appProjects={appProjects} />
      <Footer />
    </div>
  );
};

export default Projects;
