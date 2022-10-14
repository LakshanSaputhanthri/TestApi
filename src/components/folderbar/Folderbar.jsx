import React, { useState } from "react";
import useFolderData from "../../stores/folderDataStore";
import useFolderstore from "../../stores/folderStore";
import FolderBarAction from "../folderbaraction/FolderBarAction";
import "./Folderbar.css";

function Folderbar() {
  const fname = useFolderData((state) => state.folderName);
  const [folderName, setFolderName] = useState(fname);
  const addfolderName = useFolderData((state) => state.addfolderName);
  addfolderName(folderName);
  /******************************************* */
  const folderArray = useFolderstore((state) => state.folderArray);
  console.log(folderArray);
  const addFolderArray = useFolderstore((state) => state.addFolderArray);
  function addfolder() {
    addFolderArray(folderArray);
  }
  /******************************************* */
  const [checked, setChecked] = useState(false);

  return (
    <div className="folderbar-cointainer">
      <FolderBarAction addfolder={addfolder} />
      {folderArray.map((item, index) => (
        <div className="folder" key={index}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <input
            type="text"
            className="folder-item"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
          <i className="fa fa-save"></i>
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash"></i>
        </div>
      ))}
    </div>
  );
}

export default Folderbar;
