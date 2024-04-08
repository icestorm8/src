import React, { useState } from "react";

const pictures = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg",
    alt: "tomato",
  },
  {
    src: "https://www.lewisginter.org/wp-content/uploads/2016/11/1-Luffa-BETH-MONROE.jpg",
    alt: "lufa plant",
  },
  {
    src: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/28/fresh-corn-on-the-cob-partially-shucked-on-dark-background.jpg.rend.hgtvcom.1280.1280.suffix/1687987003387.jpeg",
    alt: "corn",
  },
  {
    src: "https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg",
    alt: "chicken",
  },
];
export default function Task2() {
  const [index, setIndex] = useState(0);
  const back = () => {
    if (index === 0) {
      setIndex(3);
      return;
    }
    setIndex(index - 1);
  };
  const next = () => {
    if (index === 3) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  return (
    <div className="">
      <h2>Task2</h2>
      <img
        className="object-fit-cover border rounded w-100"
        src={pictures[index].src}
        alt={pictures[index].alt}
        width={300}
        height={600}
      ></img>
      <div className="d-flex justify-content-between">
        <button onClick={back} className="btn btn-danger col-4">
          Back
        </button>
        <button onClick={next} className="btn btn-info col-4">
          Next
        </button>
      </div>
    </div>
  );
}
