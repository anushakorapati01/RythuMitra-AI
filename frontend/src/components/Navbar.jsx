import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import useTranslation from "../hooks/useTranslation";

function Navbar() {
  const text = useTranslation();

  return (
    <nav className="navbar">

      <div className="logo">
        🌾 RythuMitra AI
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">{text.navbar.home}</Link>
        </li>

        <li>
          <Link to="/about">{text.navbar.about}</Link>
        </li>

        <li>
          <Link to="/services">{text.navbar.services}</Link>
        </li>

        <li>
          <Link to="/contact">{text.navbar.contact}</Link>
        </li>

        <li>
          <Link to="/login">{text.navbar.login}</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;