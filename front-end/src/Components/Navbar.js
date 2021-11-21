import "../Styles/NavbarCSS/nav.css";
import logo from "../Images/favicon.svg";
// import mobileLogo from "../Images/scratch-paint.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container flex nav">
      {/* START Please help me with this for navigation */}
      {/* <button className="nav__button" aria-label="open navigation">
        <span className="nav__hamburger"></span>
      </button>
      <img src={mobileLogo} alt="logo" className="mobileLogo" /> */}
      {/* END */}

      <div className="navHolder__logoHolder">
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
