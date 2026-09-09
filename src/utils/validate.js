const validateForm = (email,password,name,isSignup) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)\S{8,}$/;
  const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
  const normalizedEmail = email?.trim() || "";
  const normalizedName = name?.trim() || "";

  if (!normalizedEmail || !password) {
    return { isValid: false, message: "Email and password are required." };
  }

  if (isSignup && !normalizedName) {
    return { isValid: false, message: "Name is required." };
  }

  if (isSignup) {
    if (!nameRegex.test(normalizedName)) {
      return { isValid: false, message: "Invalid name format." };
    }
  }

  if (!emailRegex.test(normalizedEmail)) {
    return { isValid: false, message: "Invalid email format." };
  }

  if (!passwordRegex.test(password)) {
    return {
      isValid: false,
      message:
        "Password must be at least 8 characters long and contain at least one letter and one number.",
    };
  }

  return { isValid: true, message: "Form is valid." };
};

export default validateForm;