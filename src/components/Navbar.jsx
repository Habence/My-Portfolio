import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import Slide from "@mui/material/Slide";

const Navbar = ({ lightMode, setLightMode }) => {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [nav]);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset; // Get the current scroll position
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10; // Determine if the navbar should be visible

      setPrevScrollPos(currentScrollPos); // Update the previous scroll position
      setVisible(visible); // Update the visibility state
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => window.removeEventListener("scroll", handleScroll); // Clean up the event listener
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed w-full  z-50 ${
        visible
          ? "translate-y-0 transition-transform duration-300"
          : " transition-transform duration-300 -translate-y-full"
      } ${
        lightMode
          ? "bg-[#FFFFF0] transition-colors duration-500"
          : "backdrop-blur-sm bg-black bg-opacity-40 bg-blur  transition-colors duration-500"
      } ${lightMode ? "text-black" : "text-white"}`}
    >
      <div
        className={
          lightMode
            ? "flex flex-row px-10 py-5 justify-between items-center relative cursor-default xs:px-5 max-sm:px-20 sm:px- md:px-20 lg:px-28 xl:px-40 2xl:px-56"
            : "flex flex-row px-10 py-5 justify-between items-center relative cursor-default xs:px-5 max-sm:px-20 sm:px- md:px-20 lg:px-28 xl:px-40 2xl:px-56"
        }
      >
        <Slide in={true} direction="right" timeout={1000}>
          <div className="flex gap-2">
            <a
              href="#home"
              className={
                lightMode
                  ? "text-black font-poppins font-semibold text-xl"
                  : "text-white font-poppins font-semibold text-xl"
              }
            >
              <span className={lightMode ? "text-teal-600" : "text-[#FEC45D]"}>
                Vince
              </span>{" "}
              Micklay
            </a>
            <LuSun
              size={30}
              className={
                lightMode
                  ? "mt-[0.10rem] cursor-pointer text-teal-600 hover:scale-110 duration-300"
                  : "mt-[0.10rem] cursor-pointer text-[#FEC45D] hover:scale-110 duration-300"
              }
              onClick={() => setLightMode(!lightMode)}
            />
          </div>
        </Slide>
        <Slide in={true} direction="left" timeout={1000}>
          <div onClick={handleNav} className="cursor-pointer z-50 md:hidden">
            {nav ? (
              <IoIosClose
                size={30}
                className={lightMode ? "text-black" : "text-white"}
              />
            ) : (
              <HiMenuAlt3
                size={32}
                className={lightMode ? "text-black" : "text-white"}
              />
            )}
          </div>
        </Slide>
        <Slide in={true} direction="left" timeout={1000}>
          <ul
            className={
              lightMode
                ? "flex flex-row gap-10 font-poppins font-semibold text-black hidden md:flex"
                : "flex flex-row gap-10 font-poppins font-semibold text-white hidden md:flex"
            }
          >
            <li
              className={
                lightMode
                  ? "relative group hover:scale-110 duration-300 hover:text-teal-600"
                  : "relative group hover:scale-110 duration-300 hover:text-[#FEC45D]"
              }
            >
              <a href="#work">Work</a>
              <span
                className={
                  lightMode
                    ? "block mx-auto mt-1 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"
                    : "block mx-auto mt-1 w-0 h-0.5 bg-[#FEC45D] transition-all duration-300 group-hover:w-full"
                }
              ></span>
            </li>
            <li
              className={
                lightMode
                  ? "relative group hover:scale-110 duration-300 hover:text-teal-600"
                  : "relative group hover:scale-110 duration-300 hover:text-[#FEC45D]"
              }
            >
              <a href="#skill">Skills</a>
              <span
                className={
                  lightMode
                    ? "block mx-auto mt-1 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"
                    : "block mx-auto mt-1 w-0 h-0.5 bg-[#FEC45D] transition-all duration-300 group-hover:w-full"
                }
              ></span>
            </li>
            <li
              className={
                lightMode
                  ? "relative group hover:scale-110 duration-300 hover:text-teal-600"
                  : "relative group hover:scale-110 duration-300 hover:text-[#FEC45D]"
              }
            >
              <a href="#about">About</a>
              <span
                className={
                  lightMode
                    ? "block mx-auto mt-1 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"
                    : "block mx-auto mt-1 w-0 h-0.5 bg-[#FEC45D] transition-all duration-300 group-hover:w-full"
                }
              ></span>
            </li>
            <li
              className={
                lightMode
                  ? "relative group hover:scale-110 duration-300 hover:text-teal-600"
                  : "relative group hover:scale-110 duration-300 hover:text-[#FEC45D]"
              }
            >
              <a href="#contact">Contact</a>
              <span
                className={
                  lightMode
                    ? "block mx-auto mt-1 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"
                    : "block mx-auto mt-1 w-0 h-0.5 bg-[#FEC45D] transition-all duration-300 group-hover:w-full"
                }
              ></span>
            </li>
          </ul>
        </Slide>

        {nav && (
          <div
            className={
              lightMode
                ? "fixed inset-0 duration-300 bg-[#FFFFF0] h-[100vh] text-black flex flex-col items-center justify-center z-40 md:hidden"
                : "fixed inset-0 duration-300 bg-black h-[100vh] text-white flex flex-col items-center justify-center z-40 md:hidden"
            }
          >
            <Slide in={true} direction="down" timeout={1000}>
              <div className="absolute top-[9rem] left-2">
                <p className="text-white font-bold text-2xl tracking-widest -rotate-90">
                  <span
                    className={lightMode ? "text-teal-600" : "text-[#FEC45D]"}
                  >
                    {" "}
                    MENU
                  </span>
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
                        href="#skill"
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
            <div className="mt-[28rem] flex flex-col gap-4">
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
    </div>
  );
};

export default Navbar;
