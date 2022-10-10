import React from "react";
import "./FolderBarAction.css";

const FolderBarAction = ({addfolder}) => {
  
  return (
    <div className="folder-bar-action">
      <div className="create-folder">
        <i className="fas fa-plus" onClick={addfolder}></i>
      </div>
      <div className="search-folder">
        <div className="search-folder-icon">
          <i className="fas fa-search"></i>
        </div>
        <input type="text" className="input-folder-name" />
      </div>
      <div className="sort-folder">
        <i className="fas fa-sort-amount-down"></i>
      </div>
    </div>
  );
};

export default FolderBarAction;
