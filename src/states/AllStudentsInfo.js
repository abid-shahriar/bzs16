import React, { createContext, useEffect, useState } from "react";

export const StudentsInfoContext = createContext();

const AllStudentsInfo = (props) => {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    fetch(
      "https://abid-shahriar.github.io/JSON-files/data/bzs-16-student-info.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
      });
  }, []);

  return (
    <StudentsInfoContext.Provider value={fetchedData}>
      {props.children}
    </StudentsInfoContext.Provider>
  );
};

export default AllStudentsInfo;
