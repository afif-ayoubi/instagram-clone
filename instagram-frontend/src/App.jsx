import Authentication from "./Pages/Authentication";
import SideNav from "./Components/SideNav";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/home" element={<SideNav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
