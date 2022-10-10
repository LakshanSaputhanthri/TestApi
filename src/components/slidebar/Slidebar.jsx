import React from "react";
import "./Slidebar.css";
import Slidebaritems from "./Slidebaritem";

const Slidebar = ({ theme }) => {
  return (
    <div className={`slidebar-${theme}`}>
      {Slidebaritems.map((item) => (
        <div className="item" key={item.id}>
          <div>{item.icon}</div>
          <div>{item.title}</div>
        </div>
      ))}
      ;
    </div>
  );
};

export default Slidebar;
