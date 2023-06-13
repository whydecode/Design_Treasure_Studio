import React from "react";
import "../css/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        COPYRIGHT 2023 &#169; DESIGN TREASURE STUDIO
      </div>
      <div className="follow">
        Follow us on{" "}
        <strong>
          <a
            href="https://www.instagram.com/designtreasure_studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </strong>
      </div>
    </div>
  );
};

export default Footer;
