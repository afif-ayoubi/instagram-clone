import React, { useState } from "react";
import "./style.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

const Authentication = () => {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive((prevActive) => (prevActive === "login" ? "signup" : "login"));
  };

  return (
    <div className="authenticate">
      <div className="auth__left">
        <img
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt="Instagram Screenshots"
        />
      </div>
      <div className="auth__right">
        {active === "login" ? <LoginForm /> : <SignupForm />}

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

export default Authentication;
