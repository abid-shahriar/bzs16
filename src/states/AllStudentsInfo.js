import React, { createContext, useEffect, useState } from "react";

export const StudentsInfoContext = createContext();

const AllStudentsInfo = (props) => {
  const [fetchedData, setFetchedData] = useState();
  const [reset, setReset] = useState();
  const [SearchInput, setSearchInput] = useState("");
  const [SingleStudentInfo, setSingleStudentInfo] = useState();
  const [ModalState, setModalState] = useState(false);

  useEffect(() => {
    fetch(
      "https://abid-shahriar.github.io/JSON-files/data/bzs-16-student-info.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
        setReset(data);
      });
  }, []);

  return (
    <StudentsInfoContext.Provider
      value={{
        fetchedData,
        setFetchedData,
        reset,
        SearchInput,
        setSearchInput,
        setSingleStudentInfo,
        SingleStudentInfo,
        setModalState,
        ModalState,
      }}
    >
      {props.children}
    </StudentsInfoContext.Provider>
  );
};

export default AllStudentsInfo;
