import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
export default function Games() {
  const [games_ar, setGames_Ar] = useState([]);
  const [query] = useSearchParams();

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    try {
      const url = "http://fs1.co.il/bus/xbox1.php";
      const res = await fetch(url);
      const data = await res.json();
      console.table(data);
      setGames_Ar(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // filter here, maybe add option to quit search
  }, [query]);

  return (
    <div>
      {/* ?search= */}
      <SearchBar />
      <h2>Query: {query.get("year")} </h2>
      {games_ar.length > 0 ? (
        <div className="d-flex align-content-stretch flex-wrap gap-2">
          {games_ar.map((game) => (
            <GameCard game={game} key={game.name + game.year} />
          ))}
        </div>
      ) : (
        <h1>no games were found</h1>
      )}
    </div>
  );
}
