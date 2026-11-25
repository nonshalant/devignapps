import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function SiteLayout() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex="-1">
        <Suspense fallback={<div className="route-loading" aria-busy="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
