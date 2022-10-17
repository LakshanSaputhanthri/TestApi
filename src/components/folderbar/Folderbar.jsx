import React, { useState } from "react";

import useFolderstore from "../../stores/folderStore";
import FolderBarAction from "../folderbaraction/FolderBarAction";
import "./Folderbar.css";

function Folderbar() {
  /******************************************* */
  const folderArray = useFolderstore((state) => state.folderArray);
  useFolderstore((state) => state.folderName);
  useFolderstore((state) => state.checked);
  const addFolderName = useFolderstore((state) => state.addFolderName);
  const addFolderArray = useFolderstore((state) => state.addFolderArray);
  const removeFolder = useFolderstore((state) => state.removeFolder);
  const setCheckBox = useFolderstore((state) => state.setCheckBox);
  function addfolder() {
    // console.log(folderArray.length);
    addFolderArray({
      foldername: "NewFolder",
      url: "",
      index: folderArray.length,
      folderStoreData: [],
      checked: false,
    });
  }
  function deleteFolder(e) {
    let idd = e.target.id;
    removeFolder(parseInt(idd));
  }
  function changeFolderName(e) {
    let indexNum = e.target.id;
    let newFolderName = e.target.value;
    addFolderName(parseInt(indexNum), newFolderName);
  }
  /******************************************* */
  function setcheckboxvalue(e) {
    let val = e.target.checked;
    let indexNum = e.target.id;
    setCheckBox(indexNum, val);
  }

  return (
    <div className="folderbar-cointainer">
      <FolderBarAction addfolder={addfolder} />
      {folderArray.map((item, index) => (
        <div className="folder" key={index}>
          <input
            type="checkbox"
            id={index}
            checked={item.checked}
            onChange={(e) => setcheckboxvalue(e)}
          />
          <input
            type="text"
            id={index}
            className="folder-item"
            value={item.foldername}
            onChange={(e) => changeFolderName(e)}
          />

          <i
            className="fas fa-trash"
            id={item.index}
            onClick={(e) => deleteFolder(e)}
          ></i>
        </div>
      ))}
    </div>
  );
}

export default Folderbar;
