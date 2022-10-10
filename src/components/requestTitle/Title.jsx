import React from "react";

import "./RequestTitleBar.css";

const Title = ({ title, type,dispatch }) => {
  
  return (
    <div className="title" onClick={() => dispatch({ type: `${type}` })}>
      {title}
      
    </div>
  );
};

export default Title;
