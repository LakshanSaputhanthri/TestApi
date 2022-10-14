import React from "react";
import "./SaveRequest.css";
import useUrlStore from "../../stores/store";


const SaveRequest = () => {
  const requestName = useUrlStore((state) => state.method);

  /*********************************************** */
  const savefolder = () => {};

  return (
    <div className="saverequest-container">
      <div className="serverrequest-left">{requestName} Request</div>
      <div className="serverrequest-right">
        <div className="serverrequest-btn">
          <div className="serverrequest-btn-save" onClick={savefolder}>
            <i className="far fa-file-alt"></i>Save
          </div>
          <div className="serverrequest-btn-down">
            <i className="fas fa-sort-down"></i>
          </div>
        </div>
        <div className="serverrequest-btn">
          <div className="serverrequest-btn-right-left">
            <i className="fas fa-pencil-alt"></i>
          </div>
          <div className="serverrequest-btn-right-right">
            <i className="far fa-comment-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveRequest;
