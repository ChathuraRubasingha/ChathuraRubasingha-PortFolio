import React, { useContext } from "react";
import "../style/AboutSection.css";
import { Dark, Light } from "../theme";
import { DarkModeContext } from "../App";

function AboutSection() {
  const theme = useContext(DarkModeContext);

  return (
    <div
      className="about-section"
      style={
        theme.Dark
          ? { backgroundColor: Dark.SecondBackground }
          : { backgroundColor: Light.SecondBackground }
      }
    >
      <div
        className="about-header"
        style={theme.Dark ? { color: Dark.Color } : { color: Light.Color }}
      >
        About Me
      </div>
    </div>
  );
}

export default AboutSection;
