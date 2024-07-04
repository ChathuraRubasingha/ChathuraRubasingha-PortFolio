import React, { useContext } from "react";
import { Dark, Light } from "../Theme";
import { isDarkContext } from "../App";

function ProgressBar(props) {
  const Theme = useContext(isDarkContext);
  return (
    <div className="progress-container">
      <div
        className="progress-topics"
        style={Theme.isDark ? { color: Dark.color } : { color: Light.color }}
      >
        <div className="progress-topic">{props.title}</div>
        <div className="progress-presentage">{props.presentage}</div>
      </div>
      <div class="progress2 progress-moved">
        <div class="progress-bar2" style={{ width: props.presentage }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
