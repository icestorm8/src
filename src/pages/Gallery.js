import React, { useState } from "react";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const pics_Arr = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];
  return (
    <div className="container text-center">
      <img src={"/images/" + pics_Arr[index]} alt="gallery" className="col-4" />
      <div>
        <button
          className="btn btn-danger"
          onClick={() => {
            // nope
            // setIndex((index - 1) % pics_Arr.length);
            console.log(index);
          }}
        >
          Back
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            setIndex((index + 1) % pics_Arr.length);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
