import React, { useState } from "react";

const SignupForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleFieldChange = (fieldName) => (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [fieldName]: e.target.value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
  };

  const handleSignup = () => {
    let formValid = true;
    const newErrors = {};
    if (credentials.email.trim() === "") {
      newErrors.email = "Please enter your email.";
      formValid = false;
    }
    if (!credentials.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
      formValid = false;
    }
    if (credentials.username.trim() === "") {
      newErrors.username = "Please enter your username.";
      formValid = false;
    }
    if (credentials.password.trim() === "") {
      newErrors.password = "Please enter your password.";
      formValid = false;
    }
    if (!formValid) {
      setErrors(newErrors);
      return;
    }
    console.log("Signing up with:", credentials);
  };

  return (
    <div className="signup">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={handleFieldChange("username")}
        type="text"
        placeholder="Username"
      />
      {errors.username && <div className="error">{errors.username}</div>}
      <input
        onChange={handleFieldChange("email")}
        type="email"
        placeholder="Email"
      />
      {errors.email && <div className="error">{errors.email}</div>}
      <input
        onChange={handleFieldChange("password")}
        type="password"
        placeholder="Password"
      />
      {errors.password && <div className="error">{errors.password}</div>}
      <button onClick={handleSignup}>Sign up</button>
    </div>
  );
};

export default SignupForm;
