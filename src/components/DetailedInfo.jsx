import React, { useContext } from "react";
import { StudentsInfoContext } from "../states/AllStudentsInfo";

function DetailedInfo() {
  const { SingleStudentInfo, ModalState, setModalState } = useContext(
    StudentsInfoContext
  );

  const removeLoadingImg = (e) => {
    const parentElement = e.target.parentElement;
    if (parentElement.classList.contains("img-loading")) {
      parentElement.classList.remove("img-loading");
    }
  };

  return (
    <div className={ModalState ? "detailed-info show-hide" : "detailed-info"}>
      {SingleStudentInfo && (
        <div className="container">
          <div className="inner-container">
            <div
              className={ModalState ? "single-img img-loading" : "single-img"}
            >
              <img
                src={ModalState ? `${SingleStudentInfo.photo}` : ""}
                alt="bzs 16"
                onLoad={removeLoadingImg}
              />
            </div>
            <h1>{SingleStudentInfo.Name}</h1>
            <div className="details">
              <p>
                Section:<span>{SingleStudentInfo.section}</span>
              </p>
              <p>
                Class-10-Roll:<span>{SingleStudentInfo.class10Roll}</span>
              </p>
              <p>
                Phone:<span>{SingleStudentInfo.phone}</span>
              </p>
              <p>
                Email:<span>{SingleStudentInfo.email}</span>
              </p>
              <p>
                University:<span>{SingleStudentInfo.university}</span>
              </p>
              <p>
                Subject:<span>{SingleStudentInfo.subject}</span>
              </p>
              <p>
                Blood Group:<span>{SingleStudentInfo.bloodGroup}</span>
              </p>
              <p>
                Passion:<span>{SingleStudentInfo.passion}</span>
              </p>
            </div>

            <div
              className="close-modal-btn"
              onClick={() => setModalState(false)}
            >
              Back &rarr;
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailedInfo;
