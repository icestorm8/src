import React, { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button
        className="btn btn-light text-dark border border-dark"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add One
      </button>
      <button
        className="btn btn-danger text-light"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
