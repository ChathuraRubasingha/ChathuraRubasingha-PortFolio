import React, { useContext } from "react";
import "../style/Card.css";
import { isDarkContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Dark, Light } from "../Theme";

function Card(props) {
  const Theme = useContext(isDarkContext);
  return (
    <div
      className="card-wrapper"
      style={
        Theme.isDark
          ? { backgroundColor: Dark.backgroundSecondary, color: Dark.color }
          : { backgroundColor: Light.backgroundSecondary, color: Light.color }
      }
    >
      <div className="card-date" style={{ color: Dark.foreground }}>
        <FontAwesomeIcon icon={faCalendar} style={{ paddingRight: "10px" }} />
        {props.date}
      </div>
      <div className="card-topic">{props.title}</div>
      <div className="card-body">{props.body}</div>
    </div>
  );
}

export default Card;
