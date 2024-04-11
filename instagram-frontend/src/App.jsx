import Authentication from "./Pages/Authentication";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./utilities.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
