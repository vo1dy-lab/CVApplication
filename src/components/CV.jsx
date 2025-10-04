import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import "../styles/CV.css";

function CV({ generalData, educationData, experienceData, onBack }) {
  return (
    <div className="cvContainer">
      <div className="generalContainer">
        <h2>{`${generalData.firstName} ${generalData.lastName}`}</h2>
        <h3>{experienceData[0].job}</h3>
        <div className="contacts">
          <div className="address">
            <CiLocationOn />
            <h4>{generalData.address}</h4>
          </div>
          <div className="phone">
            <MdOutlineLocalPhone />
            <h4>{generalData.phone}</h4>
          </div>
          <div className="email">
            <MdOutlineEmail />
            <h4>{generalData.email}</h4>
          </div>
        </div>
      </div>

      <div className="educationContainer">
        <div className="sectionHeader">
          <IoSchoolOutline className="cvIcon" />
          <h2>Education</h2>
        </div>
        {educationData.map((edu, index) => {
          return (
            <div key={index} className="section">
              <h3>{edu.degree}</h3>
              <div className="date">
                <h4>{edu.institution}</h4>
                <h4>
                  {edu.startDate} | {edu.endDate}
                </h4>
              </div>
              <h4 className="description">{edu.description}</h4>
            </div>
          );
        })}
      </div>

      <div className="experienceContainer">
        <div className="sectionHeader">
          <MdOutlineWorkOutline className="cvIcon" />
          <h2>Work Experience</h2>
        </div>
        {experienceData.map((exp, index) => {
          return (
            <div key={index} className="section">
              <h3>{exp.job}</h3>
              <div className="date">
                <h4>{exp.company}</h4>
                <h4>
                  {exp.startDate} | {exp.endDate}
                </h4>
              </div>
              <h4 className="description">{exp.description}</h4>
            </div>
          );
        })}
      </div>
      <button type="button" onClick={onBack}>
        Edit
      </button>
    </div>
  );
}

export default CV;
