import React, { useEffect } from "react";
import { ReactTyped } from "react-typed";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import bence from "../../public/bence.png";
import film from "../../public/film.png";
import finance from "../../public/finance.png";
import perfume from "../../public/perfume.png";
import notes from "../../public/notes.png";
import html from "../../public/html-5.png";
import css from "../../public/css-3.png";
import js from "../../public/js.png";
import react from "../../public/react.png";
import firebase from "../../public/firebase.png";
import mysql from "../../public/mysql.png";
import php from "../../public/php.png";
import git from "../../public/git.png";
import vscode from "../../public/vscode.png";
import Zoom from "@mui/material/Zoom";
import Slide from "@mui/material/Slide";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col px-10 py-10 items-start cursor-default xs:px-12 md:px-20 sm:px-24 lg:px-28 xl:px-40 2xl:px-56">
      <div className=" w-full md:flex md:flex-col md:justify-center lg:flex lg:flex-row-reverse">
        <Zoom in={true} timeout={1000}>
          {/* ============== //MY IMAGE ============== */}
          <div className="relative mx-auto bg-gradient-to-b object-contain rounded-full w-80 h-80  overflow-hidden mb-4 md:h-96 md:w-96 max_sm:h-[220px] max_sm:w-[220px]">
            <img src={bence} className="object-cover w-full h-full" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-lg"></div>
          </div>
        </Zoom>

        {/* ============== //MAIN INRTODUCTION ============== */}
        <div className="lg:flex lg:flex-col lg:justify-center">
          <Slide in={true} timeout={1000}>
            <p className="text-white font-poppins font-normal text-lg leading-relaxed lg:text-xl lg:pr-10 xl:text-2xl 2xl:text-2xl">
              <span className="text-[#FEC45D] font-semibold text-2xl uppercase 2xl:text-3xl">
                {" "}
                Web{" "}
                <ReactTyped
                  strings={["Developer"]}
                  typeSpeed={200}
                  backSpeed={200}
                  loop
                />
              </span>{" "}
              based in Baguio City, Philippines.
              <br />
              Bachelor of Science in IT from the{" "}
              <span className="text-[#FEC45D] font-semibold">
                University of the Cordilleras
              </span>
              .
              <br />
              Passionate about creating{" "}
              <span className="text-[#FEC45D] font-semibold">
                dynamic and responsive websites
              </span>
              .
              <br />
              Seeking an{" "}
              <span className="text-[#FEC45D] font-semibold">
                entry-level role
              </span>{" "}
              to work on{" "}
              <span className="text-[#FEC45D]  font-semibold">
                meaningful projects
              </span>
              .
            </p>
          </Slide>
          <a
            href="/RESUME - Micklay_Vince.pdf"
            className="flex items-center font-poppins font-normal text-xs text-[#FEC45D] leading-[4rem] hover:opacity-70 hover:scale-110 duration-300 2xl:text-[16px] 2xl:mt-4"
          >
            CHECK MY RESUME <MdArrowOutward className="ml-1" />
          </a>
        </div>
      </div>

      {/* ============== //SELECTED WORKS SECTION ============== */}
      <div className="mt-10">
        <Slide in={true} timeout={1000}>
          <section id="work">
            <p
              data-aos="fade-right"
              className="text-white font-semibold text-4xl xl:text-6xl"
            >
              Selected <span className="text-[#FEC45D]"> Works</span>
            </p>
          </section>
        </Slide>
      </div>
      <Slide in={true} direction="up" timeout={1000}>
        <div
          data-aos="slide-up"
          className="border-b-2 border-[#FEC45D] w-full my-8"
        ></div>
      </Slide>
      <div className="flex flex-col mt-10 items-center gap-8 text-white font-poppins font-normal md:flex md:flex-col md:flex-wrap lg:flex lg:flex-row lg:flex-wrap lg:justify-between xl:justify-between xl:grid xl:grid-cols-2 2xl:gap-24 2xl:grid 2xl:grid-cols-2">
        <div className="w-full shadow-xl rounded-xl hover:scale-105 hover:opacity-80 duration-300 cursor-default md:h-[24rem] lg:w-[23rem] lg:h-[27rem] xl:w-[29rem] 2xl:w-[33rem]">
          <div data-aos="fade-down">
            <Zoom in={true} timeout={1000}>
              <img
                src={film}
                alt="film"
                className="rounded-xl cursor-default h-72 w-full object-cover md:h-[20rem] lg:h-[22rem] lg:object-cover"
              />
            </Zoom>
            <Slide in={true} direction="right" timeout={1000}>
              <p className="ml-2 my-2 2xl:text-xl">Movie Website</p>
            </Slide>
            <a
              href="https://film-project-indol.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-[#FEC45D] font-poppins flex font-normal text-xs uppercase hover:scale-x-105 duration-300 cursor-pointer 2xl:text-base"
            >
              View Website <FaArrowRight className="ml-1 mt-[0.10rem]" />
            </a>
          </div>
        </div>

        <div className="w-full shadow-xl rounded-xl hover:scale-105 hover:opacity-80 duration-300 cursor-default md:h-[24rem] lg:w-[23rem] lg:h-[27rem] xl:w-[29rem] 2xl:w-[33rem]">
          <div data-aos="fade-down">
            <Zoom in={true} timeout={1000}>
              <img
                src={finance}
                alt="finance"
                className="rounded-xl cursor-default h-72 w-full object-cover md:h-[20rem] lg:h-[22rem] lg:object-cover"
              />
            </Zoom>
            <Slide in={true} direction="left" timeout={1000}>
              <p className="ml-2 my-2 2xl:text-xl">Finance Website</p>
            </Slide>
            <a
              href="https://finance-project-pink.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-[#FEC45D] font-poppins flex font-normal text-xs uppercase hover:scale-x-105 duration-300 cursor-pointer 2xl:text-base"
            >
              View Website <FaArrowRight className="ml-1 mt-[0.10rem]" />
            </a>
          </div>
        </div>

        <div className="w-full shadow-xl rounded-xl hover:scale-105 hover:opacity-80 duration-300 cursor-default md:h-[24rem] lg:w-[23rem] lg:h-[27rem] xl:w-[29rem] 2xl:w-[33rem]">
          <div data-aos="fade-down">
            <Zoom in={true} timeout={1000}>
              <img
                src={perfume}
                alt="perfume"
                className="rounded-xl cursor-default h-72 w-full object-cover md:h-[20rem] lg:h-[22rem] lg:object-cover"
              />
            </Zoom>
            <Slide in={true} direction="right" timeout={1000}>
              <p className="ml-2 my-2 2xl:text-xl">Perfume Website</p>
            </Slide>
            <a
              href="https://perfume-rho.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-[#FEC45D] font-poppins flex font-normal text-xs uppercase hover:scale-x-105 duration-300 cursor-pointer 2xl:text-base"
            >
              View Website <FaArrowRight className="ml-1 mt-[0.10rem]" />
            </a>
          </div>
        </div>

        <div className="w-full shadow-xl rounded-xl hover:scale-105 hover:opacity-80 duration-300 cursor-default md:h-[24rem] lg:w-[23rem] lg:h-[27rem] xl:w-[29rem] 2xl:w-[33rem]">
          <div data-aos="fade-down">
            <Zoom in={true} timeout={1000}>
              <img
                src={notes}
                alt="notes"
                className="rounded-xl cursor-default h-72 w-full object-cover md:h-[20rem] lg:h-[22rem] lg:object-cover"
              />
            </Zoom>
            <Slide in={true} direction="left" timeout={1000}>
              <p className="ml-2 my-2 2xl:text-xl">Keeper Notes Website</p>
            </Slide>
            <a
              href="https://keepernotesbence.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-[#FEC45D] font-poppins flex font-normal text-xs uppercase hover:scale-x-105 duration-300 cursor-pointer 2xl:text-base"
            >
              View Website <FaArrowRight className="ml-1 mt-[0.10rem] " />
            </a>
          </div>
        </div>
      </div>

      {/* ============== //ABOUT ME SECTION ============== */}
      <div className="mt-10 2xl:mt-28">
        <Slide in={true} timeout={1000}>
          <section id="about">
            <p
              data-aos="fade-right"
              className="text-white font-semibold text-4xl xl:text-6xl"
            >
              About <span className="text-[#FEC45D]"> Me</span>
            </p>
          </section>
        </Slide>
      </div>
      <Slide in={true} direction="up" timeout={1000}>
        <div
          data-aos="fade-up"
          className="border-b-2 border-[#FEC45D] w-full my-8"
        ></div>
      </Slide>
      <div
        data-aos="fade-right"
        className="mt-10 text-white font-poppins font-normal text-xs md:pr-[10rem] leading-relaxed lg:text-base lg:pr-[15rem] 2xl:pr-[20rem] 2xl:text-lg"
      >
        <Zoom in={true} timeout={1000}>
          <p className="">
            I am Vince Micklay, a Web Developer based in Baguio City,
            Philippines, holding a Bachelor of Science in Information Technology
            (BSIT) from the University of the Cordilleras. I specialize in
            creating dynamic and responsive websites using JavaScript, HTML,
            CSS, and ReactJS. My experience includes developing mobile apps with
            Java and Android Studio, and I have successfully implemented a QR
            code transaction process for a recycling app. I interned as a Junior
            Backend Developer at BitShares Labs Inc., where I enhanced
            interactions within the Cryptosavers Club through a Discord chatbot
            utilizing neural networks.
          </p>
        </Zoom>
        <br />
        <Zoom in={true} timeout={1000}>
          <p>
            I am committed to continuous learning and professional growth,
            having attended various seminars and courses to expand my skill set.
            Proficient in version control with Git and database management with
            MySQL, I am eager to apply my foundational programming skills in an
            entry-level role. My goal is to contribute to meaningful projects
            and collaborate with experienced professionals to drive digital
            transformation and innovative solutions.
          </p>
        </Zoom>
      </div>
      <a
        href="/RESUME - Micklay_Vince.pdf"
        className="flex items-center font-poppins font-normal text-xs text-yellow-200 leading-[4rem] hover:opacity-70 hover:scale-110 duration-300 2xl:text-[14px]"
      >
        CHECK MY RESUME <MdArrowOutward className="ml-1" />
      </a>

      {/* ============== //SKILLS SECTION ============== */}
      <div data-aos="fade-right" className="mt-10 2xl:mt-28 ">
        <Slide in={true} timeout={1000}>
          <p className="text-white font-semibold text-4xl xl:text-6xl">
            Skills & <span className="text-[#FEC45D]"> Knowledge</span>
          </p>
        </Slide>
      </div>
      <Slide in={true} direction="up" timeout={1000}>
        <div
          data-aos="fade-up"
          className="border-b-2 border-[#FEC45D] w-full my-8"
        ></div>
      </Slide>
      <div
        data-aos="fade-down"
        className="flex flex-wrap flex-row gap-4 mt-10 justify-between"
      >
        <div className="flex flex-col text-white font-poppins font-normal shadow-xl bg-gray-700 rounded-xl hover:scale-105 hover:bg-[#FEC45D] duration-300">
          <div className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4">
            <div className="flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img src={html} alt="" className="h-10 xl:h-[6rem]" />
              </Zoom>
              <Zoom in={true}>
                <img src={css} alt="" className="h-10 xl:h-[6rem]" />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                Html & CSS
              </p>
            </Slide>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 text-white font-poppins font-normal shadow-xl bg-gray-700 rounded-xl hover:scale-105 hover:bg-[#FEC45D] duration-300">
          <div className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4">
            <div className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img src={js} alt="" className="h-10 xl:h-[6rem]" />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                JavaScript
              </p>
            </Slide>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 text-white font-poppins font-normal shadow-xl bg-gray-700 rounded-xl hover:scale-105 hover:bg-[#FEC45D] duration-300">
          <div className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4">
            <div className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img src={react} alt="" className="h-10 xl:h-[6rem]" />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                ReactJS
              </p>
            </Slide>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 text-white font-poppins font-normal shadow-xl bg-gray-700 rounded-xl hover:scale-105 hover:bg-[#FEC45D] duration-300">
          <div className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4">
            <div className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img src={firebase} alt="" className="h-10 xl:h-[6rem]" />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                Firebase
              </p>
            </Slide>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 text-white font-poppins font-normal shadow-xl bg-gray-700 rounded-xl hover:scale-105 hover:bg-[#FEC45D] duration-300">
          <div className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4">
            <div className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img src={mysql} alt="" className="h-10 xl:h-[6rem]" />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                MySQL
              </p>
            </Slide>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 text-white font-poppins font-normal shadow-xl bg-gray-700 rounded-xl hover:scale-105 hover:bg-[#FEC45D] duration-300">
          <div className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4">
            <div className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img src={php} alt="" className="h-10 xl:h-[6rem]" />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                PHP
              </p>
            </Slide>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 text-white font-poppins font-normal shadow-xl bg-gray-700 rounded-xl hover:scale-105 hover:bg-[#FEC45D] duration-300">
          <div className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4">
            <div className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img src={git} alt="" className="h-10 xl:h-[6rem]" />
              </Zoom>
            </div>
            <Slide in={true} timeout={1000}>
              <p className="text-center mt-2 font-poppins font-semibold text-xs xl:text-2xl">
                Git Source Control
              </p>
            </Slide>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 text-white font-poppins font-normal shadow-xl bg-gray-700 rounded-xl hover:scale-105 hover:bg-[#FEC45D] duration-300">
          <div className="w-32 h-32 py-9 flex flex-col cursor-default xl:w-[20rem] xl:h-[20rem] xl:p-24 xl:gap-4">
            <div className=" flex justify-center">
              <Zoom in={true} timeout={1000}>
                <img src={vscode} alt="" className="h-10 xl:h-[6rem]" />
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

export default Hero;
