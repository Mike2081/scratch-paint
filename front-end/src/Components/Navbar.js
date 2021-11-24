import React, { useState } from "react";
import "../Styles/NavbarCSS/nav.css";
import logo from "../Images/favicon.svg";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div className="container flex nav">
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <FaIcons.FaTimes className="menu-bars__exit" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

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
