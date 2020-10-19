import React, { useContext } from "react";

import { StudentsInfoContext } from "../states/AllStudentsInfo";

const StudentCard = () => {
  const { fetchedData, setFetchedData, reset } = useContext(
    StudentsInfoContext
  );

  // console.log(fetchedData);

  // const sectionA = () => {

  // };

  // let allData;

  // if (fetchedData) {
  //   allData = [...fetchedData];
  // }

  // console.log(allData);

  const filterSections = (section) => {
    const sectionAdata = reset.filter((data) => data.section === section);
    setFetchedData(sectionAdata);
  };

  const allSections = () => {
    setFetchedData(reset);
  };

  return (
    <div className="main-container">
      <div className="buttons">
        <button onClick={() => allSections()}>All Sec.</button>
        <button onClick={() => filterSections("A")}>Sec: A</button>
        <button onClick={() => filterSections("B")}>Sec: B</button>
        <button onClick={() => filterSections("C")}>Sec: C</button>
        <button onClick={() => filterSections("D")}>Sec: D</button>
      </div>
      <div className="student-card-container">
        {fetchedData &&
          fetchedData
            .sort((a, b) => a.section > b.section)
            .map((data) => (
              <div className="student-card" key={data.Timestamp}>
                <div className="image">
                  {/* <img src={data.photo} loading="lazy" alt="student bzs" /> */}
                </div>
                <div className="short-info">
                  <h1>{data.Name.toLowerCase()}</h1>
                  <h2>Section: {data.section}</h2>
                  <h2>Class-10-Roll: {data.class10Roll}</h2>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default StudentCard;
