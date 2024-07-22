import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import useSmoothScroll from "../useSmoothScroll";

const App = () => {
  useSmoothScroll();

  return (
    <div>
      <Navbar />
      <Hero />
      <Contact />
    </div>
  );
};

export default App;
