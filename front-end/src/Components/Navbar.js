import "../Styles/nav.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navHolder">
      <div className="navHolder__logoHolder">
        <img className="navHolder__logoHolder__logo" src="https://via.placeholder.com/60"
          alt="icon" />
        <div className="navHolder__logoHolder__logoTitle">Scratch Paint</div>
      </div>
      <div className="navHolder__buttonHolder">
        <Link to ="/" className="navHolder__buttonHolder__buttons" >Home</Link>
        <Link to ="/paint" className="navHolder__buttonHolder__buttons">Paint</Link>
        <Link to ="/team" className="navHolder__buttonHolder__buttons" >Team</Link>
      </div>
    </div>
  );
}

export default Navbar;
