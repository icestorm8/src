import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="d-flex flex-row gap-2">
      <Link to={"/"} className="">
        Home
      </Link>
      <Link to={"/games"}>Games</Link>
    </header>
  );
}
