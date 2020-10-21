import React, { useContext } from "react";

import { StudentsInfoContext } from "../states/AllStudentsInfo";

const StudentCard = () => {
  const {
    fetchedData,
    setFetchedData,
    reset,
    setSearchInput,
    SearchInput,
  } = useContext(StudentsInfoContext);

  const filterSections = (section) => {
    const sectionAdata = reset.filter((data) => data.section === section);
    setFetchedData(sectionAdata);
    setSearchInput("");
  };

  const allSections = () => {
    setFetchedData(reset);
    setSearchInput("");
  };

  const handleSearchInput = (e) => {
    let inputValue = e.target.value;
    setSearchInput(inputValue);

    const filteredData = reset.filter((data) => {
      console.log(inputValue);
      return data.Name.toLowerCase().includes(SearchInput.toLowerCase());
    });

    setFetchedData(filteredData);
  };

  return (
    <div className="main-container">
      <div className="buttons">
        <h5>Sections:</h5>
        <button onClick={() => allSections()}>All</button>
        <button onClick={() => filterSections("A")}>A</button>
        <button onClick={() => filterSections("B")}>B</button>
        <button onClick={() => filterSections("C")}>C</button>
        <button onClick={() => filterSections("D")}>D</button>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="search by name"
          onChange={handleSearchInput}
          value={SearchInput}
        />
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
