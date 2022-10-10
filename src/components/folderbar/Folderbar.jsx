import React, { useState } from "react";
import useFolderstore from "../../folderStore";
import FolderBarAction from "../folderbaraction/FolderBarAction";
import "./Folderbar.css";

function Folderbar() {
  const fname = useFolderstore((state) => state.foldername);
  const [folderName, setFolderName] = useState(fname);
  /******************************************* */

  const [folder, setFolder] = useState([]);
  function addfolder() {
    setFolder(() => [...folder, {}]);
  }

  return (
    <div className="folderbar-cointainer">
      <FolderBarAction addfolder={addfolder} />
      {folder.map((fd, index) => (
        <div className="folder" key={index}>
          <input
            type="text"
            className="folder-item"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
          <i className="fas fa-trash"></i>
        </div>
      ))}
    </div>
  );
}

export default Folderbar;
