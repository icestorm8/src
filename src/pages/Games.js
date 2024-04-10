import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
export default function Games() {
  const [games_ar, setGames_Ar] = useState([]);
  const [query] = useSearchParams();
  const [filterdGames_ar, setFilteredGames_ar] = useState([]);
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
      setFilteredGames_ar(data);
    } catch (err) {
      console.error(err);
    }
  };

  // currently works only for year search
  useEffect(() => {
    if (query.get("year")) {
      // if there is a year query (when query search changes):
      let year = query.get("year");
      console.log(year);
      setFilteredGames_ar(
        games_ar.filter((game) => {
          return game.Year == year;
        })
      );
    } else {
      setFilteredGames_ar(games_ar);
    }
  }, [query]);

  return (
    <div className="">
      {/* ?year= */}
      <h1>Games</h1>
      <SearchBar />
      {query.get("year") && <h2>Year: {query.get("year")} </h2>}
      {filterdGames_ar.length > 0 ? (
        <div className="d-flex align-content-stretch justify-content-center flex-wrap gap-2 p-3">
          {filterdGames_ar.map((game) => (
            <GameCard game={game} key={game.Game + game.Year} />
          ))}
        </div>
      ) : (
        <h1>no games were found</h1>
      )}
    </div>
  );
}
