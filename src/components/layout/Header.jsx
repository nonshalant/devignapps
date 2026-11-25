import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { navigation, site } from "../../config/site";
import Button from "../ui/Button";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  // Elevate the header once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation.
  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Escape closes menus; clicking outside closes the desktop dropdown.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setOpenGroup(null);
      }
    };
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenGroup(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClick);
    };
  }, []);

  const groupIsActive = (group) => group.children?.some((c) => location.pathname === c.to);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`}>
      <div className="container header__inner">
        <Link to="/" className="header__brand" aria-label={`${site.name} home`}>
          <img src={site.logo} alt="" width="138" height="54" />
        </Link>

        <nav className="header__nav" aria-label="Primary" ref={navRef}>
          <ul role="list">
            {navigation.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className={`header__group ${openGroup === item.label ? "is-open" : ""}`}
                  onMouseEnter={() => setOpenGroup(item.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    type="button"
                    className={`header__link ${groupIsActive(item) ? "is-active" : ""}`}
                    aria-expanded={openGroup === item.label}
                    aria-controls={`menu-${item.label}`}
                    onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                  >
                    {item.label}
                    <FiChevronDown aria-hidden="true" />
                  </button>
                  <div className="header__menu" id={`menu-${item.label}`}>
                    <ul role="list">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink to={child.to} className="header__menu-item">
                            <span className="header__menu-title">
                              {child.label}
                              {child.badge ? <em>{child.badge}</em> : null}
                            </span>
                            <span className="header__menu-desc">{child.description}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `header__link ${isActive ? "is-active" : ""}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="header__actions">
          <Button to="/contact" size="sm" className="header__cta">
            Start a project
          </Button>
          <button
            type="button"
            className="header__burger"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
        <nav aria-label="Mobile" className="container mobile-menu__inner">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.label} className="mobile-menu__group">
                <p className="mobile-menu__label">{item.label}</p>
                <ul role="list">
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <NavLink to={child.to} className="mobile-menu__sublink">
                        <span>
                          {child.label}
                          {child.badge ? <em>{child.badge}</em> : null}
                        </span>
                        <small>{child.description}</small>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} className="mobile-menu__link">
                {item.label}
                <FiArrowUpRight aria-hidden="true" />
              </NavLink>
            ),
          )}
          <div className="mobile-menu__cta">
            <Button to="/contact" size="lg">
              Start a project
            </Button>
            <a href={site.phoneHref}>Call {site.phone}</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
