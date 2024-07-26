import React, { useEffect, useRef } from "react";
import "../index.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const LandingPage = () => {
  return (
    <div className="text-white px-20 py-[10rem]">
      <Parallax pages={4}>
        <ParallaxLayer speed={1}>
          <p className="text-5xl text-white">HEllO WELCOME</p>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <p className="text-5xl text-white uppercase">
            Web Development is fun
          </p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default LandingPage;
