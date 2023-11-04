import React from "react";
import { NavLink , BrowserRouter} from "react-router-dom";

function NavBar() {
  return (
    <div>
      <BrowserRouter>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      </BrowserRouter>
    </div>
  );
}

export default NavBar;