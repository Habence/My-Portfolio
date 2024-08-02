import React, { useEffect, useRef, useState } from "react";
import Zoom from "@mui/material/Zoom";
import Slide from "@mui/material/Slide";
import AOS from "aos";
import { MdArrowOutward } from "react-icons/md";

const About = ({ lightMode }) => {
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
          ? " bg-[#FFFFF0] cursor-default transition-colors duration-500 flex flex-col px-10  items-start  xs:px-5 sm:px-[6rem] md:px-20 lg:px-28 xl:px-40 2xl:px-54 "
          : " transition-colors duration-500 flex flex-col px-10  items-start cursor-default xs:px-5 sm:px-[6rem] md:px-20 lg:px-28 xl:px-40 2xl:px-54 "
      }
    >
      {/* ============== //ABOUT ME SECTION ============== */}
      <div className="mt-10 2xl:mt-28">
        <Slide in={true} timeout={1000}>
          <section id="about">
            <p
              data-aos="fade-right"
              className={
                lightMode
                  ? "text-black font-semibold text-4xl xl:text-6xl"
                  : "text-white font-semibold text-4xl xl:text-6xl"
              }
            >
              About{" "}
              <span className={lightMode ? "text-teal-600" : "text-[#FEC45D]"}>
                {" "}
                Me
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
        data-aos="slide-up"
        className={
          lightMode
            ? "mt-10 inner-carousel text-black font-poppins font-normal text-xs md:pr-[10rem] leading-relaxed lg:text-base lg:pr-[15rem] 2xl:pr-[20rem] 2xl:text-lg"
            : "mt-10 inner-carousel text-white rounded-lg font-poppins font-normal text-xs md:pr-[10rem] leading-relaxed lg:text-base lg:pr-[15rem] 2xl:pr-[20rem] 2xl:text-lg"
        }
      >
        <Zoom in={true} timeout={1000}>
          <p>
            As a seasoned Web Developer based in Baguio City, Philippines, I
            hold a Bachelor of Science in Information Technology (BSIT) from the
            University of the Cordilleras. I specialize in crafting dynamic and
            responsive websites using JavaScript, HTML, CSS, and ReactJS. My
            expertise extends to mobile app development with Java and Android
            Studio, where I collaboratively implemented a QR code transaction
            system for a recycling app as part of our capstone project.
            Additionally, my internship as a Junior Backend Developer at
            BitShares Labs Inc. honed my skills in enhancing user interactions
            through a Discord chatbot powered by neural networks.
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
        className={
          lightMode
            ? "flex items-center font-poppins font-normal text-xs text-teal-600 leading-[4rem] hover:opacity-70 hover:scale-110 duration-300 2xl:text-[16px] 2xl:mt-4"
            : "flex items-center font-poppins font-normal text-xs text-[#FEC45D] leading-[4rem] hover:opacity-70 hover:scale-110 duration-300 2xl:text-[16px] 2xl:mt-4"
        }
      >
        CHECK MY RESUME <MdArrowOutward className="ml-1" />
      </a>
    </div>
  );
};

export default About;
