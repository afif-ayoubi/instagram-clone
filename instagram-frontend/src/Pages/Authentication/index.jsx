import React, { useState } from "react";
import "./style.css";
import Signup from "./components/SignupForm";
import Login from "./components/LoginForm";
const Authentication = () => {
  const [active, setActive] = useState("login");
  const handleChange = () => {
    setActive((prevActive) => (prevActive === "Login" ? "SignUp" : "Login"));
    return (
      <div className="authenticate">
        <div className="auth__left">
          <img
            src="https://i.imgur.com/P3Vm1Kq.png"
            alt="Instagram Screenshots"
          />
        </div>
        <div className="auth__right">
          {active === "login" ? <Login /> : <Signup />}

          <div className="auth__more">
            <span>
              {active === "login" ? (
                <>
                  Don't have an account?{" "}
                  <button onClick={handleChange}>Sign Up</button>
                </>
              ) : (
                <>
                  Have an account?{" "}
                  <button onClick={handleChange}>Log in</button>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    );
  };
};
export default Authentication;
