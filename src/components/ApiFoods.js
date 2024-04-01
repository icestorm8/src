import React, { useEffect, useState } from "react";

export default function ApiFoods() {
  // http://fs1.co.il/bus/foods.php
  const [foods_arr, setFoodsArr] = useState([]);
  useEffect(() => {
    doApi();
  }, []);

  // using fetch
  const doApi = async () => {
    try {
      const url = "http://fs1.co.il/bus/foods.php";
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setFoodsArr(data);
    } catch (err) {
      console.log(err);
      alert(
        "there was a problem, please come bach later or try refreshing the page"
      );
    }
  };
  return (
    <div>
      <h1>food menu: </h1>
      <ul>
        {foods_arr.map((item, index) => (
          <li key={item._id.$oid}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
