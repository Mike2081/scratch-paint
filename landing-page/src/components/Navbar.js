import "../styles/Navbar/nav.css";

function Navbar() {
  return (
    <nav className="container row nav">
      <img
        src="https://via.placeholder.com/60"
        alt="icon"
        className="nav__logo"
      />
      <h3 className="nav__name">App Name</h3>
      <ul className="row nav__list">
        <li className="nav__item nav__item--highlight">
          <a href="/" className="nav__link nav__link--highlight">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#features" className="nav__link">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a href="#developers" className="nav__link">
            Developers
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
