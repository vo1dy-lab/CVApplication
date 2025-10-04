import { useState } from "react";
import Container from "./Container";
import "../styles/Main.css";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import {
  validateEducationForm,
  validateExperienceForm,
  validateGeneralForm,
} from "../utils/validation";
import CV from "./CV";

function Main() {
  const [formStep, setFormStep] = useState(1);
  const [generalFormErrors, setGeneralFormErrors] = useState({});
  const [educationFormErrors, setEducationFormErrors] = useState([]);
  const [experienceFormErrors, setExperienceFormErrors] = useState([]);

  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [educationData, setEducationData] = useState([
    {
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const [experienceData, setExperienceData] = useState([
    { company: "", job: "", startDate: "", endDate: "", description: "" },
  ]);

  const handleNext = (e) => {
    e.preventDefault();
    switch (formStep) {
      case 1: {
        const { formIsValid, errors } = validateGeneralForm(generalData);
        setGeneralFormErrors(errors);
        if (formIsValid) setFormStep(2);
        break;
      }

      case 2: {
        const { formIsValid, errorsArray } =
          validateEducationForm(educationData);
        setEducationFormErrors(errorsArray);
        if (formIsValid) setFormStep(3);
        break;
      }

      case 3: {
        const { formIsValid, errorsArray } =
          validateExperienceForm(experienceData);
        setExperienceFormErrors(errorsArray);
        if (formIsValid) setFormStep(4);
        break;
      }

      default:
        break;
    }
  };
  const handleBack = () => {
    setFormStep((prevStep) => prevStep - 1);
  };
  const handleBlur = (e, index) => {
    const { name } = e.target;
    switch (formStep) {
      case 1:
        {
          const { errors } = validateGeneralForm(generalData);
          setGeneralFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errors[name],
          }));
        }
        break;

      case 2: {
        const { errorsArray } = validateEducationForm(educationData);
        setEducationFormErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          if (!newErrors[index]) newErrors[index] = {};
          newErrors[index][name] = errorsArray[index]
            ? errorsArray[index][name]
            : null;

          return newErrors;
        });
        break;
      }

      case 3: {
        const { errorsArray } = validateExperienceForm(experienceData);
        setExperienceFormErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          if (!newErrors[index]) newErrors[index] = {};
          newErrors[index][name] = errorsArray[index]
            ? errorsArray[index][name]
            : null;

          return newErrors;
        });
        break;
      }

      default:
        break;
    }
  };

  return (
    <main>
      <Container>
        <div className="flex">
          {formStep < 4 && (
            <div className="formHeader">
              <h1>Create Your CV</h1>
              <h2>
                Fill out the sections below to generate your professional
                resume.
              </h2>
            </div>
          )}
          {formStep === 4 && (
            <div className="resumeHeader">
              <h1>Resume Preview</h1>
              <h2>
                Your resume is ready. Review and download it in your preferred
                format.
              </h2>
            </div>
          )}

          {formStep === 1 && (
            <GeneralForm
              onNext={handleNext}
              generalData={generalData}
              onGeneralChange={setGeneralData}
              errors={generalFormErrors}
              onBlur={handleBlur}
            />
          )}
          {formStep === 2 && (
            <EducationForm
              onBack={handleBack}
              onNext={handleNext}
              educationData={educationData}
              onEducationChange={setEducationData}
              errors={educationFormErrors}
              onBlur={handleBlur}
            />
          )}
          {formStep === 3 && (
            <ExperienceForm
              onBack={handleBack}
              onNext={handleNext}
              experienceData={experienceData}
              onExperienceChange={setExperienceData}
              errors={experienceFormErrors}
              onBlur={handleBlur}
            />
          )}
          {formStep === 4 && (
            <CV
              generalData={generalData}
              educationData={educationData}
              experienceData={experienceData}
              onBack={handleBack}
            />
          )}
        </div>
      </Container>
    </main>
  );
}

export default Main;
