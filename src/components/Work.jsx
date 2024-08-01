import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import finance from "../../public/finance.png";
import perfume from "../../public/perfume.png";
import film from "../../public/film.png";
import notes from "../../public/notes.png";
import Zoom from "@mui/material/Zoom";
import Slide from "@mui/material/Slide";
import AOS from "aos";
import "aos/dist/aos.css";
import FullViewImage from "../FullViewImages/FullViewImage";

const Work = ({ lightMode }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on every render to ensure animations work correctly
  });

  const [isFullView, setIsFullView] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsFullView(true);
  };

  const handleClose = () => {
    setIsFullView(false);
  };

  return (
    <div
      className={
        lightMode
          ? " bg-[#FFFFF0] transition-colors duration-500 flex flex-col px-10  items-start cursor-default xs:px-5 sm:px-[6rem] md:px-20 lg:px-28 xl:px-40 2xl:px-54 "
          : " transition-colors duration-500 flex flex-col px-10  items-start cursor-default xs:px-5 sm:px-[6rem] md:px-20 lg:px-28 xl:px-40 2xl:px-54 "
      }
    >
      {/* ============== //SELECTED PROJECTS SECTION ============== */}
      <div className="mt-10">
        <Slide in={true} timeout={1000}>
          <section id="project">
            <p
              data-aos="fade-right"
              className={
                lightMode
                  ? "text-black font-semibold text-4xl xl:text-6xl"
                  : "text-white font-semibold text-4xl xl:text-6xl"
              }
            >
              Proj
              <span className={lightMode ? "text-teal-600" : "text-[#FEC45D]"}>
                ects
              </span>
            </p>
          </section>
        </Slide>
      </div>
      <Slide in={true} direction="up" timeout={2000}>
        <div
          data-aos="slide-up"
          className={
            lightMode
              ? "border-b-2 border-teal-600 w-full my-8"
              : "border-b-2 border-[#FEC45D] w-full my-8"
          }
        ></div>
      </Slide>
      <div
        className={
          lightMode
            ? "flex flex-col mt-10 items-center gap-8 text-black font-poppins font-normal md:flex md:flex-col md:flex-wrap lg:flex lg:flex-row lg:flex-wrap lg:justify-between xl:justify-between xl:grid xl:grid-cols-2 2xl:gap-24 2xl:grid 2xl:grid-cols-2"
            : "flex flex-col mt-10 items-center gap-8  text-white font-poppins font-normal md:flex md:flex-col md:flex-wrap lg:flex lg:flex-row lg:flex-wrap lg:justify-between xl:justify-between xl:grid xl:grid-cols-2 2xl:gap-24 2xl:grid 2xl:grid-cols-2"
        }
      >
        <div
          className={
            lightMode
              ? "w-full border-b-2  backdrop-blur-xs shadow-xl rounded-xl hover:scale-105 hover:opacity-80 duration-300 md:h-[24rem] lg:w-[23rem] lg:h-[27rem] xl:w-[29rem] 2xl:w-[33rem]"
              : "w-full border-b-2 border-white backdrop-blur-sm shadow-xl rounded-xl hover:scale-105 hover:opacity-80 duration-300 md:h-[24rem] lg:w-[23rem] lg:h-[27rem] xl:w-[29rem] 2xl:w-[33rem]"
          }
        >
          <div data-aos="flip-up">
            <Zoom in={true} timeout={1000}>
              <img
                onClick={() => handleImageClick(film)}
                src={film}
                alt="film"
                className="cursor-zoom-in h-72 w-full rounded-t-lg object-cover md:h-[20rem] lg:h-[22rem] lg:object-cover"
              />
            </Zoom>
            <Slide in={true} direction="right" timeout={1000}>
              <p className="ml-2 my-2 2xl:text-xl">Movie Website</p>
            </Slide>
            <a
              href="https://film-project-indol.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={
                lightMode
                  ? "ml-2 text-teal-600 font-poppins flex font-normal text-xs uppercase hover:scale-x-105 duration-300 cursor-pointer 2xl:text-base"
                  : "ml-2 text-[#FEC45D] font-poppins flex font-normal text-xs uppercase hover:scale-x-105 duration-300 cursor-pointer 2xl:text-base"
              }
            >
              View Website <FaArrowRight className="ml-1 mt-[0.10rem]" />
            </a>
          </div>
        </div>

        <div
          className={
            lightMode
              ? "w-full border-b-2  backdrop-blur-xs shadow-xl rounded-xl hover:scale-105 hover:opacity-80 duration-300 md:h-[24rem] lg:w-[23rem] lg:h-[27rem] xl:w-[29rem] 2xl:w-[33rem]"
              : "w-full border-b-2 border-white backdrop-blur-sm shadow-xl rounded-xl hover:scale-105 hover:opacity-80 duration-300 md:h-[24rem] lg:w-[23rem] lg:h-[27rem] xl:w-[29rem] 2xl:w-[33rem]"
          }
        >
          <div data-aos="flip-up">
            <Zoom in={true} timeout={1000}>
              <img
                onClick={() => handleImageClick(finance)}
                src={finance}
                alt="finance"
                className="cursor-zoom-in rounded-t-lg h-72 w-full object-cover md:h-[20rem] lg:h-[22rem] lg:object-cover"
              />
            </Zoom>
            <Slide in={true} direction="left" timeout={1000}>
              <p className="ml-2 my-2 2xl:text-xl">Finance Website</p>
            </Slide>
            <a
              href="https://finance-project-pink.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={
                lightMode
                  ? "ml-2 text-teal-600 font-poppins flex font-normal text-xs uppercase hover:scale-x-105 duration-300 cursor-pointer 2xl:text-base"
                  : "ml-2 text-[#FEC45D] font-poppins flex font-normal text-xs uppercase hover:scale-x-105 duration-300 cursor-pointer 2xl:text-base"
              }
            >
              View Website <FaArrowRight className="ml-1 mt-[0.10rem]" />
            </a>
          </div>
        </div>

        <div
          className={
            lightMode
              ? "w-full border-b-2  backdrop-blur-xs shadow-xl rounded-xl hover:scale-105 hover:opacity-80 duration-300 md:h-[24rem] lg:w-[23rem] lg:h-[27rem] xl:w-[29rem] 2xl:w-[33rem]"
              : "w-full border-b-2 border-white backdrop-blur-sm shadow-xl rounded-xl hover:scale-105 hover:opacity-80 duration-300 md:h-[24rem] lg:w-[23rem] lg:h-[27rem] xl:w-[29rem] 2xl:w-[33rem]"
          }
        >
          <div data-aos="flip-up">
            <Zoom in={true} timeout={1000}>
              <img
                onClick={() => handleImageClick(perfume)}
                src={perfume}
                alt="perfume"
                className="cursor-zoom-in rounded-t-lg h-72 w-full object-cover md:h-[20rem] lg:h-[22rem] lg:object-cover"
              />
            </Zoom>
            <Slide in={true} direction="right" timeout={1000}>
              <p className="ml-2 my-2 2xl:text-xl">Perfume Website</p>
            </Slide>
            <a
              href="https://perfume-rho.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={
                lightMode
                  ? "ml-2 text-teal-600 font-poppins flex font-normal text-xs uppercase hover:scale-x-105 duration-300 cursor-pointer 2xl:text-base"
                  : "ml-2 text-[#FEC45D] font-poppins flex font-normal text-xs uppercase hover:scale-x-105 duration-300 cursor-pointer 2xl:text-base"
              }
            >
              View Website <FaArrowRight className="ml-1 mt-[0.10rem]" />
            </a>
          </div>
        </div>

        <div
          className={
            lightMode
              ? "w-full border-b-2  backdrop-blur-xs shadow-xl rounded-xl hover:scale-105 hover:opacity-80 duration-300 md:h-[24rem] lg:w-[23rem] lg:h-[27rem] xl:w-[29rem] 2xl:w-[33rem]"
              : "w-full border-b-2 border-white backdrop-blur-sm shadow-xl rounded-xl hover:scale-105 hover:opacity-80 duration-300 md:h-[24rem] lg:w-[23rem] lg:h-[27rem] xl:w-[29rem] 2xl:w-[33rem]"
          }
        >
          <div data-aos="flip-up">
            <Zoom in={true} timeout={1000}>
              <img
                onClick={() => handleImageClick(notes)}
                src={notes}
                alt="notes"
                className="cursor-zoom-in rounded-t-lg h-72 w-full object-cover md:h-[20rem] lg:h-[22rem] lg:object-cover"
              />
            </Zoom>
            <Slide in={true} direction="left" timeout={1000}>
              <p className="ml-2 my-2 2xl:text-xl">Keeper Notes Website</p>
            </Slide>
            <a
              href="https://keepernotesbence.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={
                lightMode
                  ? "ml-2 text-teal-600 font-poppins flex font-normal text-xs uppercase hover:scale-x-105 duration-300 cursor-pointer 2xl:text-base"
                  : "ml-2 text-[#FEC45D] font-poppins flex font-normal text-xs uppercase hover:scale-x-105 duration-300 cursor-pointer 2xl:text-base"
              }
            >
              View Website <FaArrowRight className="ml-1 mt-[0.10rem] " />
            </a>
          </div>
        </div>
      </div>
      {/* Full View Image */}
      {isFullView && (
        <FullViewImage
          src={currentImage}
          alt="Full View"
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Work;
