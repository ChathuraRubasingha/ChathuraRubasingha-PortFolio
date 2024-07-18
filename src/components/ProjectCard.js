import React, { useContext } from "react";
import "../style/ProjectCard.css";
import { isDarkContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Dark, Light } from "../Theme";

function ProjectCard(props) {
  const Theme = useContext(isDarkContext);

  return (
    <div
      className="project-card-container"
      style={
        Theme.isDark
          ? { backgroundColor: Dark.backgroundSecondary }
          : { backgroundColor: Light.backgroundSecondary }
      }
    >
      <div
        className="project-card-upper"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      ></div>
      <div className="project-card-lower">
        <div className="project-card-title">{props.title}</div>
        <div className="project-card-body">
          {props.body}
          <br />
          <br />
          <span style={{ fontWeight: "500" }}>Technologies:</span>
        </div>
        <div className="project-card-technologies">
          {props.tech.map((item) => {
            return <div className="pct" key={item}>{item}</div>;
          })}
        </div>
        <div className="project-card-footer">
          <a href="https://github.com/ChathuraRubasingha">
            <div className="project-card-git">
              Github
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                style={{ paddingLeft: "10px" }}
              />
            </div>
          </a>
          <div className="project-card-avetar"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
