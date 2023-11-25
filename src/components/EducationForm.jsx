import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

export default function EducationForm({ onChildChange }) {
  const [educations, setEducations] = useState([
    {
      id: uuid(),
      schoolName: "Kottawa Darmapala Vidyalaya",
      studyTitle: "Physical Science",
      startYear: "2008",
      endYear: "2022",
    },
    {
      id: uuid(),
      schoolName: "SLIIT",
      studyTitle: "Computer Science",
      startYear: "2023",
      endYear: "2027",
    },
  ]);

  const [id, changeId] = useState("");

  const [SchoolName, changeSchoolName] = useState("");

  const [StudyTitle, changeStudyTitle] = useState("");

  const [StartYear, changeStartYear] = useState("");

  const [EndYear, changeEndYear] = useState("");

  const [EducationForm, viewEducationForm] = useState(false);

  const addEducationSchool = (school) => {
    changeSchoolName(school);
  };

  const addEducationTitle = (title) => {
    changeStudyTitle(title);
  };

  const addEducationStart = (start) => {
    changeStartYear(start);
  };

  const addEducationEnd = (end) => {
    changeEndYear(end);
  };

  const addEducation = (event) => {
    event.preventDefault();
    const current = educations.find((education) => education.id == id);
    if (educations.indexOf(current) > -1) {
      const before = educations.slice(0, educations.indexOf(current));
      const after = educations.slice(educations.indexOf(current) + 1);
      setEducations([
        ...before,
        {
          id: current.id,
          schoolName: SchoolName,
          studyTitle: StudyTitle,
          startYear: StartYear,
          endYear: EndYear,
        },
        ...after,
      ]);
    } else {
      setEducations([
        ...educations,
        {
          id: uuid(),
          schoolName: SchoolName,
          studyTitle: StudyTitle,
          startYear: StartYear,
          endYear: EndYear,
        },
      ]);
    }
    changeSchoolName("");
    changeStudyTitle("");
    changeStartYear("");
    changeEndYear("");
  };

  useEffect(() => {
    onChildChange(educations);
  }, [educations]);

  const editEducation = (education) => {
    viewEducationForm(true);
    changeId(education.id);
    changeSchoolName(education.schoolName);
    changeStudyTitle(education.studyTitle);
    changeStartYear(education.startYear);
    changeEndYear(education.endYear);
  };

  const deleteEducation = (education) => {
    const current = educations.indexOf(education);
    const prev = educations.slice(0, current);
    const after = educations.slice(current + 1);
    setEducations([...prev, ...after]);
  };

  const viewForm = () => {
    viewEducationForm(!EducationForm);
  };

  return (
    <div id="education-form-container">
      <h2 style={{ cursor: "pointer" }} onClick={() => viewForm()}>
        EDUCATION INFORMATION
      </h2>
      <div style={{ display: EducationForm ? "block" : "none" }}>
        <form className="form-inputs" onSubmit={(event) => addEducation(event)}>
          <label className="school-name">
            School Name
            <input
              type="text"
              name=""
              id=""
              value={SchoolName}
              onChange={(event) => addEducationSchool(event.target.value)}
            />
          </label>
          <label className="study-title">
            Title of study
            <input
              type="text"
              name=""
              id=""
              value={StudyTitle}
              onChange={(event) => addEducationTitle(event.target.value)}
            />
          </label>
          <div className="start-end">
            <label className="start-year">
              Start Year
              <input
                type="number"
                name=""
                onChange={(event) => addEducationStart(event.target.value)}
                value={StartYear}
                required
              />
            </label>
            <label className="end-year">
              End Year
              <input
                type="number"
                name=""
                onChange={(event) => addEducationEnd(event.target.value)}
                value={EndYear}
                required
              />
            </label>
          </div>

          <input type="submit" value="Save" className="add" />
        </form>
      </div>
      <div id="educations-list">
        {educations.map((education) => (
          <div className="education-list-title" key={education.id}>
            <h3
              style={{ cursor: "pointer" }}
              onClick={() => editEducation(education)}
            >
              {education.schoolName}
            </h3>
            <i
              className="fa-solid fa-trash-can"
              onClick={() => {
                deleteEducation(education);
              }}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
}
