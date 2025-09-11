import React from "react";
import "./footer.css";

// icons
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="column_one column">
          <h2>Office Headquarters</h2>
          <h3>New York, New York</h3>
        </div>
        <div className="social_links column">
          <h2> Follow Us!</h2>
          <a href="https://www.instagram.com/devignapps" target="_blank">
            <BsInstagram /> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
