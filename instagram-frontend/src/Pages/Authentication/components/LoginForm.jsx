import React, { useState } from "react";
import "../style.css";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleFieldChange = (fieldName) => (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [fieldName]: e.target.value,
    }));
  };

  const handleLogin = () => {
    console.log("Logging in with:", credentials);
  };

  return (
    <div className="login">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleFieldChange("email")}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={handleFieldChange("password")}
      />
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default LoginForm;
