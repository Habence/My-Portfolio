import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import useSmoothScroll from "../useSmoothScroll";
import Skills from "./Skills";
import About from "./About";

import "../index.css";

const App = () => {
  useSmoothScroll();
  const [lightMode, setLightMode] = useState(false);

  return (
    <div>
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      <Hero lightMode={lightMode} setLightMode={setLightMode} />
      <Skills lightMode={lightMode} setLightMode={setLightMode} />
      <About lightMode={lightMode} setLightMode={setLightMode} />
      <Contact lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
};

export default App;
