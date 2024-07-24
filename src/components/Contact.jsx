import React, { useEffect, useState } from "react";
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

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const googleMapsUrl =
    "https://www.google.com/maps/place/Baguio,+Benguet/data=!4m2!3m1!1s0x3391a16879def13f:0x8edef534be3a75c0?sa=X&ved=1t:242&ictx=111";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
      setIsLoading(false);
    }, 500); // Brief delay to show the loading spinner
  };

  return (
    <div className="flex flex-col px-10 pb-10 items-start cursor-default xs:mt-14 xs:px-12 md:px-20 sm:px- bg-[#31333b] lg:px-28 xl:px-40 2xl:px-56">
      {/* ============== //CONTACT SECTION ============== */}
      <section id="contact">
        <div data-aos="fade-right" className="mt-10 2xl:mt-24 ">
          <Slide in={true} timeout={1000}>
            <p className="text-white font-semibold text-4xl xl:text-6xl">
              Contact <span className="text-[#FEC45D]"> Me</span>
            </p>
          </Slide>
        </div>
      </section>
      <Slide in={true} direction="up" timeout={1000}>
        <div
          data-aos="fade-up"
          className="border-b-2 border-[#FEC45D] w-full mt-8"
        ></div>
      </Slide>

      <div className="flex items-center font-poppins font-normal text-md text-[#FEC45D] leading-[4rem] hover:opacity-70 hover:scale-110 duration-300">
        <p className="cursor-pointer">Send an Email</p>
        <MdArrowOutward className="ml-2" />
      </div>

      <div
        data-aos="fade-up"
        className="mt-6 flex flex-col gap-4 px-4 sm:flex-row sm:flex-wrap sm:justify-center "
      >
        <div className=" flex shadow-2xl rounded-md gap-4  p-4 bg-[#38343c] hover:scale-105 hover:opacity-70 duration-300">
          <MdEmail size={30} color="#FEC45D" className="hover:animate-pulse" />
          <Slide in={true} direction="right" timeout={1000}>
            <div className="mt-1">
              <p className="text-[white] font-poppins font-normal">
                micklayvince@gmail.com
              </p>
            </div>
          </Slide>
        </div>

        <div className=" flex shadow-2xl rounded-md gap-4 p-4 bg-[#38343c] hover:scale-105 hover:opacity-70 duration-300">
          <FaPhoneAlt
            size={30}
            color="#FEC45D"
            className="hover:animate-pulse"
          />
          <Slide in={true} direction="right" timeout={1000}>
            <div className="mt-1">
              <p className="text-[white] font-poppins font-normal">
                +63 (908) 579-6392
              </p>
            </div>
          </Slide>
        </div>

        <div
          onClick={handleClick}
          className=" flex shadow-2xl cursor-pointer rounded-md gap-4 p-4 bg-[#38343c] hover:scale-105 hover:opacity-70 duration-300"
        >
          {isLoading ? (
            <AiOutlineLoading3Quarters
              className="animate-spin"
              size={30}
              color="#FEC45D"
            />
          ) : (
            <FaLocationDot
              size={30}
              color="#FEC45D"
              className=" hover:animate-bounce"
            />
          )}

          <Slide in={true} direction="right" timeout={1000}>
            <div className="mt-1">
              <p className="text-[white] font-poppins font-normal">
                Baguio City, Philippines
              </p>
            </div>
          </Slide>
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-col text-center w-full">
        <Slide in={true} direction="up" timeout={1000}>
          <div className="flex my-8  gap-12 w-full px-6 sm:flex sm:justify-center">
            <FaFacebookSquare
              size={30}
              color="#FEC45D"
              className="hover:animate-spin"
            />
            <FaInstagram
              size={30}
              color="#FEC45D"
              className="hover:animate-spin"
            />
            <FaTelegram
              size={30}
              color="#FEC45D"
              className="hover:animate-spin"
            />
            <FaLinkedin
              size={30}
              color="#FEC45D"
              className="hover:animate-spin"
            />
          </div>
        </Slide>
      </div>
      <Slide in={true} direction="up" timeout={1000}>
        <div className="border-b-2 border-[#FEC45D] w-full mt-4"></div>
      </Slide>
      <div data-aos="fade-up" className="flex justify-center w-full py-10">
        <Slide in={true} direction="up" timeout={1000}>
          <p className="font-poppins font-semibold text-[#FEC45D] text-2xl md:text-4xl xl:text-6xl xl:p-10">
            "Thanks for Scrolling"
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default Contact;
