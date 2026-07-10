import { Image } from "cloudinary-react";
import React, { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const MobileNavigation = (props) => {
  const {
    setDropDown,
    dropDown,
    handleHambugerClick,
    hamberClicked,
    projectImages,
  } = props;

  useEffect(() => {
    document.body.style.overflow = hamberClicked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hamberClicked]);

  const closeMenu = () => {
    handleHambugerClick(false);
    if (dropDown) setDropDown(false);
  };

  return (
    <div className="mobile">
      <div className="mobile_brand">
        {projectImages.map((logo) =>
          logo.id === "logo" ? (
            <div key={logo.id} className="logo-container">
              <Link to="/" onClick={closeMenu}>
                <Image
                  cloudName={logo.cloudName}
                  publicId={logo.image}
                  className="businessLogo"
                />
              </Link>
            </div>
          ) : null,
        )}
      </div>

      <button
        type="button"
        className="hamburger"
        onClick={() => handleHambugerClick(!hamberClicked)}
        aria-label={hamberClicked ? "Close menu" : "Open menu"}
      >
        <GiHamburgerMenu size={26} />
        <span>Menu</span>
      </button>

      {hamberClicked && (
        <div className="mobile_nav_active">
          <div className="mobile_container">
            <div className="mobile_header">
              <div>
                <p className="mobile_header_label">Navigation</p>
                <h2>Find the right page fast</h2>
              </div>
              <button
                type="button"
                className="close_button"
                onClick={closeMenu}
              >
                Close
              </button>
            </div>

            <nav className="mobile_nav_links">
              <button
                type="button"
                className={`mobile_nav_item ${dropDown ? "active" : ""}`}
                onClick={() => setDropDown(!dropDown)}
              >
                <span>Expertise</span>
                <AiOutlineArrowRight />
              </button>

              {dropDown && (
                <div className="mobile_sub_navigation">
                  <div className="mobile_sub_header">
                    <button
                      type="button"
                      className="back_button"
                      onClick={() => setDropDown(false)}
                    >
                      Back
                    </button>
                    <h3>Expertise</h3>
                  </div>
                  <ul className="mobile_sub_links">
                    <li>
                      <Link to="/expertise/web-development" onClick={closeMenu}>
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/expertise/app-development" onClick={closeMenu}>
                        App Development
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              <Link
                className="mobile_nav_item"
                onClick={closeMenu}
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className="mobile_nav_item"
                onClick={closeMenu}
                to="/careers"
              >
                Careers
              </Link>
              <Link className="mobile_nav_item" onClick={closeMenu} to="/about">
                About
              </Link>
            </nav>

            <div className="mobile_cta">
              <Link
                className="mobile_contact"
                to="/contact"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
