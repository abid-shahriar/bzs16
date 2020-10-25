import React, { useContext } from "react";
import { Link } from "react-router-dom";
import bzsLogo from "../assets/img/bzs-logo.png";

import { StudentsInfoContext } from "../states/AllStudentsInfo";

const Home = () => {
  const { setNavState } = useContext(StudentsInfoContext);

  return (
    <>
      <div className="home">
        <img src={bzsLogo} alt="bzs logo" />
        <h3>
          Hellu there, Welcome to the not so official website of Bogura Zilla
          School Batch 2016, also known as Fermion’16.
        </h3>

        <h4>
          It is just a regular website where you can find almost everyone’s info
          of our batch. Well, I said almost because as we all know that bzs has
          all kinds of students, including ghosts... As a result we do not know
          their info...yet..!!
        </h4>
        <div onClick={() => setNavState("student-info")}>
          <Link to="/student-info">View Students Info &rarr;</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
