import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ navLinks }) => {
  return (
    <nav className="main-nav">
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.route}
              className={({ isActive }) => (isActive ? "active" : "")}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
