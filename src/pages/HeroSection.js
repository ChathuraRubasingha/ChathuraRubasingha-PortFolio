import React, { useContext } from "react";
import Header from "../components/Header";
import "../style/HeroSection.css";
import { Dark, Light } from "../theme";
import { DarkModeContext } from "../App";
import HeroImg from "../assets/images/heroImg.png";
import { animation } from "../assets/animation";
import LinkedIn from "../assets/Icons/linkedin.svg";
import GitHub from "../assets/Icons/square-github.svg";
import Facebook from "../assets/Icons/square-facebook.svg";
import Inster from "../assets/Icons/square-instagram.svg";

function HeroSection() {
  const theme = useContext(DarkModeContext);

  const dropLetterAnimation = (text) => {
    const words = text.split(" ");
    let animatedText = [];
    words.forEach((word, wordIndex) => {
      const wordLetters = word.split("").map((letter, index) => (
        <span
          key={index}
          className="drop-letter"
          style={{ animationDelay: `${wordIndex * 0.1 + index * 0.1}s` }}
        >
          {letter}
        </span>
      ));
      if (wordIndex < words.length - 1) {
        wordLetters.push(<span key={`space${wordIndex}`}>&nbsp;</span>);
      }
      animatedText = [...animatedText, ...wordLetters];
    });

    return animatedText;
  };

  return (
    <div
      className="hero-section"
      style={
        theme.isdark
          ? { backgroundColor: Dark.FirstBackground }
          : { backgroundColor: Light.FirstBackground }
      }
    >
      <Header />
      <div
        className="hero-container"
        style={theme.isdark ? { color: Dark.Color } : { color: Light.Color }}
      >
        <div className="hero-left">
          <h2>Hi! I'm Chathura</h2>
          <h4>
            And I'm{" "}
            <span className="hero-subheader" style={{ color: "#3ecff0" }}>
              {dropLetterAnimation("React Full Stack Developer")}
            </span>
          </h4>
          <p>
            Full Stack Developer with experience in React, Node, and SQL.
            Committed to delivering high-quality results and working
            collaboratively in a friendly and dynamic environment.
          </p>
          <div className="hero-buttons">
            <div className="hero-left-button">
              <br />
              <p className="hero-button">Download CV</p>
            </div>
            <div className="hero-right-button">
              <br />

              <p className="hero-button">Hire me now!</p>
            </div>
          </div>
          <div className="icon-section">
            <img src={LinkedIn} />
            <img src={GitHub} />
            <img src={Facebook} />
            <img src={Inster} />
          </div>
        </div>
        <div className="hero-right">
          <img className="hero-img" src={HeroImg} alt="Hero" />
          <div className="back-img">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#3ECFF0"
                d="M46.3,-47.9C60.6,-32.1,73.1,-16,76.8,3.7C80.6,23.5,75.5,46.9,61.2,57.4C46.9,68,23.5,65.6,2.6,63C-18.3,60.4,-36.5,57.6,-50.2,47C-63.9,36.5,-73,18.3,-73.7,-0.7C-74.4,-19.6,-66.7,-39.3,-53,-55.2C-39.3,-71,-19.6,-83.1,-1.8,-81.3C16,-79.5,32.1,-63.8,46.3,-47.9Z"
                transform="translate(100 100)"
              >
                <animate
                  attributeName="d"
                  dur="8s"
                  repeatCount="indefinite"
                  values={animation}
                />
              </path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
