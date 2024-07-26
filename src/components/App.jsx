import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Hero from "./Hero";
import Contact from "./Contact";
import useSmoothScroll from "../useSmoothScroll";
import "../index.css";

const App = () => {
  useSmoothScroll();
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className="max_sm:bg-lightSpace max_sm:bg-no-repeat max_sm:bg-fixed  custom_space">
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      <LandingPage />
      <Hero lightMode={lightMode} setLightMode={setLightMode} />
      <Contact lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
};

export default App;
