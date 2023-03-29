import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ navLinks }) => {
  return (
    <nav className="main-nav">
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.route}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
