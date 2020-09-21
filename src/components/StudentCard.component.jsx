import React, { useContext } from "react";

import { StudentsInfoContext } from "../states/AllStudentsInfo";

const StudentCard = () => {
  const fetchedData = useContext(StudentsInfoContext);

  console.log(fetchedData);
  return (
    <div className="student-card-container">
      {/* <div className="stdent-card">
        <h1>Name: Abdul Malek</h1>
        <h2>Section: D</h2>
        <h2>classRoll: 20</h2>
      </div> */}

      {fetchedData &&
        fetchedData
          .sort((a, b) => a.section > b.section)
          .map((data) => (
            <div className="stdent-card" key={data.Timestamp}>
              <h1>Name: {data.Name.toLowerCase()}</h1>
              <h2>Section: {data.section}</h2>
              <h2>Class-10-Roll: {data.class10Roll}</h2>
            </div>
          ))}
    </div>
  );
};

export default StudentCard;
