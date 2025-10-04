import "../styles/GeneralForm.css";

function GeneralForm({ onNext, generalData, onGeneralChange, errors, onBlur }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onGeneralChange((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className="generalForm" noValidate>
      <h2>General Information</h2>
      <div className="fullName">
        <div className="formContainer">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
            value={generalData.firstName}
            onChange={handleChange}
            onBlur={(e) => onBlur(e)}
            className={errors.firstName ? "inputError" : ""}
          />
          {errors.firstName && (
            <span className="errorMessage">{errors.firstName}</span>
          )}
        </div>
        <div className="formContainer">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
            value={generalData.lastName}
            onChange={handleChange}
            onBlur={(e) => onBlur(e)}
            className={errors.lastName ? "inputError" : ""}
          />
          {errors.lastName && (
            <span className="errorMessage">{errors.lastName}</span>
          )}
        </div>
      </div>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email address"
        value={generalData.email}
        onChange={handleChange}
        onBlur={(e) => onBlur(e)}
        className={errors.email ? "inputError" : ""}
      />
      {errors.email && <span className="errorMessage">{errors.email}</span>}
      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Enter your phone number"
        value={generalData.phone}
        onChange={handleChange}
        onBlur={(e) => onBlur(e)}
        className={errors.phone ? "inputError" : ""}
      />
      {errors.phone && <span className="errorMessage">{errors.phone}</span>}
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Enter your address"
        value={generalData.address}
        onChange={handleChange}
        onBlur={(e) => onBlur(e)}
        className={errors.address ? "inputError" : ""}
      />
      {errors.address && <span className="errorMessage">{errors.address}</span>}
      <button type="submit" onClick={onNext}>
        Next
      </button>
    </form>
  );
}

export default GeneralForm;
