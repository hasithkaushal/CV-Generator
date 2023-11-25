import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

export default function ExperienceForm({ onChildChange }) {
  const [experiences, setExperience] = useState([
    {
      id: uuid(),
      companyName: "IFS Colombo",
      positionTitle: "intern",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quia?",
      startYear: "2010",
      endYear: "2011",
    },
    {
      id: uuid(),
      companyName: "Surge Global",
      positionTitle: "software engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quia?",
      startYear: "2015",
      endYear: "2020",
    },
  ]);

  const [id, changeId] = useState("");

  const [CompanyName, changeCompanyName] = useState("");

  const [PositionTitle, changePositionTitle] = useState("");

  const [Description, changeDescription] = useState("");

  const [StartYear, changeStartYear] = useState("");

  const [EndYear, changeEndYear] = useState("");

  const [ExperienceForm, viewExperienceForm] = useState(false);

  const addCompany = (company) => {
    changeCompanyName(company);
  };

  const addPosition = (position) => {
    changePositionTitle(position);
  };

  const addDescription = (description) => {
    changeDescription(description);
  };

  const addJobStart = (start) => {
    changeStartYear(start);
  };

  const addJobEnd = (end) => {
    changeEndYear(end);
  };

  const addExperience = (event) => {
    event.preventDefault();
    const current = experiences.find((experience) => experience.id == id);
    if (experiences.indexOf(current) > -1) {
      const before = experiences.slice(0, experiences.indexOf(current));
      const after = experiences.slice(experiences.indexOf(current) + 1);
      setExperience([
        ...before,
        {
          id: current.id,
          companyName: CompanyName,
          positionTitle: PositionTitle,
          description: Description,
          startYear: StartYear,
          endYear: EndYear,
        },
        ...after,
      ]);
    } else {
      setExperience([
        ...experiences,
        {
          id: uuid(),
          companyName: CompanyName,
          positionTitle: PositionTitle,
          description: Description,
          startYear: StartYear,
          endYear: EndYear,
        },
      ]);
    }
    changeId(uuid());
    changeCompanyName("");
    changePositionTitle("");
    changeDescription("");
    changeStartYear("");
    changeEndYear("");
  };

  useEffect(() => {
    onChildChange(experiences);
  }, [experiences]);

  const editExperience = (experience) => {
    viewExperienceForm(true);
    changeId(experience.id);
    changeCompanyName(experience.companyName);
    changePositionTitle(experience.positionTitle);
    changeDescription(experience.description);
    changeStartYear(experience.startYear);
    changeEndYear(experience.endYear);
  };

  const deleteExperience = (experience) => {
    const current = experiences.indexOf(experience);
    const prev = experiences.slice(0, current);
    const after = experiences.slice(current + 1);
    setExperience([...prev, ...after]);
  };

  const viewForm = () => {
    viewExperienceForm(!ExperienceForm);
  };

  return (
    <div id="experience-form-container">
      <h2 style={{ cursor: "pointer" }} onClick={() => viewForm()}>
        PRACTICAL EXPERIENCE
      </h2>
      <div style={{ display: ExperienceForm ? "block" : "none" }}>
        <form
          className="form-inputs"
          onSubmit={(event) => addExperience(event)}
        >
          <label className="company-name">
            Company Name
            <input
              type="text"
              name=""
              value={CompanyName}
              onChange={(event) => addCompany(event.target.value)}
            />
          </label>
          <label className="position-title">
            Position Title
            <input
              type="text"
              name=""
              value={PositionTitle}
              onChange={(event) => addPosition(event.target.value)}
              required
            />
          </label>
          <label className="position-description">
            Main Responsibilities
            <textarea
              type="number"
              name=""
              rows="3"
              onChange={(event) => addDescription(event.target.value)}
              value={Description}
              required
            />
          </label>
          <div className="start-end">
            <label className="start-year">
              Start Year
              <input
                type="number"
                name=""
                onChange={(event) => addJobStart(event.target.value)}
                value={StartYear}
                required
              />
            </label>
            <label className="end-year">
              End Year
              <input
                type="number"
                name=""
                onChange={(event) => addJobEnd(event.target.value)}
                value={EndYear}
                required
              />
            </label>
          </div>
          <input className="add" type="submit" value="Save" />
        </form>
      </div>
      <div id="experience-list">
        {experiences.map((experience) => (
          <div className="experience-list-title" key={experience.id}>
            <h3
              style={{ cursor: "pointer" }}
              onClick={() => editExperience(experience)}
            >
              {experience.companyName}
            </h3>
            <i
              className="fa-solid fa-trash-can"
              onClick={() => deleteExperience(experience)}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
}
