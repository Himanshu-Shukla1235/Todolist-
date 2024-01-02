import React from "react";
import { useState } from "react";
const App = () => {
  const [tasklist, setnewtask] = useState([]);
  const [inputtask, newinputtask] = useState("");

  const itemEvent = (event) => {
    const { name, value } = event.target;
    newinputtask(value);
  };

  const Notifi = () => {
    setnewtask((oldvalue) => {
      return [...oldvalue, inputtask];
    });
  };

  const notifi = () => {};
  return (
    <>
      <div className="box">
        <br />
        <h1 style={{fontFamily:"sans-serif",fontWeight:50}}>Todo List</h1>
        <br />
        <div className="create">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              id="createin"
              name="addtask"
              type="text"
              placeholder=""
              onChange={itemEvent}
                // value={tasklist}
            ></input>
            <br />

            <button
              style={{
                
                fontSize: 50,
                marginLeft: 10,
                backgroundColor: "whitesmoke",
                cursor: "pointer",
              }}
              onClick={Notifi}
            >
              +
            </button>
          </div>
        </div>
        <br />
        <ol className="notification">
          {tasklist.map((value) => {
            return <li>{value}</li>;
          })}
        </ol>
      </div>
    </>
  );
};

export default App;
