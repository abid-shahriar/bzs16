import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentsInfoContext } from "../states/AllStudentsInfo";

const Navbar = () => {
  const { NavState, setNavState } = useContext(StudentsInfoContext);

  return (
    <nav className="navbar">
      <ul className="navbar__lists">
        <li
          onClick={() => setNavState("home")}
          className={NavState === "home" ? "active-nav" : ""}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setNavState("student-info")}
          className={NavState === "student-info" ? "active-nav" : ""}
        >
          <Link to="/student-info">Students-info</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
