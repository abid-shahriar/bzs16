import React, { useContext } from "react";
import { useEffect } from "react";
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
    SelectedSection,
    setSelectedSection,
    setSelectedBloodGroup,
    SelectedBloodGroup,
  } = useContext(StudentsInfoContext);

  const filterSections = (section) => {
    const sectionAdata = reset.filter((data) => data.section === section);
    setFetchedData(sectionAdata);
    setSearchInput("");
    setSelectedBloodGroup("");
  };

  const allSections = () => {
    setFetchedData(reset);
    setSearchInput("");
    setSelectedBloodGroup("");
  };

  const handleSearchInput = (input) => {
    if (!input) {
      return;
    }
    const filteredData = reset.filter((data) => {
      return data.Name.toLowerCase().includes(SearchInput.toLowerCase());
    });

    setFetchedData(filteredData);
    setSelectedSection("all");
    setSelectedBloodGroup("");
  };

  const handleSelect = (state) => {
    if (state === "") {
      setFetchedData(reset);
    } else {
      const filteredData = reset.filter(
        (data) => data.bloodGroup.toUpperCase() === state
      );

      setFetchedData(filteredData);
    }
  };

  useEffect(() => {
    handleSelect(SelectedBloodGroup);
    handleSearchInput(SearchInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SelectedBloodGroup, SearchInput]);

  return (
    <div className="main-container">
      <div className="img">
        <img src={bzsLogo} alt="bzs logo" />
      </div>

      <div className="buttons">
        <h5>Sections:</h5>
        <button
          className={SelectedSection === "all" ? "button-bg" : ""}
          onClick={() => {
            allSections();
            setSelectedSection("all");
          }}
        >
          All
        </button>
        <button
          className={SelectedSection === "a" ? "button-bg" : ""}
          onClick={() => {
            filterSections("A");
            setSelectedSection("a");
          }}
        >
          A
        </button>
        <button
          className={SelectedSection === "b" ? "button-bg" : ""}
          onClick={() => {
            filterSections("B");
            setSelectedSection("b");
          }}
        >
          B
        </button>
        <button
          className={SelectedSection === "c" ? "button-bg" : ""}
          onClick={() => {
            filterSections("C");
            setSelectedSection("c");
          }}
        >
          C
        </button>
        <button
          className={SelectedSection === "d" ? "button-bg" : ""}
          onClick={() => {
            filterSections("D");
            setSelectedSection("d");
          }}
        >
          D
        </button>
      </div>
      <div className="search">
        <label htmlFor="search">Search</label>
        <input
          name="search"
          type="text"
          placeholder="search by name"
          onChange={(e) => setSearchInput(e.target.value)}
          value={SearchInput}
        />
      </div>

      <div className="search-by-blood">
        <select
          value={SelectedBloodGroup}
          onChange={(e) => setSelectedBloodGroup(e.target.value)}
        >
          <option value="" disabled hidden>
            Search by Bloog-group
          </option>
          <option value="">All</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>
      <div className="student-card-container">
        {fetchedData &&
          fetchedData.map((data) => (
            <div className="student-card" key={data.Name}>
              <div className="image">
                <img
                  src={bzsLogo}
                  loading="lazy"
                  alt="student bzs"
                  height="100px"
                  width="100px"
                />
              </div>
              <div className="short-info">
                <h1>{data.Name.toLowerCase()}</h1>
                <h2>Section: {data.section}</h2>
                <h2>Class-10-Roll: {data.class10Roll}</h2>
                <h2>Blood-Group: {data.bloodGroup}</h2>
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
