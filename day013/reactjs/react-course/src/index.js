import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Counter = () => {
  const [msg, setMsg] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <div>
      <input onChange={(e) => setMsg(e.target.value)} />
      <button
        onClick={() => {
          alert(`El mensaje es: '${msg}'`);
        }}
      >
        Save
      </button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
};

root.render(
  <>
    <Counter />
  </>
);
