import "../styles/EducationForm.css";
import { FaMinus, FaPlus } from "react-icons/fa6";

function EducationForm({
  onBack,
  onNext,
  educationData,
  onEducationChange,
  errors,
  onBlur,
}) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...educationData];
    list[index][name] = value;
    onEducationChange(list);
  };

  const handleAddField = () => {
    onEducationChange((prevData) => [
      ...prevData,
      {
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleRemoveField = (index) => {
    const list = [...educationData];
    list.splice(index, 1);
    onEducationChange(list);
  };

  return (
    <form className="educationForm">
      <h2>Educational Experience</h2>
      {educationData.map((field, index) => (
        <div key={index} className="educationEntry">
          <div className="formContainer">
            <div className="formContainer">
              <label htmlFor={`institution-${index}`}>Institution Name</label>
              <input
                type="text"
                name="institution"
                id={`institution-${index}`}
                placeholder="e.g., University of Technology"
                value={field.institution}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => onBlur(e, index)}
                className={errors[index]?.institution ? "inputError" : ""}
              />
              {errors[index]?.institution && (
                <span className="errorMessage">
                  {errors[index].institution}
                </span>
              )}
            </div>
            <div className="formContainer">
              <label htmlFor={`degree-${index}`}>Degree</label>
              <input
                type="text"
                name="degree"
                id={`degree-${index}`}
                placeholder="e.g., Bachelor of Science"
                value={field.degree}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => onBlur(e, index)}
                className={errors[index]?.degree ? "inputError" : ""}
              />
              {errors[index]?.degree && (
                <span className="errorMessage">{errors[index].degree}</span>
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
            placeholder="Describe your studies, achievement, etc."
            value={field.description}
            onChange={(e) => handleChange(index, e)}
          ></textarea>
          {educationData.length > 1 && index !== educationData.length - 1 && (
            <button
              type="button"
              className="additionalRemove"
              onClick={(index) => handleRemoveField(index)}
            >
              <FaMinus />
              <span>Remove additional education</span>
            </button>
          )}
        </div>
      ))}
      <button type="button" className="additionalAdd" onClick={handleAddField}>
        <FaPlus />
        <span>Add additional education</span>
      </button>
      <div className="formContainer buttons">
        <button type="button" onClick={onBack}>
          Back
        </button>
        <button type="submit" onClick={onNext}>
          Next
        </button>
      </div>
    </form>
  );
}

export default EducationForm;
