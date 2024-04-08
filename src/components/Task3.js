import React, { useEffect, useState } from "react";
const url = "http://fs1.co.il/bus/vip.php";
export default function Task3() {
  const [fetched, setFetched] = useState(false);
  const [people_arr, setPeople_Arr] = useState([]);
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.table(data);
      setPeople_Arr(data);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setFetched(true);
  }, [people_arr]);
  return (
    <div>
      <h2>Task 3</h2>
      <h3>rich people:</h3>
      <div className="d-flex align-items-stretch flex-wrap gap-1">
        {{ fetched } &&
          people_arr.map((person, index) => (
            <div
              key={index + person.name}
              className="card"
              style={{ width: "300" }}
            >
              <img src={person.image} alt={person.name}></img>
              <h3>{person.name}</h3>
              <h4>worth: {person.worth}</h4>
              <h4>company: {person.source}</h4>
              <h4>age: {getAge(person.birth_year)}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}
