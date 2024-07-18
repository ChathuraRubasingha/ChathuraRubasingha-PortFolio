import React, { useContext, useState } from "react";
import "../style/Header.css";
import { isDarkContext } from "../App";
import { Dark, Light } from "../Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const Theme = useContext(isDarkContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const ToggleDark = () => {
    Theme.setIsDark((prevState) => !prevState);
  };

  const ToggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const ToHome = () => {
    navigate("/");
  };

  return (
    <div
      className="header-wrapper"
      style={
        Theme.isDark
          ? { backgroundColor: Dark.backgroundPrimary, color: Dark.color }
          : { backgroundColor: Light.backgroundPrimary, color: Light.color }
      }
    >
      <div className="header-left" onClick={ToHome}>
        C<span style={{ color: Dark.foreground, cursor: "pointer" }}>R</span>
      </div>
      <div className="header-right">
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link
            className="menu-items"
            to="home"
            spy={true}
            smooth={true}
            duration={300}
            onClick={ToggleMenu}
          >
            Home
          </Link>
          <Link
            className="menu-items"
            to="about"
            spy={true}
            smooth={true}
            duration={300}
            onClick={ToggleMenu}
          >
            About
          </Link>
          <Link
            className="menu-items"
            to="skills"
            spy={true}
            smooth={true}
            duration={300}
            onClick={ToggleMenu}
          >
            Skills
          </Link>
          <Link
            className="menu-items"
            to="journy"
            spy={true}
            smooth={true}
            duration={300}
            onClick={ToggleMenu}
          >
            Journey
          </Link>
          <Link
            className="menu-items"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={300}
            onClick={ToggleMenu}
          >
            Portfolio
          </Link>
          <Link
            className="menu-items"
            to="contact"
            spy={true}
            smooth={true}
            duration={300}
            onClick={ToggleMenu}
          >
            Contact
          </Link>
        </div>
        <div className="hamburger" onClick={ToggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div onClick={ToggleDark}>
          {Theme.isDark ? (
            <FontAwesomeIcon
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              icon={faSun}
            />
          ) : (
            <FontAwesomeIcon
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              icon={faMoon}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
