import React from "react";
import "../Styles/NavbarCSS/nav.css";
import logo from "../Images/favicon.svg";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";
function Navbar() {
  return (
    <div className="container flex nav">
      <SideBar />
      <div className="navHolder__logoHolder">
        <img src={logo} className="navHolder__logoHolder__logo" alt="icon" />
        <h2 className="navHolder__logoHolder__logoTitle">Scratch Paint</h2>
      </div>
      <div className="navHolder__buttonHolder">
        <NavLink
          className="navHolder__buttonHolder__buttons"
          exact
          activeclassname="active"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="navHolder__buttonHolder__buttons"
          exact
          activeclassname="active"
          to="/paint"
        >
          Paint
        </NavLink>
        <NavLink
          className="navHolder__buttonHolder__buttons"
          exact
          activeclassname="active"
          to="/team"
        >
          Team
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
