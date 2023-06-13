import "../css/Navbar.css";
import { useState } from "react";
import logo from "../Files/LOGO_dark.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navLinks = open ? "nav-links open" : "nav-links";
  const link = open ? "fade" : "";
  const hamburger = open ? "hamburger toggle" : "hamburger";
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 40) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={colorChange ? "navbar colorChange" : "navbar"}>
      <div className={hamburger} onClick={handleClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="navLogo">
        <NavLink to="/">
          <img src={logo} alt="LOGO" id="logo" />
        </NavLink>
      </div>
      <ul className={navLinks}>
        <li className={link} onClick={handleClick}>
          <NavLink exact="true" activeclassname="active" to="/">
            Home
          </NavLink>
        </li>
        <li className={link} onClick={handleClick}>
          <NavLink activeclassname="active" to="/about">
            About
          </NavLink>
        </li>
        <li className={link} onClick={handleClick}>
          <NavLink activeclassname="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
