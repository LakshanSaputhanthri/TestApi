import React from "react";
import "./MethodDropDown.css";
import useUrlStore from "../../store";

const MethodDropDownMenu = ({ visible, setMethod }) => {
  const addMethod = useUrlStore((state) => state.addMethod);
  const addM = (m) => {
    addMethod(m);
  };
  const methods = ["GET", "POST", "PUT", "DELETE"];
  return (
    <div
      className={`drop-down-container ${
        visible ? "visible-true" : "visible-false"
      }`}
    >
      {methods.map((m) => (
        <div
          className="drop-down-item"
          value="m"
          key={m}
          onClick={() => addM(m)}
        >
          {m}
          <i className="fas fa-arrow-right"></i>
        </div>
      ))}
    </div>
  );
};

export default MethodDropDownMenu;
