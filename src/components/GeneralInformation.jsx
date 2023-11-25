import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

export default function GeneralInformation({ onChildChange }) {
  const [generalInfo, setgeneralInfo] = useState({
    id: uuid(),
    fullName: "Hasith Kaushal",
    eMail: "hasith@gmail.com",
    phoneNumber: "0774820783",
  });

  const [GeneralForm, viewGeneralForm] = useState(true);

  const changeNameInfo = (name) => {
    setgeneralInfo({ ...generalInfo, fullName: name });
  };

  const changeeMailInfo = (mail) => {
    setgeneralInfo({ ...generalInfo, eMail: mail });
  };

  const changeNumberInfo = (number) => {
    setgeneralInfo({ ...generalInfo, phoneNumber: number });
  };

  useEffect(() => {
    onChildChange(generalInfo);
  }, [generalInfo]);

  const viewForm = () => {
    viewGeneralForm(!GeneralForm);
  };

  return (
    <div id="contact-form-container">
      <h2 style={{ cursor: "pointer" }} onClick={() => viewForm()}>
        GENERAL INFORMATION
      </h2>
      <div
        className="form-inputs"
        style={{ display: GeneralForm ? "block" : "none" }}
      >
        <label className="full-name">
          Full Name:{" "}
          <input
            type="text"
            name=""
            id=""
            value={generalInfo.fullName}
            onChange={(event) => changeNameInfo(event.target.value)}
          />
        </label>
        <label className="e-mail">
          E-mail:{" "}
          <input
            type="email"
            name=""
            id=""
            value={generalInfo.eMail}
            onChange={(event) => changeeMailInfo(event.target.value)}
          />
        </label>
        <label className="phone-number">
          Phone number:{" "}
          <input
            type="number"
            name=""
            id=""
            value={generalInfo.phoneNumber}
            onChange={(event) => changeNumberInfo(event.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
