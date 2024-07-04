import React, { useContext } from "react";
import { isDarkContext } from "../App";
import { Dark, Light } from "../Theme";
import "../style/Footer.css";
import fb from "../assets/Icon/square-facebook (1).svg";
import insta from "../assets/Icon/square-instagram (1).svg";
import git from "../assets/Icon/square-github (1).svg";
import linkedIn from "../assets/Icon/linkedin (1).svg";
import medium from "../assets/Icon/medium.svg";
import Avetar from "../assets/Img/AboutImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const Theme = useContext(isDarkContext);

  return (
    <div
      className="footer-wrapper"
      style={
        Theme.isDark
          ? { backgroundColor: Dark.backgroundPrimary, color: Dark.color }
          : { backgroundColor: Light.backgroundPrimary, color: Light.color }
      }
    >
      <div className="footer-container">
        <div className="footer-social">
        <a href="https://www.facebook.com/chathura.rubasinghe.7"><img src={fb} /></a>
        <a href="https://www.instagram.com/chatura_rubasinghe/?hl=en"> <img src={insta} /></a>
        <a href="https://github.com/ChathuraRubasingha"><img src={git} /></a>
        <a href="https://www.linkedin.com/in/chathura-rubasinghe-7b5965203/"> <img src={linkedIn} /></a>
        <a href="https://medium.com/@rubasinghe99cpk"><img src={medium} /></a>
        </div>
        <div className="footer-body">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </div>
        <div className="footer-bold">
          Design and Developed by Chathura Rubasingha
        </div>
        <div className="footer-avetar">
          <img src={Avetar} />
        </div>
      </div>
      <div
        className="footer-copyrights"
        style={
          Theme.isDark
            ? { backgroundColor: Dark.backgroundSecondary }
            : { backgroundColor: Light.backgroundSecondary }
        }
      >
        <span style={{ fontWeight: "500" }}>
          Chathura Rubasingha <FontAwesomeIcon icon={faDotCircle} style={{fontSize:'5px',padding:'0 0 3px 0'}}/>
        </span>{" "}
        © 2024 Chathura Rubasingha. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
