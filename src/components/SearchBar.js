import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const search = () => {
    if (query.length === 4) {
      if (!isNaN(parseInt(query))) {
        navigate(`/games?year=${query}`);
      } else {
        alert("input isn't a year (not a number)");
      }
    } else {
      alert("input isn't a year (not the right length (should be 4 numbers))");
      setQuery("");
    }
  };

  useEffect(() => {
    if (query.length === 0) {
      navigate(`/games`);
    }
  }, [query]);

  return (
    <div className="container" style={{ width: "35%" }}>
      <div className="input-group ">
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setQuery(e.currentTarget.value);
          }}
        />
        {/* <Link to={`/games?year=${query}`} className="btn btn-primary">
        Search
      </Link> */}
        <button onClick={search} className="btn btn-primary ">
          Search Year
        </button>
      </div>
    </div>
  );
}
