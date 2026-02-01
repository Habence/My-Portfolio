import React, { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import { MdArrowOutward } from "react-icons/md";
import Zoom from "@mui/material/Zoom";
import Slide from "@mui/material/Slide";
import "../index.css";

const Hero = ({ lightMode }) => {
  return (
    <div
      id="home"
      className={
        lightMode
          ? "bg-[#FFFFF0] transition-colors duration-500 flex flex-col px-10 pt-[10rem] py-10 items-start cursor-default xs:px-5 xs:pt-[10rem] sm:px-24 md:px-20  lg:px-28 xl:px-40 2xl:px-54 2xl:pt-48"
          : " transition-colors duration-500 flex flex-col px-10 pt-[10rem] py-10 items-start cursor-default xs:px-5 xs:pt-[10rem] sm:pt-[10rem] sm:px-[6rem] md:px-20 lg:px-28 xl:px-40 2xl:px-54 2xl:pt-48"
      }
    >
      <div
        data-aos="flip-up"
        className="w-full max_sm:flex max_sm:flex-col-reverse sm:flex sm:flex-col-reverse md:flex md:flex-col-reverse md:justify-center lg:flex lg:flex-row-reverse"
      >
        {/* ============== //MY IMAGE ============== */}
        <Zoom in={true} timeout={1000}>
          <div className="relative mx-auto bg-gradient-to-b object-contain w-80 h-80 overflow-hidden mb-4 md:h-96 md:w-96 max_sm:h-[220px] max_sm:w-[220px]">
            <Zoom in={true} timeout={1000}>
              <div
                className={
                  lightMode
                    ? "object-contain blueCoder  w-full h-full"
                    : "object-contain yellowCoder w-full h-full"
                }
              />
            </Zoom>
          </div>
        </Zoom>

        {/* ============== //MAIN INRTODUCTION ============== */}
        <div
          className={
            lightMode
              ? " md:flex md:flex-col md:items-start lg:flex lg:flex-col lg:justify-center"
              : " md:flex md:flex-col md:items-start lg:flex lg:flex-col lg:justify-center"
          }
        >
          <Slide in={true} direction="right" timeout={1000}>
            <div className="xs:mt-10 sm:mt-10">
              <div>
                <span
                  className={
                    lightMode
                      ? "text-teal-600 font-semibold text-2xl uppercase 2xl:text-3xl"
                      : "text-[#FEC45D] font-semibold text-2xl uppercase 2xl:text-3xl"
                  }
                >
                  front-end{" "}
                  <ReactTyped
                    strings={["Developer | IT Support"]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                  />
                </span>{" "}
              </div>
              <p
                className={
                  lightMode
                    ? "text-black font-poppins font-normal text-lg leading-relaxed lg:text-xl lg:pr-10 xl:text-2xl 2xl:text-2xl"
                    : "text-white font-poppins font-normal text-lg leading-relaxed lg:text-xl lg:pr-10 xl:text-2xl 2xl:text-2xl"
                }
              >
                Building responsive web interfaces and supporting real-world
                systems used in daily operations.
                <br />
                <span
                  className={
                    lightMode
                      ? "text-teal-600 font-semibold "
                      : "text-[#FEC45D] font-semibold "
                  }
                >
                  BSIT{" "}
                </span>{" "}
                from the{" "}
                <span
                  className={
                    lightMode
                      ? "text-teal-600 font-semibold "
                      : "text-[#FEC45D] font-semibold "
                  }
                >
                  University of the Cordilleras.
                </span>
                <br />
                Experience in web development, technical support, and
                administrative tools. Open to entry-level roles and hands-on
                projects.
              </p>
            </div>
          </Slide>
          <div className="w-full go sm:flex sm:justify-start justify-start md:flex md:justify-start ">
            <a
              href="/RESUME - Micklay_Vince.pdf"
              className={
                lightMode
                  ? "flex items-center font-poppins font-normal text-xs text-teal-600 leading-[4rem] hover:opacity-70 hover:scale-110 duration-300 2xl:text-[16px] 2xl:mt-4"
                  : "flex items-center font-poppins font-normal text-xs text-[#FEC45D] leading-[4rem] hover:opacity-70 hover:scale-110 duration-300 2xl:text-[16px] 2xl:mt-4"
              }
            >
              CHECK MY RESUME <MdArrowOutward className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
