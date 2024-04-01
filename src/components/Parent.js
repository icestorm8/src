import React from "react";

export default function Parent(props) {
  return (
    <div className="text-danger border">
      <h1>parent</h1>
      {props.children}
    </div>
  );
}
