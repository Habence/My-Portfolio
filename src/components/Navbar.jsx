import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Slide from "@mui/material/Slide";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex flex-row px-10 py-10 justify-between items-center relative cursor-default xs:px-12 max-sm:px-20 sm:px- md:px-20 lg:px-28 xl:px-40 2xl:px-56 ">
      <Slide in={true} direction="right" timeout={1000}>
        <p className="text-white font-poppins font-semibold text-xl">
          <span className="text-[#FEC45D]">Vince</span> Micklay
        </p>
      </Slide>
      <Slide in={true} direction="left" timeout={1000}>
        <div onClick={handleNav} className="cursor-pointer z-50 md:hidden">
          {nav ? (
            <IoIosClose size={30} color="white" />
          ) : (
            <HiMenuAlt3 size={32} color="white" />
          )}
        </div>
      </Slide>
      <Slide in={true} direction="left" timeout={1000}>
        <ul className="flex flex-row gap-10 font-poppins font-semibold text-white hidden md:flex">
          <li className="cursor-pointer hover:scale-110 hover:opacity-75 duration-300 ">
            Work
          </li>
          <li className="cursor-pointer hover:scale-110 hover:opacity-75 duration-300 ">
            About
          </li>
          <li className="cursor-pointer hover:scale-110 hover:opacity-75 duration-300 ">
            Contact
          </li>
        </ul>
      </Slide>

      {nav && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-40 md:hidden">
          <div className="absolute top-[22rem] left-2  transform -translate-y-52">
            <p className="text-white font-bold text-2xl tracking-widest -rotate-90">
              <span className="text-yellow-400"> MENU</span>
            </p>
          </div>

          <div className="fixed top-28 bottom-0">
            <Slide in={true} timeout={1000}>
              <ul className="space-y-10 text-5xl font-bold">
                <li className="cursor-pointer">WORK</li>
                <li className="cursor-pointer">ABOUT</li>
                <li className="cursor-pointer">CONTACT</li>
              </ul>
            </Slide>
          </div>
          <div className="mt-56 flex flex-col gap-4">
            <Slide in={true} direction="right" timeout={1000}>
              <p className="font-bold">micklayvince@gmail.com</p>
            </Slide>
            <Slide in={true} direction="left" timeout={1000}>
              <p className="font-bold">+63 (908) 579-6392</p>
            </Slide>
          </div>
          <Slide in={true} direction="up" timeout={1000}>
            <div className="flex gap-5 mt-8">
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTelegram size={30} />
              <FaLinkedin size={30} />
            </div>
          </Slide>
        </div>
      )}
    </div>
  );
};

export default Navbar;
