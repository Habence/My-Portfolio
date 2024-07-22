import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col px-10 pb-10 items-start cursor-default xs:px-12 md:px-20 sm:px- bg-black ">
      <div className="mt-10 ">
        <p className="text-white font-semibold text-4xl ">
          Contact <span className="text-[#FEC45D]"> Me</span>
        </p>
      </div>
      <div className="border-b-2 border-yellow-400 w-full mt-4"></div>

      <div className="mt-6 flex flex-col gap-4 px-4">
        <div className="flex items-center font-poppins font-normal text-md text-[#FEC45D] leading-[4rem] hover:opacity-70 hover:scale-110 duration-300">
          <p>Send an Email</p>
          <FaArrowRight className="ml-2" />
        </div>
        <div className=" flex shadow-2xl rounded-md gap-4  p-4 bg-[#38343c] hover:scale-105 hover:opacity-70 duration-300">
          <MdEmail size={30} color="#FEC45D" className="" />
          <div className="mt-1">
            <p className="text-[white] font-poppins font-normal">
              micklayvince@gmail.com
            </p>
          </div>
        </div>

        <div className=" flex shadow-2xl rounded-md gap-4 p-4 bg-[#38343c] hover:scale-105 hover:opacity-70 duration-300">
          <FaPhoneAlt size={30} color="#FEC45D" className="" />
          <div className="mt-1">
            <p className="text-[white] font-poppins font-normal">
              +63 (908) 579-6392
            </p>
          </div>
        </div>

        <div className=" flex shadow-2xl rounded-md gap-4 p-4 bg-[#38343c] hover:scale-105 hover:opacity-70 duration-300">
          <FaLocationDot size={30} color="#FEC45D" className="" />
          <div className="mt-1">
            <p className="text-[white] font-poppins font-normal">
              Baguio City, Philippines
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex mt-8 justify-center gap-12 w-full px-6">
          <FaFacebookSquare size={30} color="#FEC45D" />
          <FaInstagram size={30} color="#FEC45D" />
          <FaTelegram size={30} color="#FEC45D" />
          <FaLinkedin size={30} color="#FEC45D" />
        </div>
      </div>
      <div className="border-b-2 border-yellow-400 w-full mt-20"></div>
      <div className="flex justify-center w-full py-10">
        <p className="font-poppins font-semibold text-[#FEC45D] text-2xl">
          "Thanks for Scrolling"
        </p>
      </div>
    </div>
  );
};

export default Contact;
