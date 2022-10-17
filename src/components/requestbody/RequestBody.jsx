import React, { useState } from "react";
import "./RequestBody.css";
import useUrlStore from "../../stores/store";
import useBodyStore from "../../stores/bodyStore";

const RequestBody = () => {
  const [bodytext, setBodytext] = useState();
  const data = useUrlStore((state) => state.data);
  const stat = useUrlStore((state) => state.stat);
  const addbodydata = useBodyStore((state) => state.addbodydata);
  addbodydata(bodytext);

  let clz = `status-warn-circle status-${stat}`;
  return (
    <div>
      <div className="request-select">
        <div className="request-select-item">Json</div>
        <div className="request-select-item">Text</div>
        <div className="request-select-item">form-Dta</div>
      </div>

      <div className="request-body">
        <div className="body-left">
          <textarea
            className="text-area"
            onChange={(e) => setBodytext(e.target.value)}
          ></textarea>
        </div>
        <div className="body-right">
          <div>RESPONSE</div>
          <div className="status-bar">
            <div>Status</div>
            <div className={clz}></div>
            <div className={clz}></div>
            <div className={clz}></div>
          </div>
          <pre className="abc">{data}</pre>
        </div>
      </div>
    </div>
  );
};

export default RequestBody;
