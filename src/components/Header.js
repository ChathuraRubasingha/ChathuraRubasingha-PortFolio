import React, { useContext } from "react";
import "../style/Header.css";
import { DarkModeContext } from "../App";
import { Dark, Light } from "../theme";
import Sun from "../assets/Icons/sun-solid.svg";
import Moon from "../assets/Icons/moon-solid.svg";

function Header() {
  const Theme = useContext(DarkModeContext);
  const toggledark = () => {
    Theme.setIsDark((prevState) => !prevState);
  };
  return (
    <div
      className="header-section"
      style={Theme.isdark ? { color: Dark.Color } : { color: Light.Color }}
    >
      <div className="left-side">
        <span style={{ color: Dark.Foreground }}>C</span>R
      </div>
      <div className="right-side">
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Skills</p>
        <p>Portfolio</p>
        <p>Contact</p>
        <div onClick={() => toggledark()}>
          {Theme.isdark ? <img src={Sun} /> : <img src={Moon}/>}
        </div>
      </div>
    </div>
  );
}

export default Header;
