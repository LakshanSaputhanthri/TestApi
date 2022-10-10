import React from "react";
import "./TitleBar.css";

const TitleBar = () => {
  return (
    <div className="title-bar-container">
      <div className="left-title-bar">
        <div className="title-bar-left">
          <div>My workspace</div>
          <div className="title-bar-left-right">
            <div className="title-left-btn">New</div>
            <div className="title-left-btn">Import</div>
          </div>
        </div>
      </div>

      <div className="title-bar-right">
        <div className="title-bar-right-left">
          <div className="title-bar-right-left-btn">
            <i className="fa fa-plus"></i>
          </div>
          <div className="title-bar-right-left-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
        <div className="title-bar-right-right">
          <div>No Environment</div>
          <i className="fas fa-sort-down"></i>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
