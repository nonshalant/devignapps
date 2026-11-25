import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import HomePage from "./pages/home/HomePage";

// Inner pages are code-split so the home page ships the smallest bundle.
const ServicePage = lazy(() => import("./pages/services/ServicePage"));
const ProjectsPage = lazy(() => import("./pages/projects/ProjectsPage"));
const AboutPage = lazy(() => import("./pages/about/AboutPage"));
const CareersPage = lazy(() => import("./pages/careers/CareersPage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/not-found/NotFoundPage"));

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/expertise/:slug" element={<ServicePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
