export const validateGeneralForm = (data) => {
  const errors = {};
  let formIsValid = true;

  if (!data.firstName) {
    errors.firstName = "First name is required.";
    formIsValid = false;
  }
  if (!data.lastName) {
    errors.lastName = "Last name is required.";
    formIsValid = false;
  }
  if (!data.email) {
    errors.email = "Email address is required.";
    formIsValid = false;
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid.";
    formIsValid = false;
  }
  if (!data.phone) {
    errors.phone = "Phone number is required.";
    formIsValid = false;
  }
  if (!data.address) {
    errors.address = "Address is required.";
    formIsValid = false;
  }

  return { formIsValid, errors };
};

export const validateEducationForm = (data) => {
  const errorsArray = [];
  let formIsValid = true;

  data.forEach((edu, index) => {
    const eduErrors = {};
    if (!edu.institution) {
      eduErrors.institution = "Institution name is required.";
      formIsValid = false;
    }
    if (!edu.degree) {
      eduErrors.degree = "Degree is required.";
      formIsValid = false;
    }
    errorsArray[index] = eduErrors;
  });

  return { formIsValid, errorsArray };
};

export const validateExperienceForm = (data) => {
  const errorsArray = [];
  let formIsValid = true;

  data.forEach((exp, index) => {
    const expErrors = {};
    if (!exp.company) {
      expErrors.company = "Company name is required.";
      formIsValid = false;
    }
    if (!exp.job) {
      expErrors.job = "Job title is required.";
      formIsValid = false;
    }
    errorsArray[index] = expErrors;
  });

  return { formIsValid, errorsArray };
};
