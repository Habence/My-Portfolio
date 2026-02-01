import React, { useEffect, useState, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Slide from "@mui/material/Slide";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import emailjs from "@emailjs/browser";

import Swal from "sweetalert2";

const Contact = ({ lightMode, setLightMode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const googleMapsUrl =
    "https://www.google.com/maps/place/Baguio,+Benguet/data=!4m2!3m1!1s0x3391a16879def13f:0x8edef534be3a75c0?sa=X&ved=1t:242&ictx=111";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on every render to ensure animations work correctly
  });

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
      setIsLoading(false);
    }, 500); // Brief delay to show the loading spinner
  };

  const form = useRef();

  const handleSubmit = () => {
    setSubmit(true);
    Swal.fire({
      title: "Sending...",
      customClass: {
        popup: lightMode ? "swal2-popup-light" : "swal2-popup-dark",
      },
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Message Sent",
        text: "Thanks!",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: lightMode ? "swal2-popup-light" : "swal2-popup-dark",
        },
      });
      setIsLoading(false);
    }, 1000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_y2nr9qy", "template_qaw6ukw", form.current, {
        publicKey: "h0YauzHnDTT0apT1E",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
    handleSubmit();
  };

  return (
    <div
      className={
        lightMode
          ? "flex flex-col px-10 pb-10 items-start cursor-default transition-colors duration-500 xs:px-5 md:px-20 sm:px- bg-slate-300 lg:px-28 xl:px-40 2xl:px-54"
          : "flex bg-opacity-55 flex-col px-10 pb-10 items-start cursor-default transition-colors duration-500  xs:px-5 md:px-20 sm:px- bg-[#31333b] lg:px-28 xl:px-40 2xl:px-54"
      }
    >
      {/* ============== //CONTACT SECTION ============== */}
      <section id="contact">
        <div data-aos="fade-right" className="mt-10 2xl:mt-24 ">
          <Slide in={true} timeout={1000}>
            <p
              className={
                lightMode
                  ? "text-black font-semibold text-4xl xl:text-6xl"
                  : "text-white font-semibold text-4xl xl:text-6xl"
              }
            >
              Contact{" "}
              <span className={lightMode ? "text-teal-600" : "text-[#FEC45D]"}>
                {" "}
                Me
              </span>
            </p>
          </Slide>
        </div>
      </section>
      <Slide in={true} direction="up" timeout={1000}>
        <div
          data-aos="fade-up"
          className={
            lightMode
              ? "border-b-2 border-teal-600 w-full mt-8"
              : "border-b-2 border-[#FEC45D] w-full mt-8"
          }
        ></div>
      </Slide>

      <div
        data-aos="fade-right"
        className={
          lightMode
            ? "flex items-center font-poppins font-normal text-md text-teal-600 leading-[4rem] hover:opacity-70 hover:scale-110 duration-300"
            : "flex items-center font-poppins font-normal text-md text-[#FEC45D] leading-[4rem] hover:opacity-70 hover:scale-110 duration-300"
        }
      >
        <p className="cursor-pointer">Send an Email</p>
        <MdArrowOutward className="ml-2" />
      </div>

      {/* =====================FILL-UP SECTION=================== */}

      <div className=" lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row w-full">
        <div
          data-aos="flip-up"
          className={
            lightMode
              ? "my-[2rem] p-8 w-full bg-slate-300 shadow-xl rounded-lg lg:w-[100%] 2xl:w-[100%] xl:w-[100%]"
              : "my-[2rem] p-8 w-full bg-[#38343c] bg-opacity-70 shadow-xl rounded-lg lg:w-[100%] 2xl:w-[100%] xl:w-[100%]"
          }
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 justify-start"
          >
            <input
              required
              name="user_name"
              type="text"
              placeholder="Full Name"
              className={
                lightMode
                  ? "rounded-lg shadow-lg p-4 w-full h-[3rem] text-gray-800 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  : "rounded-lg shadow-lg p-4 w-full h-[3rem] text-gray-800 focus:ring-2 focus:ring-[#FEC45D] focus:outline-none"
              }
            />
            <input
              required
              name="user_email"
              type="email"
              placeholder="E-mail (Your Email)"
              className={
                lightMode
                  ? "rounded-lg shadow-lg p-4 w-full h-[3rem] text-gray-800 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  : "rounded-lg shadow-lg p-4 w-full h-[3rem] text-gray-800 focus:ring-2 focus:ring-[#FEC45D] focus:outline-none"
              }
            />
            <input
              required
              name="subject"
              type="text"
              placeholder="Enter Subject"
              className={
                lightMode
                  ? "rounded-lg shadow-lg p-4 w-full h-[3rem] text-gray-800 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  : "rounded-lg shadow-lg p-4 w-full h-[3rem] text-gray-800 focus:ring-2 focus:ring-[#FEC45D] focus:outline-none"
              }
            />
            <textarea
              required
              name="message"
              cols={50}
              rows={7}
              placeholder="Leave a message"
              className={
                lightMode
                  ? "rounded-lg shadow-lg p-4 w-full h-[12rem] text-gray-800 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  : "rounded-lg shadow-lg p-4 w-full h-[12rem] text-gray-800 focus:ring-2 focus:ring-[#FEC45D] focus:outline-none"
              }
            ></textarea>

            <button
              type="submit"
              className={
                lightMode
                  ? "font-poppins font-semibold cursor-pointer rounded-lg h-[3rem] text-white bg-teal-600 shadow-lg w-[10rem] hover:bg-teal-600 transition-transform transform hover:scale-105 duration-300 self-center"
                  : "font-poppins font-semibold cursor-pointer rounded-lg h-[3rem] text-white bg-[#e5b14c] shadow-lg w-[10rem] hover:bg-[#e5b14c] transition-transform transform hover:scale-105 duration-300 self-center"
              }
            >
              Send Message
            </button>
          </form>
        </div>

        <div
          data-aos="flip-up"
          className="mt-6 flex flex-col gap-4 px-4 sm:flex-row sm:flex-wrap sm:justify-center lg:flex-col lg:justify-start lg:mt-8 xl:flex-col xl:justify-start xl:mt-8 2xl:flex-col 2xl:justify-start 2xl:mt-8 "
        >
          <div
            className={
              lightMode
                ? " flex shadow-2xl rounded-md gap-4  p-4 hover:scale-105 duration-300"
                : " flex shadow-2xl rounded-md gap-4  p-4 bg-[#38343c] bg-opacity-50 hover:scale-105 hover:opacity-70 duration-300"
            }
          >
            <MdEmail
              size={30}
              className={
                lightMode
                  ? "hover:animate-pulse text-teal-600"
                  : "hover:animate-pulse text-[#FEC45D]"
              }
            />
            <Slide in={true} direction="right" timeout={1000}>
              <div className="mt-1">
                <p
                  className={
                    lightMode
                      ? "text-black font-poppins font-normal"
                      : "text-[white] font-poppins font-normal"
                  }
                >
                  micklayvince@gmail.com
                </p>
              </div>
            </Slide>
          </div>

          <div
            className={
              lightMode
                ? " flex shadow-2xl rounded-md gap-4  p-4 hover:scale-105 duration-300"
                : " flex shadow-2xl rounded-md gap-4  p-4 bg-[#38343c] bg-opacity-50 hover:scale-105 hover:opacity-70 duration-300"
            }
          >
            <FaPhoneAlt
              size={30}
              className={
                lightMode
                  ? "hover:animate-pulse text-teal-600"
                  : "hover:animate-pulse text-[#FEC45D]"
              }
            />
            <Slide in={true} direction="right" timeout={1000}>
              <div className="mt-1">
                <p
                  className={
                    lightMode
                      ? "text-black font-poppins font-normal"
                      : "text-[white] font-poppins font-normal"
                  }
                >
                  +63 (908) 579-6392
                </p>
              </div>
            </Slide>
          </div>

          <div
            onClick={handleClick}
            className={
              lightMode
                ? " flex shadow-2xl rounded-md gap-4  p-4 hover:scale-105 duration-300 cursor-pointer"
                : " flex shadow-2xl rounded-md gap-4  p-4 bg-[#38343c] bg-opacity-50 hover:scale-105 duration-300 cursor-pointer"
            }
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters
                className={
                  lightMode
                    ? "animate-spin text-teal-600"
                    : "animate-spin text-[#FEC45D]"
                }
                size={30}
              />
            ) : (
              <FaLocationDot
                size={30}
                className={
                  lightMode
                    ? "hover:animate-bounce text-teal-600"
                    : "hover:animate-bounce text-[#FEC45D]"
                }
              />
            )}

            <Slide in={true} direction="right" timeout={1000}>
              <div className="mt-1">
                <p
                  className={
                    lightMode
                      ? "text-black font-poppins font-normal"
                      : "text-[white] font-poppins font-normal"
                  }
                >
                  Baguio City, Philippines
                </p>
              </div>
            </Slide>
          </div>
          <div data-aos="flip-up" className="flex flex-col text-center w-full">
            <Slide in={true} direction="up" timeout={1000}>
              <div className="flex my-8  gap-12 w-full px-6 sm:flex sm:justify-center">
                <FaFacebookSquare
                  size={30}
                  className={
                    lightMode
                      ? "hover:animate-spin text-teal-600"
                      : "hover:animate-spin text-[#FEC45D]"
                  }
                />
                <FaInstagram
                  size={30}
                  className={
                    lightMode
                      ? "hover:animate-spin text-teal-600"
                      : "hover:animate-spin text-[#FEC45D]"
                  }
                />
                <FaTelegram
                  size={30}
                  className={
                    lightMode
                      ? "hover:animate-spin text-teal-600"
                      : "hover:animate-spin text-[#FEC45D]"
                  }
                />
                <FaLinkedin
                  size={30}
                  className={
                    lightMode
                      ? "hover:animate-spin text-teal-600"
                      : "hover:animate-spin text-[#FEC45D]"
                  }
                />
              </div>
            </Slide>
          </div>
        </div>
      </div>

      {/* ======================END OF SECTION========================= */}

      <Slide in={true} direction="up" timeout={1000}>
        <div
          className={
            lightMode
              ? "border-b-2 border-teal-600 w-full mt-4"
              : "border-b-2 border-[#FEC45D] w-full mt-4"
          }
        ></div>
      </Slide>
      <div data-aos="flip-up" className="flex justify-center w-full py-10">
        <Slide in={true} direction="up" timeout={1000}>
          <p
            className={
              lightMode
                ? "font-poppins font-semibold text-teal-600 text-2xl md:text-4xl xl:text-6xl xl:p-10"
                : "font-poppins font-semibold text-[#FEC45D] text-2xl md:text-4xl xl:text-6xl xl:p-10"
            }
          >
            "Thanks for visiting"
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default Contact;
