import React, { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import finance from "../../public/finance.png";
import perfume from "../../public/perfume.png";
import film from "../../public/film.png";
import notes from "../../public/notes.png";
import skillsImages from "../assets/skillsImages";
import Zoom from "@mui/material/Zoom";
import Slide from "@mui/material/Slide";
import AOS from "aos";
import FullViewImage from "../FullViewImages/FullViewImage";
import "aos/dist/aos.css";
import "../index.css";

const Hero = ({ lightMode }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

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
      id="home"
      className={
        lightMode
          ? "bg-[#FFFFF0] transition-colors duration-500 flex flex-col px-10 pt-[10rem] py-10 items-start cursor-default xs:px-5 xs:pt-[10rem] sm:px-24 md:px-20  lg:px-28 xl:px-40 2xl:px-56 2xl:pt-48"
          : " transition-colors duration-500 flex flex-col px-10 pt-[10rem] py-10 items-start cursor-default xs:px-5 xs:pt-[10rem] sm:pt-[10rem] sm:px-[6rem] md:px-20 lg:px-28 xl:px-40 2xl:px-56 2xl:pt-48"
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
              <p
                className={
                  lightMode
                    ? "text-black font-poppins font-normal text-lg leading-relaxed lg:text-xl lg:pr-10 xl:text-2xl 2xl:text-2xl"
                    : "text-white font-poppins font-normal text-lg leading-relaxed lg:text-xl lg:pr-10 xl:text-2xl 2xl:text-2xl"
                }
              >
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
                      strings={["Developer"]}
                      typeSpeed={40}
                      backSpeed={40}
                      loop
                    />
                  </span>{" "}
                </div>
                based in Baguio City, Philippines.
                <br />
                Bachelor of Science in IT from the{" "}
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
                Passionate about creating{" "}
                <span
                  className={
                    lightMode
                      ? "text-teal-600 font-semibold "
                      : "text-[#FEC45D] font-semibold "
                  }
                >
                  dynamic and responsive websites.
                </span>
                <br />
                Seeking an{" "}
                <span
                  className={
                    lightMode
                      ? "text-teal-600 font-semibold "
                      : "text-[#FEC45D] font-semibold "
                  }
                >
                  entry-level role
                </span>{" "}
                to work on{" "}
                <span
                  className={
                    lightMode
                      ? "text-teal-600 font-semibold "
                      : "text-[#FEC45D] font-semibold "
                  }
                >
                  meaningful projects.
                </span>
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

      {/* ============== //SELECTED WORKS SECTION ============== */}
      <div className="mt-10">
        <Slide in={true} timeout={1000}>
          <section id="work">
            <p
              data-aos="fade-right"
              className={
                lightMode
                  ? "text-black font-semibold text-4xl xl:text-6xl"
                  : "text-white font-semibold text-4xl xl:text-6xl"
              }
            >
              Selected{" "}
              <span className={lightMode ? "text-teal-600" : "text-[#FEC45D]"}>
                {" "}
                Works
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

export default Hero;
