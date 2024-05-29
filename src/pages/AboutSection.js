import React, { useContext } from "react";
import "../style/AboutSection.css";
import { Dark, Light } from "../theme";
import { DarkModeContext } from "../App";
import aboutImg from "../assets/images/heroImg.png";

function AboutSection() {
  const theme = useContext(DarkModeContext);

  return (
    <div
      className="about-section"
      style={
        theme.isdark
          ? { backgroundColor: Dark.SecondBackground }
          : { backgroundColor: Light.SecondBackground }
      }
    >
      <div className="about-img">
        <img src={aboutImg} alt="About me" />
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#3ECFF0" d="M40.1,-61.3C48.5,-49.2,49.3,-32.7,49.3,-19.2C49.4,-5.6,48.7,5,48.7,19.2C48.7,33.5,49.5,51.3,41.5,65.4C33.5,79.4,16.8,89.6,-0.4,90.1C-17.6,90.7,-35.1,81.6,-49.8,69.7C-64.4,57.9,-76.2,43.2,-79.7,27.2C-83.1,11.1,-78.3,-6.4,-69.2,-18.7C-60,-31.1,-46.5,-38.2,-34.3,-49.1C-22,-60,-11,-74.6,2.4,-78C15.9,-81.3,31.8,-73.5,40.1,-61.3Z" transform="translate(100 100)" />
</svg>
      </div>
      <div
        className="about-body"
        style={theme.isdark ? { color: Dark.Color } : { color: Light.Color }}
      >
        <p style={{ fontSize: "15px" }}>LET ME INTRODUCE MY SELF</p>
        <h1>About Me</h1>
        <div
          className="about-text"
          style={theme.isdark ? { color: Dark.Color } : { color: Light.Color }}
        >
          <h3>Full Stack Developer!</h3>
          <p>
            I am Chathura Rubasingha, a skilled Full Stack Developer with a
            passion for creating dynamic and efficient web applications. With a
            strong foundation in React, Node.js, and SQL, I thrive in
            collaborative environments and am dedicated to delivering
            high-quality software solutions. Currently, I am pursuing a
            B.Sc.(Hons) in Information Technology at the University of Moratuwa,
            complementing my professional experience at Hasthiya IT where I
            contributed to various innovative projects. I continuously strive to
            enhance my skills and apply cutting-edge technologies to solve
            real-world problems.
          </p>
          <button>Read More..</button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
