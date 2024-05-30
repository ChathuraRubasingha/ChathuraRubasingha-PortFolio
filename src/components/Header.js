import React, { useContext, useState } from "react";
import "../style/Header.css";
import { DarkModeContext } from "../App";
import { Dark, Light } from "../theme";
import Sun from "../assets/Icons/sun-solid.svg";
import Moon from "../assets/Icons/moon-solid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross, faHamburger, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const Theme = useContext(DarkModeContext);
  const toggleDark = () => {
    Theme.setIsDark((prevState) => !prevState);
  };
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className="header-section"
      style={
        Theme.isdark
          ? { color: Dark.Color, backgroundColor: Dark.FirstBackground }
          : { color: Light.Color, backgroundColor: Light.FirstBackground }
      }
    >
      <div className="left-side">
        <span style={{ color: Dark.Foreground }}>C</span>R
      </div>
      <div className="right-side">
        <div className={`menu-item ${isOpen ? "open" : ""}`}>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Skills</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
         {isOpen?<FontAwesomeIcon icon={faXmark} />:<FontAwesomeIcon icon={faBars} />} 
        </div>
        <div onClick={toggleDark}>
          {Theme.isdark ? <img src={Sun} alt="Light Mode" /> : <img src={Moon} alt="Dark Mode" />}
        </div>
      </div>
    </div>
  );
}

export default Header;
