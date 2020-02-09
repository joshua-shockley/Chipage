import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import apple from '../images/element5-digital-OyCl7Y4y0Bk-unsplash.jpg';

export default function Navlinks() {
  const [today, setToday] = useState('');
  let date = '';
  useEffect(() => {
    const d = new Date();
    const n = d.toDateString();
    // console.log("today", n)
    return setToday(n);

  }, [])


  return (
    <div>
      <div className="navbarIcon">
        <img className="apple" src={apple} />
      </div>
      <div className="theDate">
        {today}
      </div>
      <ul className="menu-links">
        <li>
          <NavLink exact to="/" className="navlink">
            main page...
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/blog" className="navlink">
            blog
          </NavLink>
        </li>
        <li>
          <NavLink exact to="#" className="navlink">
            Other Links
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
