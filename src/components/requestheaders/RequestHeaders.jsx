import React, { useState } from "react";
import "./RequestHeaders.css";

const RequestHeaders = () => {
  const [head, setHead] = useState([]);
  function addHead() {
    console.log(head);

    setHead(() => [...head, { id: head.length }]);
  }
  const removeHead = (id) => () => {
    console.log(id, id);
    setHead((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Key</td>
            <td>Value</td>
          </tr>
        </thead>
        <tbody>
          {head.map((item, index) => (
            <tr key={index} id={item.id}>
              <td>
                <input type="text" placeholder="KEY" />
              </td>
              <td>
                <input type="text" placeholder="Value" />
              </td>
              <td>
                <i
                  className="fas fa-trash trash"
                  key={item.id}
                  onClick={removeHead(item.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-btn" onClick={addHead}>
        Add
      </button>
    </div>
  );
};

export default RequestHeaders;
