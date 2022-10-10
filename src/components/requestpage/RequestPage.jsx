import React, { useReducer } from "react";
import "./RequestPage.css";
import SaveRequest from "../saveRequest/SaveRequest";
import RequestUrlBar from "../requestUrlBarr/RequestUrlBar";
import RequestTitleBar from "../requestTitle/RequestTitleBar";

import RequestHeaders from "../requestheaders/RequestHeaders";

import RequestBody from "../requestbody/RequestBody";

const RequestPage = () => {
  function reducer(state, { type }) {
    switch (type) {
      
      case "headers":
        return <RequestHeaders />;
      case "body":
        return <RequestBody />;
      default:
        return "";
    }
  }
  const [state, dispatch] = useReducer(reducer, "");
 

  return (
    <div className="request-container">
      <SaveRequest />
      <RequestUrlBar />
      
      <RequestTitleBar dispatch={dispatch} />

      {state}
    </div>
  );
};

export default RequestPage;
