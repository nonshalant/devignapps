import Breadcrumbs from "./Breadcrumbs";
import "./PageHero.css";

/**
 * Dark, on-brand hero used by every inner page so they share one rhythm.
 */
export default function PageHero({ eyebrow, title, lead, breadcrumbs, children, aside }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <div className="page-hero__content">
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1>{title}</h1>
          {lead ? <p className="page-hero__lead">{lead}</p> : null}
          {children}
        </div>
        {aside ? <div className="page-hero__aside">{aside}</div> : null}
      </div>
    </section>
  );
}
