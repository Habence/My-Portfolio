import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import useSmoothScroll from "../useSmoothScroll";
import Work from "./Work";
import Skills from "./Skills";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import { juniorLevel, seniorLevel, collegeLevel } from "../assets/education";
import { developer, csr, it_assistant } from "../assets/experience";

import "../index.css";

const App = () => {
  useSmoothScroll();
  const [lightMode, setLightMode] = useState(false);
  const educationData = [...juniorLevel, ...seniorLevel, ...collegeLevel];
  const experienceData = [...developer, ...csr, ...it_assistant];

  return (
    <div>
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      <Hero lightMode={lightMode} setLightMode={setLightMode} />
      <About lightMode={lightMode} setLightMode={setLightMode} />
      <Skills lightMode={lightMode} setLightMode={setLightMode} />
      <Experience lightMode={lightMode} experienceData={experienceData} />
      <Work lightMode={lightMode} setLightMode={setLightMode} />
      <Education
        lightMode={lightMode}
        setLightMode={setLightMode}
        educationData={educationData}
      />
      <Contact lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
};

export default App;
