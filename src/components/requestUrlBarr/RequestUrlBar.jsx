import React, { useState } from "react";
import MethodDropDownMenu from "../methodDropDown/MethodDropDownMenu";
import "./RequestUrlBar.css";
import useUrlStore from "../../store";
import axios from "axios";
import useBodyStore from "../../bodyStore";

const RequestUrlBar = () => {
  const [visible, setVisible] = useState(false);
  //********************************************************/
  const [text, setText] = useState("");
  const addUrl = useUrlStore((state) => state.addUrl);
  const adddata = useUrlStore((state) => state.adddata);
  const addstat = useUrlStore((state) => state.addstat);
  const bodydata = useBodyStore((state) => state.bodydata);
  addUrl(text);
  async function sendreqest() {
    try {
      if (method === "GET" && text !== "") {
        const response = await axios.get(`${url}`);
        if (response.status === 200) {
          adddata(JSON.stringify(response.data,null,2));
          addstat("good");
        }
      } else if (method === "POST") {
        const response = await axios.post(`${url}`, bodydata); 
          adddata(JSON.stringify(response.data));
          addstat("good"); 
      } else if (method === "PUT") {
        const response = await axios.put(`${url}`, bodydata); 
          adddata(JSON.stringify(response.data));
          addstat("good");
      } else if (method === "DELETE") {
        const response = await axios.delete(`${url}`, bodydata); 
          adddata(JSON.stringify(response.data));
          addstat("good");
      } 
    } catch (err) {
      adddata("page not found");
      addstat("bad");
    }
  }
  const url = useUrlStore((state) => state.url);
  const method = useUrlStore((state) => state.method);
  return (
    <div className="request-url-bar-container">
      <div className="left-url-bar">
        <div className="method">
          <div className="method-name">
            <div className="select-method">{method}</div>
            <MethodDropDownMenu visible={visible} />
          </div>
          <div
            className="up-down-icon"
            onClick={() =>
              setVisible(
                !visible
              )
            }
          >
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
        <input
          required
          className="input-url"
          placeholder="Enter URL here "
          type="text"
          id="link-url"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="right-url-bar">
        <button type="button" className="save-btn" onClick={sendreqest}>
          Send
        </button>
        <div className="down-btn">
          <i className="fas fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
};

export default RequestUrlBar;
