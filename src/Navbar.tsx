import { Link, NavLink } from "react-router-dom";
import { useState, useContext, createContext } from "react";
import "./NavbarLayout.css";
import { ContextNumber } from "./Pages/BiscuitClicker";

function Navbar() {
  const biscuitNumber = useContext(ContextNumber);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="title-navbar">
          Home
        </Link>
        <ul>
          <li>
            <NavLink to="/BiscuitClicker">BiscuitClicker</NavLink>
          </li>
          <li>
            <NavLink to="TemperatureChecker">TemperatureChecker</NavLink>
          </li>
          <a className="no-hover">Biscuit Number: {biscuitNumber}</a>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
