import React, { useState } from "react";

export default function Navbarsample() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}></ul>
    </nav>
  );
}
