import React, { useState } from "react";
import "../";

const SignupForm = () => {
  const [credentials, setCredentials] =
    useState[{ email: "", username: "", password: "" }];
  const handleFieldChange = (fieldName) => (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [fieldName]: e.target.value,
    }));
  };
  const handleSignup = () => {
    console.log("Signing up with:", credentials);
  }
  return (
    <div className="signup">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={handleFieldChange('email')}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={handleFieldChange('username')}
        type="email"
        placeholder="Username"
      />
      <input
        onChange={handleFieldChange('password')}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleSignup}>Sign up</button>
    </div>
  );
};

export default SignupForm;
