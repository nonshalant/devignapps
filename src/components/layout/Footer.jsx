import { Link } from "react-router-dom";
import { FiInstagram, FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { navigation, site } from "../../config/site";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const expertise = navigation.find((item) => item.children)?.children ?? [];
  const pages = navigation.filter((item) => item.to);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" aria-label={`${site.name} home`}>
            <img src={site.logo} alt="" width="150" height="58" />
          </Link>
          <p>{site.tagline}</p>
          <a
            className="footer__social"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram aria-hidden="true" /> Follow us on Instagram
          </a>
        </div>

        <nav aria-label="Expertise" className="footer__col">
          <h2>Expertise</h2>
          <ul role="list">
            {expertise.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="footer__col">
          <h2>Company</h2>
          <ul role="list">
            {pages.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="footer__col">
          <h2>Get in touch</h2>
          <ul role="list" className="footer__contact">
            <li>
              <FiMapPin aria-hidden="true" />
              <span>Headquartered in {site.location}</span>
            </li>
            <li>
              <FiPhone aria-hidden="true" />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <FiMail aria-hidden="true" />
              <Link to="/contact">Send us a message</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          &copy; {year} {site.name}. All rights reserved.
        </p>
        <p>Designed and built in New York.</p>
      </div>
    </footer>
  );
}
