import React from "react";
import { Link } from "react-router-dom";

// const navItems = ["home", "student-info", "gallery", "blog"];

const navItems = [
  {
    name: "home",
    to: "/",
  },
  {
    name: "student-info",
    to: "/student-info",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__lists">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
