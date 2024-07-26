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
    <div className="bg-custom-spacely bg-no-repeat bg-cover bg-fixed bg-center  max_sm:bg-custom-space max_sm:bg-no-repeat">
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      <LandingPage />
      <Hero lightMode={lightMode} setLightMode={setLightMode} />
      <Contact lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
};

export default App;
