import { Link } from "react-router-dom";
import homeicone from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";

const Header = () => {
  return (
    <nav className="Header">
      <Link to="./">
        <img src={homeicone} alt="homeicone" />
      </Link>
    </nav>
  );
};

export default Header;
