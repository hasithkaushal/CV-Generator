import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import CVFormat from "./components/CVFormat";
import { useState } from "react";

export default function App() {
  const [infos, setInfos] = useState({});
  const [edus, setEdus] = useState({});
  const [expis, setExpis] = useState({});

  const handleInfo = (GeneralInformation) => {
    setInfos(GeneralInformation);
  };

  const handleEdu = (EducationInformation) => {
    setEdus(EducationInformation);
  };

  const handleExpi = (ExperienceInformation) => {
    setExpis(ExperienceInformation);
  };

  return (
    <div id="fullApp">
      <div id="form-container">
        <div id="contact-form">
          <GeneralInformation onChildChange={handleInfo} />
        </div>
        <div id="education-form">
          <EducationForm onChildChange={handleEdu} />
        </div>
        <div id="experience-form">
          <ExperienceForm onChildChange={handleExpi} />
        </div>
      </div>
      <div id="cv-container">
        <CVFormat infos={infos} edus={edus} expis={expis} />
      </div>
    </div>
  );
}
