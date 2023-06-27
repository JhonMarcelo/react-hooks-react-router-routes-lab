import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink exact to="/home" class="navbar">
        Home
      </NavLink>
      <NavLink to="/movies" class="navbar">
        Movies
      </NavLink>
      <NavLink to="/actors" class="navbar">
        Actors
      </NavLink>
      <NavLink to="/directors" class="navbar">
        Directors
      </NavLink>
    </div>
  );
}

export default NavBar;
