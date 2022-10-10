import React from "react";

import RequestPage from "../requestpage/RequestPage";

import "./Main.css";

const Main = ({ theme }) => {
  return (
    <div className={`main-${theme}`}>
      <RequestPage />
    </div>
  );
};

export default Main;
