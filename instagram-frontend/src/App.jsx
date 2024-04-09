import Authentication from "./Pages/Authentication";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
