import "./Navbar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Dropdown from "../Dropdown/Dropdown";

function Navbar() {
  const Apple = ["Iphone", "AirPods", "AppleWatch"];
  return (
    <nav className="Navbar">
      <div className="Navbar-Components-Container">
        <div className="Navbar-SocialMedia-Container">
          <div className="Navbar-SocialMedia">
            <a href="https://www.facebook.com">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com">
              <InstagramIcon />
            </a>
            <a href="https://www.x.com">
              <XIcon />
            </a>
          </div>
        </div>
        <div className="Navbar-Language-Container">
          <img
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg"
            alt="Turkey Flag"
          />
          <img
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
            alt="Great Britain Flag"
          />
          <img
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/MK.svg"
            alt="Macedonian Flag"
          />
          <img
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/AL.svg"
            alt="Albanian Flag"
          />
        </div>
        <div className="Navbar-Search-Container">
          <SearchIcon fontSize="medium" />
          <input
            type="text"
            placeholder="Search..."
            className="Navbar-Search"
          />
          <button className="Navbar-Search-Button">Search</button>
        </div>
      </div>
      <div className="Navbar-Container">
        <div className="Navbar-Title-Container">
          <h1 className="Navbar-Title">E-Commerce</h1>
        </div>
        <div className="Navbar-Dropdown-Container">
          <Dropdown name={"Apple"} menuitems={Apple} />{" "}
          <ExpandMoreIcon fontSize="small" />
          <Dropdown name={"Apple"} menuitems={Apple} />{" "}
          <ExpandMoreIcon fontSize="small" />
          <Dropdown name={"Apple"} menuitems={Apple} />{" "}
          <ExpandMoreIcon fontSize="small" />
        </div>
        <div className="Navbar-User-Container">
          <span>
            <FavoriteBorderIcon fontSize="medium" />
          </span>
          <span>
            <ShoppingCartIcon fontSize="medium" />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
