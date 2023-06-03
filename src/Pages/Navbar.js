import "./css/Navbar.css";
import { useState } from "react";
import logo from "./Files/LOGO_dark.png";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img src={logo} alt="LOGO" id="logo" />
        </Link>
      </div>
      <ul className={navLinks}>
        <li className={link} onClick={handleClick}>
          <Link to="/" >Home</Link>
        </li>
        <li className={link} onClick={handleClick}>
          <a href="#about" >About</a>
        </li>
        <li className={link} onClick={handleClick}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
