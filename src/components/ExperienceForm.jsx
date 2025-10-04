import { FaMinus, FaPlus } from "react-icons/fa6";
import "../styles/ExperienceForm.css";

function ExperienceForm({
  onNext,
  onBack,
  experienceData,
  onExperienceChange,
  errors,
  onBlur,
}) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...experienceData];

    list[index][name] = value;
    onExperienceChange(list);
  };

  const handleAddField = () => {
    onExperienceChange((prevData) => [
      ...prevData,
      {
        company: "",
        job: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleRemoveField = (index) => {
    const list = [...experienceData];
    list.splice(index, 1);
    onExperienceChange(list);
  };

  return (
    <form className="experienceForm">
      <h2>Practical Experience</h2>
      {experienceData.map((field, index) => (
        <div key={index} className="experienceEntry">
          <div className="formContainer">
            <div className="formContainer">
              <label htmlFor={`company-${index}`}>Company Name</label>
              <input
                type="text"
                name="company"
                id={`company-${index}`}
                placeholder="e.g., Tech Solutions Inc."
                value={field.company}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => onBlur(e, index)}
                className={errors[index]?.company ? "inputError" : ""}
              />
              {errors[index]?.company && (
                <span className="errorMessage">{errors[index].company}</span>
              )}
            </div>
            <div className="formContainer">
              <label htmlFor={`job-${index}`}>Job Title</label>
              <input
                type="text"
                name="job"
                id={`job-${index}`}
                placeholder="e.g., Software Engineer"
                value={field.job}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => onBlur(e, index)}
                className={errors[index]?.job ? "inputError" : ""}
              />
              {errors[index]?.job && (
                <span className="errorMessage">{errors[index].job}</span>
              )}
            </div>
          </div>
          <div className="formContainer">
            <div className="formContainer">
              <label htmlFor={`startDate-${index}`}>Start Date</label>
              <input
                type="date"
                name="startDate"
                id={`startDate-${index}`}
                value={field.startDate}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div className="formContainer">
              <label htmlFor={`endDate-${index}`}>End Date</label>
              <input
                type="date"
                name="endDate"
                id={`endDate-${index}`}
                value={field.endDate}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
          </div>
          <label htmlFor={`description-${index}`}>Description</label>
          <textarea
            name="description"
            id={`description-${index}`}
            placeholder="Describe your studies and achievements."
            value={field.description}
            onChange={(e) => handleChange(index, e)}
          ></textarea>
          {experienceData.length > 1 && index !== experienceData.length - 1 && (
            <button
              type="button"
              className="additionalRemove"
              onClick={(index) => handleRemoveField(index)}
            >
              <FaMinus />
              <span>Remove additional experience</span>
            </button>
          )}
        </div>
      ))}
      <button type="button" className="additionalAdd" onClick={handleAddField}>
        <FaPlus />
        <span>Add additional experience</span>
      </button>
      <div className="formContainer buttons">
        <button type="button" onClick={onBack}>
          Back
        </button>
        <button type="submit" onClick={onNext}>
          Create CV
        </button>
      </div>
    </form>
  );
}

export default ExperienceForm;
