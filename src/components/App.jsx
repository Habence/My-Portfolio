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
    <div className="max_md:bg-custom-space max_md:bg-no-repeat max_md:bg-fixed max_md:bg-[length:100%_100%]">
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      <LandingPage />
      <Hero lightMode={lightMode} setLightMode={setLightMode} />
      <Contact lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
};

export default App;
