import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import Nav from "./pages/nav";

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
        <Nav change={loc.pathname} />
        <Routes location={loc} key={loc.pathname}>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
export default App;
