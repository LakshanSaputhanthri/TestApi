import React from "react";
import "./RequestTitleBar.css";
import ReqestTitle from "./RequestTitleData";
import Title from "./Title";

const RequestTitleBar = ({ dispatch }) => {
  return (
    <div className="request-title-bar-container">
      {ReqestTitle.map((title) => (
        <Title
          title={`${title.title}`}
          type={title.type}
          dispatch={dispatch}
          key={title.id}
        />
      ))}
    </div>
  );
};

export default RequestTitleBar;
