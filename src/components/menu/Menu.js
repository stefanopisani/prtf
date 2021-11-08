import React from "react";
import "./Menu.scss";
import {Link} from "react-scroll";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (

    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
        <Link className="link-menu" to="about" smooth={true} duration={1000}>Who am I</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
        <Link className="link-menu" to="projects" smooth={true} duration={1000}>Projects</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
        <Link className="link-menu" to="contacts" smooth={true} duration={1000}>Contacts</Link>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contacts">Contacts</a>
        </li> */}
      </ul>
    </div>

  );
}
