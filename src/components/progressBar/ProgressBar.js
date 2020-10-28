import React from "react";
import "./Styles.scss"

const ProgressBar = ({percentage}) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar--filler" style={{width: `${percentage}%`}} />
    </div>
  )
};

export default ProgressBar;
