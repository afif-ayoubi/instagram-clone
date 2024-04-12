import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../../../Store/UserSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const useSignupForm = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        name: "",
        password: "",
      });
      const [errors, setErrors] = useState({
        email: "",
        name: "",
        password: "",
      });
      const navigate = useNavigate();
    
      const { loading, error } = useSelector((state) => state.user);
      const dispatch = useDispatch();
      const handleFieldChange = (fieldName) => (e) => {
        setCredentials((prevCredentials) => ({
          ...prevCredentials,
          [fieldName]: e.target.value,
        }));
        setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
      };
    
      const validateCredentials = (credentials) => {
        const errors = {};
    
        if (credentials.email.trim() === "") {
          errors.email = "Please enter your email.";
        } else if (!credentials.email.includes("@")) {
          errors.email = "Please enter a valid email.";
        }
    
        if (credentials.name.trim() === "") {
          errors.name = "Please enter your name.";
        }
    
        if (credentials.password.trim() === "") {
          errors.password = "Please enter your password.";
        }
    
        return errors;
      };
    
      const handleSignup = (e) => {
        e.preventDefault();
        const newErrors = validateCredentials(credentials);
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
        } else {
          dispatch(signupUser(credentials))
            .then((result) => {
              console.log(result);
              if (result.payload.status === "success") {
                console.log("User signed up successfully");
    
                setCredentials({ email: "", name: "", password: "" });
                navigate("/home");
              }
            })
            .catch((error) => {});
        }
      };
      return {
        errors,
        loading,
        error,
        handleFieldChange,
        handleSignup,
      }
    
};
export default useSignupForm;