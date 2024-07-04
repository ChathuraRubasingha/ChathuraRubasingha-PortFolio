import React, { useContext, useState } from "react";
import "../style/Skills.css";
import { isDarkContext } from "../App";
import { Dark, Light } from "../Theme";
import ProgressBar from "../components/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import JS from "../assets/Icon/programming languages/javascript.svg";
import TS from "../assets/Icon/programming languages/typescript.svg";
import Java from "../assets/Icon/programming languages/java.svg";
import PHP from "../assets/Icon/programming languages/php.png";
import Python from "../assets/Icon/programming languages/python.svg";
import C from "../assets/Icon/programming languages/c.svg";
import Dart from "../assets/Icon/programming languages/dart.svg";
import ReactJS from "../assets/Icon/frameworks/react.svg";
import Redux from "../assets/Icon/frameworks/redux.svg";
import Angular from "../assets/Icon/frameworks/angular.svg";
import vueJs from "../assets/Icon/frameworks/vuejs.svg";
import SpringBoot from "../assets/Icon/frameworks/spring.svg";
import NodeJS from "../assets/Icon/frameworks/nodejs.svg";
import Boostrap from "../assets/Icon/frameworks/boostrap.svg";
import Android from "../assets/Icon/frameworks/android.svg";
import MySQL from "../assets/Icon/databases/mysql.svg";
import MongoDB from "../assets/Icon/databases/mongodb.svg";
import Oracle from "../assets/Icon/databases/oracle.svg";
import PostgreSQL from "../assets/Icon/databases/postgresql.svg";
import AS from "../assets/Icon/ides/android-studio.svg";
import Ij from "../assets/Icon/ides/intellij.svg";
import Pycharm from "../assets/Icon/ides/pycharm.svg";
import VS from "../assets/Icon/text editors/vscode.svg";
import CSS from "../assets/Icon/others/css.svg";
import Git from "../assets/Icon/others/git.svg";
import HTML from "../assets/Icon/others/html.svg";
import Json from "../assets/Icon/others/json.svg";
import Npm from "../assets/Icon/others/npm.svg";

const skills = [
  { src: JS, name: "JavaScript" },
  { src: TS, name: "TypeScript" },
  { src: Java, name: "Java" },
  { src: Python, name: "Python" },
  { src: PHP, name: "PHP" },
  { src: C, name: "C" },
  { src: Dart, name: "Dart" },
  { src: ReactJS, name: "ReactJS" },
  { src: Redux, name: "Redux" },
  { src: Angular, name: "Angular" },
  { src: vueJs, name: "VueJS" },
  { src: Boostrap, name: "Boostrap" },
  { src: SpringBoot, name: "SpringBoot" },
  { src: NodeJS, name: "NodeJS" },
  { src: Android, name: "Android" },
  { src: MySQL, name: "MySQL" },
  { src: MongoDB, name: "MongoDB" },
  { src: Oracle, name: "Oracle" },
  { src: PostgreSQL, name: "PostgreSQL" },
  { src: AS, name: "Android Studio" },
  { src: Ij, name: "Intellij" },
  { src: Pycharm, name: "Pycharm" },
  { src: VS, name: "Visual Studio" },
  { src: CSS, name: "CSS" },
  { src: Git, name: "Git" },
  { src: HTML, name: "HTML" },
  { src: Json, name: "Json" },
  { src: Npm, name: "npm" },
];

function Skills() {
  const Theme = useContext(isDarkContext);
  const [viewMore, setViewMore] = useState(false);

  const readmore = () => {
    setViewMore((prevState) => !prevState);
  };

  return (
    <div
      className={viewMore ? "skill-wrapper-view" : "skill-wrapper"}
      style={
        Theme.isDark
          ? { backgroundColor: Dark.backgroundPrimary, color: Dark.color }
          : { backgroundColor: Light.backgroundPrimary, color: Light.color }
      }
    >
      <div className="skill-container">
        <div className="skill-topic" style={{ color: Dark.foreground }}>
          My Skills
        </div>
        <div className="skill-inner-container">
          <div className="skill-left">
            <div className="skill-sub-header">Technical Skills</div>
            <ProgressBar title="JavaScript" presentage="86%" />
            <ProgressBar title="TypeScript" presentage="81%" />
            <ProgressBar title="ReactJS" presentage="79%" />
            <ProgressBar title="Redux" presentage="75%" />
            <ProgressBar title="CSS" presentage="90%" />
          </div>
          <div className="skill-right">
            <div className="skill-sub-header">Professional Skills</div>
            <ProgressBar title="Team Work" presentage="95%" />
            <ProgressBar title="Creativity" presentage="80%" />
            <ProgressBar title="Project Management" presentage="79%" />
            <ProgressBar title="Communication" presentage="75%" />
            <ProgressBar title="Problem Solving" presentage="82%" />
          </div>
        </div>
        {viewMore && (
          <div>
            <div className="view-more-wrapper">
              <div className="view-header">Skills:</div>
              <div className="view-body">
                {skills.map((skill, index) => (
                  <div className="view-item" key={index}>
                    <img src={skill.src} alt={skill.name} />
                    <div className="item-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="about-button"
            style={{ border: "2px solid #3ecff0" }}
            onClick={readmore}
          >
            View more
            {viewMore ? (
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

export default Skills;
