import React from "react";
import { NavLink } from "react-router-dom";

export default function Navlinks() {
  return (
    <div>
      <div className="navbarIcon">
        <p> image of apple on books</p>
      </div>
      <ul className="menu-links">
        <li>
          <NavLink exact to="/" className="navlink">
            main page...
          </NavLink>
        </li>
        <li>
          <NavLink exact to="#" className="navlink">
            menu item 2
          </NavLink>
        </li>
        <li>
          <NavLink exact to="#" className="navlink">
            menu item 3
          </NavLink>
        </li>
        <li>
          <NavLink exact to="#" className="navlink">
            menu item 4
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" className="navlink">
            Contact Me
          </NavLink>
        </li>
      </ul>
      this is the navlinks tha should show up on the right and not move...
    </div>
  );
}
