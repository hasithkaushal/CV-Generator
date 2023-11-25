export default function CVFormat(props) {
  return (
    <div className="resume">
      <div className="resume-section" id="general-info">
        <h2>General Information</h2>
        <p>
          <strong>Name:</strong>
          {props.infos.fullName}
        </p>
        <p>
          <strong>Email:</strong> {props.infos.eMail}
        </p>
        <p>
          <strong>Phone:</strong> {props.infos.phoneNumber}
        </p>
      </div>

      <div
        className="resume-section"
        id="education"
        style={{ display: props.edus.length != 0 ? "block" : "none" }}
      >
        <h2>Educational Experience</h2>
        {Object.keys(props.edus).map((Pkey) => (
          <div key={props.edus[Pkey]["id"]}>
            <p>
              <strong>School Name:</strong>
              {props.edus[Pkey]["schoolName"]}
            </p>
            <p>
              <strong>Title of Study:</strong>
              {props.edus[Pkey]["studyTitle"]}
            </p>
            <p>
              <strong>Date of Study:</strong> {props.edus[Pkey]["startYear"]} -{" "}
              {props.edus[Pkey]["endYear"]}
            </p>
          </div>
        ))}
      </div>

      <div
        className="resume-section"
        id="practical-experience"
        style={{ display: props.expis.length != 0 ? "block" : "none" }}
      >
        <h2>Practical Experience</h2>
        {Object.keys(props.expis).map((Pkey) => (
          <div key={props.expis[Pkey]["id"]}>
            <p>
              <strong>Company Name:</strong>
              {props.expis[Pkey]["companyName"]}
            </p>
            <p>
              <strong>Position Title:</strong>{" "}
              {props.expis[Pkey]["positionTitle"]}
            </p>
            <p>
              <strong>Main Responsibilities:</strong>
              {props.expis[Pkey]["description"]}
            </p>
            <p>
              <strong>Date:</strong> {props.expis[Pkey]["startYear"]} -{" "}
              {props.expis[Pkey]["endYear"]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
