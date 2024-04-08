import React from "react";
import { useParams } from "react-router-dom";
export default function Shop() {
  const cat = useParams();
  return (
    <div className="container">
      <h2>Shop: {cat["catname"]}</h2>
    </div>
  );
}
