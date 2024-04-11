import React, { useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import "../style.css";
import { loginUser } from "../../../Store/UserSlice";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFieldChange = (fieldName) => (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [fieldName]: e.target.value,
    }));
    setErrors((prevErros) => ({ ...prevErros, [fieldName]: "" }));
  };
  const validateCredentials = (credentials) => {
    const errors = {};

    if (credentials.email.trim() === "") {
      errors.email = "Please enter your email.";
    } else if (!credentials.email.includes("@")) {
      errors.email = "Please enter a valid email";
    }

    if (credentials.password.trim() === "") {
      errors.password = "Please enter your password.";
    }
    return errors;
  };
  const handleLogin = (e) => {
    e.preventDefault();

    const newErros = validateCredentials(credentials);
    if (Object.keys(newErros).length > 0) {
      setErrors(newErros);
    } else {
      dispatch(loginUser(credentials)).then((results) => {
        if (results.payload.status === "success") {
          console.log("User logged in successfully");
          setCredentials({ email: "", password: "" });
          navigate('/home');
        } 
      })
      .catch((error) => {
       
      });
  }
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
      <button onClick={handleLogin}>{loading ? "Loading..." : "Log in"}</button>
      {error && (
        <div className="error" >
          {" "}
          {error}
        </div>
      )}
    </div>
  );
};

export default LoginForm;
