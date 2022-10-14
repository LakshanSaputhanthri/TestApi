import React from "react";

import RequestPage from "../requestpage/RequestPage";
import Folderbar from "../folderbar/Folderbar";

import "./Main.css";

const Main = ({ theme }) => {
  return (
    <div className={`main-${theme}`}>
      <Folderbar/>
      <RequestPage />
    </div>
  );
};

export default Main;
