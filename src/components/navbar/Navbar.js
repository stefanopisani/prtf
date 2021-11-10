import "./Navbar.scss";
import {Link} from "react-scroll";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="top-left">
        <Link className="logo" to="nav-start" smooth={true} duration={1000}>StefanoP.</Link>
        </div>
        <div className="hbg-right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
