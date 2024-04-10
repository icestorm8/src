import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="d-flex flex-row gap-1 justify-content-center mb-2">
      <Link to={"/"} className="p-3 bg-primary text-decoration-none text-light">
        Home
      </Link>
      <Link
        to={"/games"}
        className="p-3 bg-primary text-decoration-none text-light"
      >
        Games
      </Link>
    </header>
  );
}
