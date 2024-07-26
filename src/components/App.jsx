import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Hero from "./Hero";
import Contact from "./Contact";
import useSmoothScroll from "../useSmoothScroll";

const App = () => {
  useSmoothScroll();
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className="md:bg-custom-spacely md:bg-no-repeat md:bg-cover md:bg-center md:bg-fixed  sm:bg-custom-space sm:bg-no-repeat bg-fixed max_sm:bg-custom-space max_sm:bg-cover  max_sm:bg-no-repeat">
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      <LandingPage />
      <Hero lightMode={lightMode} setLightMode={setLightMode} />
      <Contact lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
};

export default App;
