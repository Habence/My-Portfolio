import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import useSmoothScroll from "../useSmoothScroll";
import PreLoader from "./PreLoader";

const App = () => {
  useSmoothScroll();

  const [loading, setLoading] = useState(true);
  const [lightMode, setLighMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Simulate a loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PreLoader />}
      {!loading && (
        <div>
          <Navbar lightMode={lightMode} setLighMode={setLighMode} />
          <Hero lightMode={lightMode} setLighMode={setLighMode} />
          <Contact lightMode={lightMode} setLighMode={setLighMode} />
        </div>
      )}
    </>
  );
};

export default App;
