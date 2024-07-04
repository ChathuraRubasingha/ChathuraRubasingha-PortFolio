import React, { useContext, useState } from "react";
import "../style/About.css";
import { isDarkContext } from "../App";
import { Dark, Light } from "../Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function About() {
  const Theme = useContext(isDarkContext);
  const [readMore, setReadMore] = useState(false);
  const readmore = () => {
    setReadMore((prevState) => !prevState);
  };
  return (
    <div
      className={readMore ? "about-wrapper-read" : "about-wrapper"}
      style={
        Theme.isDark
          ? { backgroundColor: Dark.backgroundSecondary, color: Dark.color }
          : { backgroundColor: Light.backgroundSecondary, color: Light.color }
      }
    >
      <div className="about-container">
        <div className="about-suport-header">LET ME INTRODUCE MYSELF</div>
        <div className="about-header" style={{ color: Dark.foreground }}>
          About Me
        </div>
        <div className="about-img-container">
          <div className="abot-img"></div>
        </div>
        <div className="about-body">
          Hello! I'm Chathura Rubasingha, a dedicated and enthusiastic Full
          Stack Developer with a strong focus on creating interactive and
          user-friendly interfaces. I graduated from the Faculty of Information
          Technology at the University of Moratuwa, Sri Lanka, where I developed
          a solid foundation in software engineering principles and practices.
          <br />
          <br />
          Since July 2023, I have been working as an Associate Software Engineer
          at Hasthiya IT, where I continue to refine my skills and contribute to
          innovative projects. Prior to this role, I completed a 6-month
          internship at Hasthiya IT, gaining valuable hands-on experience as a
          full-stack developer. During this time, I had the opportunity to work
          on a variety of projects, contributing to more than 10 successful
          initiatives that showcased my ability to deliver high-quality and
          scalable solutions.
          <br />
          {readMore && (
            <span>
              <br />
              My journey in software development is driven by a love for
              problem-solving and a continuous quest for learning. I am
              particularly enthusiastic about crafting interactive user
              interfaces that not only meet user needs but also provide an
              exceptional experience. I believe that the best software solutions
              are those that seamlessly blend functionality with aesthetics, and
              I strive to achieve this balance in every project I undertake.
              <br />
              <br />
              Outside of my professional life, I enjoy staying updated with the
              latest trends in technology and dedicating time to personal
              development projects. Whether it's exploring new frameworks,
              experimenting with cutting-edge tools, or collaborating on
              exciting new ideas, I am always eager to expand my horizons and
              push the boundaries of what's possible.
              <br />
              <br />
              I'm excited about the future of technology and the endless
              possibilities it offers. I'm always on the lookout for new
              challenges and opportunities to collaborate with like-minded
              individuals who share my passion for innovation and excellence.
              Let's connect and create something extraordinary together!
            </span>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="about-button"
            style={{ border: "2px solid #3ecff0" }}
            onClick={readmore}
          >
            Read more
            {readMore ? (
              <FontAwesomeIcon
                icon={faAngleUp}
                style={{ padding: "0 0 0 10px" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ padding: "0 0 0 10px" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
