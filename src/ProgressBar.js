// ProgressBar.js
import React from "react";
import "./css/ProgressBar.css";


const ProgressBar = ({ percentage }) => {
  return (
    <div className="languages-progress-bg">
      <div
        className="languages-progress-fill"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
