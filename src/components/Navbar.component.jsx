import React from "react";

const navItems = ["home", "student-info", "gallery", "blog"];

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__lists">
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
