import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Experiences from "./Components/Pages/Experiences/Experiences";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experiences" element={<Experiences />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
