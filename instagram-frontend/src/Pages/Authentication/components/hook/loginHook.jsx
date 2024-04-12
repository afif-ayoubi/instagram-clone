import { useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { loginUser } from "../../../../Store/UserSlice";

const useLoginForm = () => {
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
return {
    errors,
    loading,
    error,
    handleFieldChange,
    handleLogin,
  };  
}
export default useLoginForm;