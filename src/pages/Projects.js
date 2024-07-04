import React, { useContext } from "react";
import "../style/Projects.css";
import { isDarkContext } from "../App";
import { Dark, Light } from "../Theme";
import ProjectCard from "../components/ProjectCard";
import { CardDetails } from "../components/CardDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  const Theme = useContext(isDarkContext);

  const NavigateToGithub = () => {
    navigate("https://github.com/ChathuraRubasingha");
  };
  return (
    <div
      className="project-wrapper"
      style={
        Theme.isDark
          ? { backgroundColor: Dark.backgroundPrimary, color: Dark.color }
          : { backgroundColor: Light.backgroundPrimary, color: Light.color }
      }
    >
      <div className="project-container">
        <div className="project-header" style={{ color: Dark.foreground }}>
          My Projects
        </div>
        <div className="project-card-wrapper">
          {CardDetails.map((item) => {
            return (
              <ProjectCard
                title={item.title}
                body={item.body}
                backgroundImage={item.backgroundImage}
                tech={item.tech}
              />
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://github.com/ChathuraRubasingha"
            style={
              Theme.isDark ? { color: Dark.color } : { color: Light.color }
            }
          >
            <div className="viewmoreprojets">
              View More{" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ padding: "0 0 0 10px" }}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
