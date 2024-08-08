import React, { useEffect, useRef, useState } from "react";
import skillsImages from "../assets/skillsImages";
import Zoom from "@mui/material/Zoom";
import Slide from "@mui/material/Slide";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = ({ lightMode }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on every render to ensure animations work correctly
  });

  return (
    <div
      className={
        lightMode
          ? " bg-[#FFFFF0] transition-colors duration-500 flex flex-col px-10  items-start cursor-default xs:px-5 sm:px-[6rem] md:px-20 lg:px-28 xl:px-40 2xl:px-54 "
          : " transition-colors duration-500 flex flex-col px-10  items-start cursor-default xs:px-5 sm:px-[6rem] md:px-20 lg:px-28 xl:px-40 2xl:px-54 "
      }
    >
      {/* ============== //SKILLS SECTION ============== */}
      <div data-aos="fade-right" className="mt-10 2xl:mt-28 ">
        <Slide in={true} timeout={1000}>
          <section id="skill">
            <p
              className={
                lightMode
                  ? "text-black font-semibold text-4xl xl:text-6xl"
                  : "text-white font-semibold text-4xl xl:text-6xl"
              }
            >
              Skills &{" "}
              <span className={lightMode ? "text-teal-600" : "text-[#FEC45D]"}>
                {" "}
                Tools
              </span>
            </p>
          </section>
        </Slide>
      </div>
      <Slide in={true} direction="up" timeout={1000}>
        <div
          data-aos="fade-up"
          className={
            lightMode
              ? "border-b-2 border-teal-600 w-full my-8"
              : "border-b-2 border-[#FEC45D] w-full my-8"
          }
        ></div>
      </Slide>
      <div
        data-aos="fade-down"
        className="flex flex-wrap flex-row gap-4 mt-10 justify-between"
      >
        <div
          className={
            lightMode
              ? "flex flex-col text-black font-poppins font-normal shadow-lg rounded-xl hover:scale-105 duration-300"
              : "flex flex-col text-white font-poppins font-normal shadow-xl  border-y-2 bg-black bg-opacity-35 border-gray-500 rounded-xl hover:scale-105 hover:bg-black hover:bg-opacity-50 hover:border-black duration-300"
          }
        >
          <div
            data-aos="fade-right"
            className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4"
          >
            <div data-aos="fade-right" className="flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img
                  src={skillsImages[0]}
                  alt="hml"
                  className="h-10 xl:h-[6rem]"
                />
              </Zoom>
              <Zoom in={true}>
                <img
                  src={skillsImages[1]}
                  alt="css"
                  className="h-10 xl:h-[6rem]"
                />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                Html & CSS
              </p>
            </Slide>
          </div>
        </div>

        <div
          className={
            lightMode
              ? "flex flex-col text-black font-poppins font-normal shadow-lg rounded-xl hover:scale-105 duration-300"
              : "flex flex-col text-white font-poppins font-normal shadow-xl border-y-2 bg-black bg-opacity-35 border-gray-500 rounded-xl hover:scale-105 hover:bg-black hover:bg-opacity-50 hover:border-black  duration-300"
          }
        >
          <div
            data-aos="fade-right"
            className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4"
          >
            <div data-aos="fade-right" className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img
                  src={skillsImages[2]}
                  alt=""
                  className="h-10 xl:h-[6rem]"
                />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                JavaScript
              </p>
            </Slide>
          </div>
        </div>

        <div
          className={
            lightMode
              ? "flex flex-col text-black font-poppins font-normal shadow-lg rounded-xl hover:scale-105 duration-300"
              : "flex flex-col text-white font-poppins font-normal shadow-xl border-y-2 bg-black bg-opacity-35 border-gray-500 rounded-xl hover:scale-105 hover:bg-black hover:bg-opacity-50 hover:border-black duration-300"
          }
        >
          <div
            data-aos="fade-right"
            className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4"
          >
            <div data-aos="fade-right" className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img
                  src={skillsImages[3]}
                  alt="react"
                  className="h-10 xl:h-[6rem]"
                />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                ReactJS
              </p>
            </Slide>
          </div>
        </div>

        <div
          className={
            lightMode
              ? "flex flex-col text-black font-poppins font-normal shadow-lg rounded-xl hover:scale-105 duration-300"
              : "flex flex-col text-white font-poppins font-normal shadow-xlborder border-y-2 bg-black bg-opacity-35 border-gray-500 rounded-xl hover:scale-105 hover:bg-black hover:bg-opacity-50 hover:border-black  duration-300"
          }
        >
          <div
            data-aos="fade-right"
            className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4"
          >
            <div data-aos="fade-right" className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img
                  src={skillsImages[4]}
                  alt="firebase"
                  className="h-10 xl:h-[6rem]"
                />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                Firebase
              </p>
            </Slide>
          </div>
        </div>

        <div
          className={
            lightMode
              ? "flex flex-col text-black font-poppins font-normal shadow-lg rounded-xl hover:scale-105 duration-300"
              : "flex flex-col text-white font-poppins font-normal shadow-xl border-y-2 bg-black bg-opacity-35 border-gray-500 rounded-xl hover:scale-105 hover:bg-black hover:bg-opacity-50 hover:border-black  duration-300"
          }
        >
          <div
            data-aos="fade-right"
            className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4"
          >
            <div data-aos="fade-right" className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img
                  src={skillsImages[5]}
                  alt="mysql"
                  className="h-10 xl:h-[6rem]"
                />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                MySQL
              </p>
            </Slide>
          </div>
        </div>

        <div
          className={
            lightMode
              ? "flex flex-col text-black font-poppins font-normal shadow-lg rounded-xl hover:scale-105 duration-300"
              : "flex flex-col text-white font-poppins font-normal shadow-xl border-y-2 bg-black bg-opacity-35 border-gray-500 rounded-xl hover:scale-105 hover:bg-black hover:bg-opacity-50 hover:border-black  duration-300"
          }
        >
          <div
            data-aos="fade-right"
            className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4"
          >
            <div data-aos="fade-right" className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img
                  src={skillsImages[6]}
                  alt="php"
                  className="h-10 xl:h-[6rem]"
                />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                PHP
              </p>
            </Slide>
          </div>
        </div>

        <div
          className={
            lightMode
              ? "flex flex-col text-black font-poppins font-normal shadow-lg rounded-xl hover:scale-105 duration-300"
              : "flex flex-col text-white font-poppins font-normal shadow-xl border-y-2 bg-black bg-opacity-35 border-gray-500 rounded-xl hover:scale-105 hover:bg-black hover:bg-opacity-50 hover:border-black  duration-300"
          }
        >
          <div
            data-aos="fade-right"
            className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4"
          >
            <div data-aos="fade-right" className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img
                  src={skillsImages[7]}
                  alt="git"
                  className="h-10 xl:h-[6rem]"
                />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                Git Source Control
              </p>
            </Slide>
          </div>
        </div>

        <div
          className={
            lightMode
              ? "flex flex-col text-black font-poppins font-normal shadow-lg rounded-xl hover:scale-105 duration-300"
              : "flex flex-col text-white font-poppins font-normal shadow-xl border-y-2 bg-black bg-opacity-35 border-gray-500 rounded-xl hover:scale-105 hover:bg-black hover:bg-opacity-50 hover:border-black duration-300"
          }
        >
          <div
            data-aos="fade-right"
            className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4"
          >
            <div data-aos="fade-right" className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img
                  src={skillsImages[8]}
                  alt=""
                  className="h-10 xl:h-[6rem]"
                />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                Visual Studio <br />
                Code
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
