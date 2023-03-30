import React from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import { Outlet } from "react-router-dom";

// Data
import navLinks from "./data/nav-links";

const App = () => {
  return (
    <div className="container">
      <Nav navLinks={navLinks} />
      <Search />
      <Outlet />
    </div>
  );
};

export default App;
