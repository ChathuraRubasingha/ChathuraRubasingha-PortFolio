import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import "../style/Hero.css";
import { isDarkContext } from "../App";
import { Dark, Light } from "../Theme";
import LinkedIn from "../assets/Icon/linkedin (1).svg";
import Git from "../assets/Icon/square-github (1).svg";
import Inster from "../assets/Icon/square-instagram (1).svg";
import FB from "../assets/Icon/square-facebook (1).svg";
import HeroImg from "../assets/Img/heroImg.png";
import { animation } from "../assets/animation";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const titles = ["FullstackEngineer", "FrontendEngineer", "BackendEngineer"];

function Hero() {
  const navigate = useNavigate();
  const Theme = useContext(isDarkContext);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("enter");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("exit");
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setAnimationClass("enter");
      }, 2500);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const splitTitle = (title) => {
    return title.split("").map((char, index) => (
      <span
        key={index}
        className={`animated-letter ${animationClass}`}
        style={{ "--char-index": index }}
      >
        {char}
      </span>
    ));
  };

  const NavigateToResume = () => {
    navigate("/resume");
  };

  return (
    <div
      className="hero-wrapper"
      style={
        Theme.isDark
          ? { backgroundColor: Dark.backgroundPrimary, color: Dark.color }
          : { backgroundColor: Light.backgroundPrimary, color: Light.color }
      }
    >
      <Header />
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-heading">
            <div className="hero-header">Hi!, I'm CHATHURA</div>
            <div className="hero-sub-header">
              And I'm{" "}
              <span style={{ color: Dark.foreground }}>
                {splitTitle(titles[currentTitleIndex])}
              </span>
            </div>
            <div className="hero-header-body">
              I'm a passionate Full Stack Developer specializing in React with
              over 2 years of industry experience. I've successfully contributed
              to more than 10 diverse projects, delivering high-quality,
              efficient, and scalable solutions. Whether it's building sleek
              user interfaces or robust backend systems, I thrive on turning
              ideas into reality. Let's create something amazing together!
            </div>
            <div className="hero-buttons">
              <div
                className="hero-button"
                style={{
                  backgroundColor: Dark.foreground,
                }}
                onClick={NavigateToResume}
              >
                Download CV
              </div>
              <Link to="contact" spy={true} smooth={true} duration={300}>
                {" "}
                <div className="hero-button">Hire me now!</div>
              </Link>
            </div>
            <div className="hero-logo-section">
              <div className="hero-logos">
                <a href="https://www.linkedin.com/in/chathura-rubasinghe-7b5965203/">
                  <img src={LinkedIn} />
                </a>
              </div>
              <div className="hero-logos">
                <a href="https://github.com/ChathuraRubasingha">
                  <img src={Git} />
                </a>
              </div>

              <div className="hero-logos">
                <a href="https://www.facebook.com/chathura.rubasinghe.7">
                  <img src={FB} />
                </a>
              </div>
              <div className="hero-logos">
                <a href="https://www.instagram.com/chatura_rubasinghe/?hl=en">
                  <img src={Inster} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img">
            <img src={HeroImg} alt="HeroImg" />
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#3ECFF0"
                d="M46.3,-47.9C60.6,-32.1,73.1,-16,76.8,3.7C80.6,23.5,75.5,46.9,61.2,57.4C46.9,68,23.5,65.6,2.6,63C-18.3,60.4,-36.5,57.6,-50.2,47C-63.9,36.5,-73,18.3,-73.7,-0.7C-74.4,-19.6,-66.7,-39.3,-53,-55.2C-39.3,-71,-19.6,-83.1,-1.8,-81.3C16,-79.5,32.1,-63.8,46.3,-47.9Z"
                transform="translate(100 100)"
              >
                <animate
                  attributeName="d"
                  dur="10s"
                  repeatCount="indefinite"
                  values={animation}
                />
              </path>
            </svg>
          </div>
        </div>
      </div>
      <div className="pdf-viewer"></div>
    </div>
  );
}

export default Hero;
