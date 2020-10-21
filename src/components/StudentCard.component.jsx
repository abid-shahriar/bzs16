import React, { useContext } from "react";
import bzsLogo from "../assets/img/bzs-logo.png";
import { StudentsInfoContext } from "../states/AllStudentsInfo";
import DetailedInfo from "./DetailedInfo";

const StudentCard = () => {
  const {
    fetchedData,
    setFetchedData,
    reset,
    setSearchInput,
    SearchInput,
    setSingleStudentInfo,
    setModalState,
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
          fetchedData.map((data) => (
            <div className="student-card" key={data.Timestamp}>
              <div className="image">
                <img src={bzsLogo} loading="lazy" alt="student bzs" />
              </div>
              <div className="short-info">
                <h1>{data.Name.toLowerCase()}</h1>
                <h2>Section: {data.section}</h2>
                <h2>Class-10-Roll: {data.class10Roll}</h2>
              </div>
              <div className="more-info-btn">
                <button
                  onClick={() => {
                    setSingleStudentInfo(data);
                    setModalState(true);
                  }}
                >
                  Detailed Info &rarr;
                </button>
              </div>
            </div>
          ))}
      </div>
      <DetailedInfo />
    </div>
  );
};

export default StudentCard;
