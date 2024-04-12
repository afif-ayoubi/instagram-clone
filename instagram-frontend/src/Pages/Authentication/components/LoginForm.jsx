import React from "react";

import "../style.css";
import useLoginForm from "./hook/loginHook";
const LoginForm = () => {
  const {
    errors,
    loading,
    error,
    handleFieldChange,
    handleLogin,
  } = useLoginForm();
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
      <button onClick={handleLogin}>{loading ? "Loading..." : "Log in"}</button>
      {error && <div className="error"> {error}</div>}
    </div>
  );
};

export default LoginForm;
