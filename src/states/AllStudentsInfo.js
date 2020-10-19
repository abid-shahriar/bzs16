import React, { createContext, useEffect, useState } from "react";

export const StudentsInfoContext = createContext();

const AllStudentsInfo = (props) => {
  const [fetchedData, setFetchedData] = useState();
  const [reset, setReset] = useState();

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
      value={{ fetchedData, setFetchedData, reset }}
    >
      {props.children}
    </StudentsInfoContext.Provider>
  );
};

export default AllStudentsInfo;
