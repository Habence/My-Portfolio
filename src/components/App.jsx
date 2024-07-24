import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import useSmoothScroll from "../useSmoothScroll";
import PreLoader from "./PreLoader";

const App = () => {
  useSmoothScroll();

  const [loading, setLoading] = useState(true);

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
          <Navbar />
          <Hero />
          <Contact />
        </div>
      )}
    </>
  );
};

export default App;
