import React, {useState} from 'react';
import "../Styles/NavbarCSS/nav.css";
import logo from "../Images/favicon.svg";
import * as FaIcons from "react-icons/fa"
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="container flex nav">

      <div className="navHolder__logoHolder">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar}/> 
        </Link>
        <nav className={ sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <FaIcons.FaWindowClose/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
               return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li> 
               )
            })}
          </ul>
        </nav>  
        <img src={logo} className="navHolder__logoHolder__logo" alt="icon" />
        <h2 className="navHolder__logoHolder__logoTitle">Scratch Paint</h2>
      </div>
      <div className="navHolder__buttonHolder">
        <Link
          to="/"
          className="navHolder__buttonHolder__buttons navHolder__buttonHolder__buttons--highlight"
        >
          Home
        </Link>
        <Link to="/paint" className="navHolder__buttonHolder__buttons">
          Paint
        </Link>
        <Link to="/team" className="navHolder__buttonHolder__buttons">
          Team
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
