import React, { useState } from "react";
import "../Styles/NavSideBarCSS/NavSideBar.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

function NavSideBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <div className="navSidebarButton">
            <Link to="#" className="menu-bars2">
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <nav className={sidebar ? "nav-menu active2" : "nav-menu2"}>
                <ul className="nav-menu-items2" onClick={showSidebar}>
                    <li className="navbar-toggle2">
                        <Link to="#" className="menu-bars2">
                            <FaIcons.FaTimes className="menu-bars2__exit2" />
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
        </div>
    )
}

export default NavSideBar