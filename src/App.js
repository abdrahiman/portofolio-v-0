import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import Nav from "./pages/nav";
import Contact from "./pages/contact";
import Work from "./pages/work";
import About from "./pages/about";
import Skills from "./pages/skills";
import "./scss/main.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Intro from "./imgs/Your paragraph text.gif";
function App() {
  let loc = useLocation();
  let [intro, setintro] = useState(true);
  function rendering() {
    setTimeout(() => setintro(false), 4000);
  }
  useEffect(() => rendering(), []);
  return (
    <div className="app">
      <AnimatePresence wait>
        {intro && (
          <div className="intro fixed min-w-full h-screen b-color overflow-hidden z-50 flex items-center justify-center">
            <img src={Intro} alt="" />
          </div>
        )}
        <Nav />
        <Routes location={loc} key={loc.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/skills/" element={<Skills />} />
          <Route path="/work/" element={<Work />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
export default App;
