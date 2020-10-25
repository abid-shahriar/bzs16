import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = (props) => {
  const pathname = props.history.location.pathname;

  return (
    <nav className="navbar">
      <ul className="navbar__lists">
        <li className={pathname === "/" ? "active-nav" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={pathname === "/student-info" ? "active-nav" : ""}>
          <Link to="/student-info">Students-info</Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
