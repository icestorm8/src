import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setQuery(e.currentTarget.value);
        }}
      />
      <Link to={`/games?year=${query}`} className="btn btn-primary">
        Search
      </Link>
    </div>
  );
}
