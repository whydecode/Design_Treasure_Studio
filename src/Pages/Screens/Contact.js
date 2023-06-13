import React from "react";
import "../css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import facebook from "../Files/facebook.svg";
import instagram from "../Files/instagram.svg";

const Contact = () => {
  const handleSubmit = () => {};
  return (
    <div id="contact" className="contact">
      <div id="content">
        <h1>Get In Touch</h1>
        <br />

        <div className="mydetails">
          <a href="tel:+918814068298" className="contact-link">
            <FontAwesomeIcon icon={faPhone} /> 8814068298,{" "}
          </a>
          <a href="tel:+918561013841" className="contact-link">
            8561013841
          </a>
        </div>
        <div className="mydetails"></div>
        <div className="mydetails">
          <a
            href="mailto:designtreasurestudio@gmail.com"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faEnvelope} /> designtreasurestudio@gmail.com
          </a>
        </div>
        <div className="mydetails">
          <a
            href="mailto:designtreasurestudio@gmail.com"
            className="contact-link"
          >
            {/* <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} /> */}
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="formdiv">
        <form name="contact" method="post" onSubmit={handleSubmit}>
          {/* <h1>Contact Us</h1> */}
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div>
            <input type="tel" name="tel" placeholder="Phone (Optional)" />
          </div>
          <div>
            <input
              type="text"
              name="message"
              placeholder="Message"
              id="message"
              required
            />
          </div>
          <button type="submit" id="submitbutton">
            Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
