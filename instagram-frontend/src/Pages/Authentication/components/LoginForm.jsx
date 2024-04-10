import React, { useState } from "react";
import "../style.css";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleFieldChange = (fieldName) => (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [fieldName]: e.target.value,
    }));
    setErrors((prevErros) => ({ ...prevErros, [fieldName]: "" }));
  };

  const handleLogin = () => {
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

    if (credentials.password.trim() === "") {
      newErrors.password = "Please enter your password.";
      formValid = false;
    }

    if (!formValid) {
      setErrors(newErrors);
      return;
    }

    console.log("Logging in with:", credentials);
  };

  return (
    <div className="login">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <div></div>
      <input
        type="email"
        placeholder="Email"
        onChange={handleFieldChange("email")}
      />
      {errors.email && <div className="error">{errors.email}</div>}
      <input
        type="password"
        placeholder="Password"
        onChange={handleFieldChange("password")}
      />
      {errors.password && <div className="error">{errors.password}</div>}
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default LoginForm;
