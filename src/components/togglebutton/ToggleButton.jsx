import React from "react";
import "./ToggleButton.css";

const ToggleButton = ({ onToggle, theme }) => {
  return (
    <div className={`btn-toggle-${theme}`} onClick={onToggle}>
      <div className={`toggle-circle-${theme}`}>
        <div className={`md-circle-${theme}`}></div>
      </div>
    </div>
  );
};

export default ToggleButton;
