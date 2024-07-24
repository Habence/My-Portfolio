import React, { useEffect } from "react";
import { preLoaderAnim } from "../index.js";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="text-[#FEC45D] mr-4">Hi,</span>
        <span className="mr-4">Welcome</span>
        <span>
          to my <span className="text-[#FEC45D] ">Portfolio</span>
        </span>
      </div>
    </div>
  );
};

export default PreLoader;
