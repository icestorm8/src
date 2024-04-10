import React from "react";

export default function GameCard(props) {
  return (
    <div className="card w-25 p-2">
      <a href={props.game.GameLink} target="_blank" rel="noreferrer">
        <h2>{props.game.Game}</h2>
      </a>
      <span>genre: {props.game.Genre}</span>
      <span>year: {props.game.Year}</span>
      <span>Platform: {props.game.Platform}</span>
    </div>
    // "Game": "The King of Fighters 2003",
    // "GameLink": "https://en.wikipedia.org/wiki/The_King_of_Fighters_2003",
    // "Genre": "Fighting",
    // "Year": 2005,
    // "Dev": "Eolith",
    // "DevLink": "https://en.wikipedia.org/wiki/Eolith",
    // "Publisher": "Eolith",
    // "PublisherLink": "https://en.wikipedia.org/wiki/Eolith",
    // "Platform": "the XBOX",
    // "PlatformLink": "https://en.wikipedia.org/wiki/Xbox_(console)"
  );
}
