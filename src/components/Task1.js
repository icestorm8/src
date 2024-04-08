import React from "react";
import { useState } from "react";

const colors = ["black", "red", "orange", "yellow", "green"];

export default function Task1() {
  const [number, setNumber] = useState(0);
  const add = () => {
    if (number === 4) {
      setNumber(0);
      return;
    }
    setNumber(number + 1);
  };
  const remove = () => {
    if (number > 0) {
      setNumber(number - 1);
      return;
    }
  };

  return (
    <div className="d-flex gap-3 flex-column text-center">
      <h2>Task 1</h2>
      <h2 style={{ color: colors[number] }}>{number}</h2>
      <div className="row gap-2">
        <button onClick={add} className="btn btn-success">
          +
        </button>
        <button onClick={remove} className="btn btn-danger">
          -
        </button>
      </div>
    </div>
  );
}
