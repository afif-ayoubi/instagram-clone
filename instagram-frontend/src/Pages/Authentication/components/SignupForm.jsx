import React from "react";
import useSignupForm from "./hook/singupHook";
const SignupForm = () => {
  const { errors, loading, error, handleFieldChange, handleSignup } =
    useSignupForm();
  return (
    <div className="signup">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={handleFieldChange("name")}
        type="text"
        placeholder="name"
      />
      {errors.name && <div className="error">{errors.name}</div>}
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
      <button onClick={handleSignup}>
        {loading ? "Loading..." : "Sign up"}
      </button>
      {error && <div className="error"> {error}</div>}
    </div>
  );
};

export default SignupForm;
