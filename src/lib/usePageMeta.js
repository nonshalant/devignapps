import { useEffect } from "react";
import { site } from "../config/site";

const setMeta = (selector, attr, value) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [key, name] = selector.replace(/^meta\[|\]$/g, "").split("=");
    el.setAttribute(key, name.replace(/"/g, ""));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

/**
 * Keeps <title>, description, canonical and Open Graph tags in sync with the
 * current route without pulling in a head-management dependency.
 */
export function usePageMeta({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : site.name;
    const url = `${site.url}${path}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path]);
}
