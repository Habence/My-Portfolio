import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import Slide from "@mui/material/Slide";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  //When nav is true (menu is open), it adds the overflow-hidden
  //class to the <body> element, preventing scrolling.
  if (nav) {
    document.body.style.overflowY = "hidden";

    //When nav is false (menu is closed), it removes the overflow-hidden
    //class from the <body> element, allowing scrolling.
  } else {
    document.body.style.overflowY = "scroll";
  }

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
          <li className="relative group hover:scale-110 duration-300 hover:text-[#FEC45D]">
            <a href="#work">Work</a>
            <span className="block mx-auto mt-1 w-0 h-0.5 bg-[#FEC45D] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group hover:scale-110 duration-300 hover:text-[#FEC45D]">
            <a href="#skill">Skills</a>
            <span className="block mx-auto mt-1 w-0 h-0.5 bg-[#FEC45D] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group hover:scale-110 duration-300 hover:text-[#FEC45D]">
            <a href="#about">About</a>
            <span className="block mx-auto mt-1 w-0 h-0.5 bg-[#FEC45D] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group hover:scale-110 duration-300 hover:text-[#FEC45D]">
            <a href="#contact">Contact</a>
            <span className="block mx-auto mt-1 w-0 h-0.5 bg-[#FEC45D] transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </Slide>

      {nav && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-40 md:hidden ">
          <Slide in={true} direction="down" timeout={1000}>
            <div className="absolute top-[9rem] left-2 ">
              <p className="text-white font-bold text-2xl tracking-widest -rotate-90">
                <span className="text-yellow-400"> MENU</span>
              </p>
            </div>
          </Slide>

          <div className="fixed top-28 bottom-0">
            <Slide in={true} timeout={1000}>
              <ul className="space-y-10 text-5xl font-bold">
                <Slide in={true} direction="right" timeout={1000}>
                  <li>
                    <a
                      href="#work"
                      className="cursor-pointer"
                      onClick={handleNav}
                    >
                      WORK
                    </a>
                  </li>
                </Slide>
                <Slide in={true} direction="left" timeout={1000}>
                  <li>
                    <a
                      href="#about"
                      className="cursor-pointer"
                      onClick={handleNav}
                    >
                      SKILL
                    </a>
                  </li>
                </Slide>
                <Slide in={true} direction="right" timeout={1000}>
                  <li>
                    <a
                      href="#about"
                      className="cursor-pointer"
                      onClick={handleNav}
                    >
                      ABOUT
                    </a>
                  </li>
                </Slide>
                <Slide in={true} direction="left" timeout={1000}>
                  <li>
                    <a
                      href="#contact"
                      className="cursor-pointer"
                      onClick={handleNav}
                    >
                      CONTACT
                    </a>
                  </li>
                </Slide>
              </ul>
            </Slide>
          </div>
          <div className="mt-[20rem] flex flex-col gap-4 items-center">
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
