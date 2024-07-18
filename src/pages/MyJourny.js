import React, { useContext } from "react";
import "../style/MyJourny.css";
import { isDarkContext } from "../App";
import { Dark, Light } from "../Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";

function MyJourny() {
  const Theme = useContext(isDarkContext);
  return (
    <div
      className="journy-wrapper"
      style={
        Theme.isDark
          ? { backgroundColor: Dark.backgroundSecondary, color: Dark.color }
          : { backgroundColor: Light.backgroundSecondary, color: Light.color }
      }
    >
      <div className="j-container">
        <div className="j-header" style={{ color: Dark.foreground }}>
          My Journey
        </div>
        <div className="j-inner-container">
          <div className="j-left">
            <div className="j-sub-topic">Education</div>
            <div className="j-side-bar-left">
              <Card
                date="2020-2024"
                title="B.Sc.(Hons) Information Technology"
                body="I graduated from the Faculty of Information Technology at the University of Moratuwa, earning a GPA of 3.6."
              />
              <Card
                date="2016-2018"
                title="G.C.E Advance Level"
                body="I completed my Advanced Level studies at President's College Embilipitiya, achieving grades of AAB with a Z-score of 1.701."
              />
            </div>
          </div>
          <div className="j-right">
            <div className="j-sub-topic">Experience</div>
            <div className="j-side-bar-right">
            <Card
              date="2023/June-Current"
              title="Associate Software Engineer"
              body="I am currently working as a full-stack developer at Hathiya IT, specializing in React and Redux."
            />
            <Card
              date="2022/Dec-2023/June"
              title="Software Engineer Intern"
              body="I completed a six-month internship at Hathiya IT as a full-stack developer."
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyJourny;
