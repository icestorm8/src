import React, { useEffect, useState } from "react";

export default function ApiHw() {
  const [vip_ar, setVipAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    try {
      const url = "http://fs1.co.il/bus/vip.php";
      const res = await fetch(url);
      const data = await res.json();
      console.table(data);
      setVipAr(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <h1>List of Vips:</h1>
      <div className="row">
        {vip_ar.map((item) => (
          <div className="col-md-6 p-2 border" key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              className="float-start w-25 px-2"
            />
            <div>
              <h2>{item.name}</h2>
              <h3>{item.birth_year}</h3>
              <h3>{item.worth}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
