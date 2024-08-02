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
      className={`fixed w-full z-50 ${
        visible
          ? "translate-y-0 transition-transform duration-300"
          : "transition-transform duration-300 -translate-y-full"
      } ${
        lightMode
          ? "bg-[#FFFFF0] transition-colors duration-500"
          : "backdrop-blur-sm bg-black bg-opacity-40 transition-colors duration-500"
      } ${lightMode ? "text-black" : "text-white"}`}
    >
      <div
        className={`flex flex-row px-5 py-5 justify-between items-center relative cursor-default ${
          lightMode ? "text-black" : "text-white"
        } xs:px-5 sm:px-10 md:px-20 lg:px-28 xl:px-38 2xl:px-54`}
      >
        <Slide in={true} direction="right" timeout={1000}>
          <div className="flex gap-2 items-center">
            <a
              href="#home"
              className={`font-poppins font-semibold text-xl ${
                lightMode ? "text-black" : "text-white"
              }`}
            >
              <span className={lightMode ? "text-teal-600" : "text-[#FEC45D]"}>
                Vince
              </span>{" "}
              Micklay
            </a>
            <LuSun
              size={30}
              className={`mt-[0.10rem] cursor-pointer ${
                lightMode ? "text-teal-600" : "text-[#FEC45D]"
              } hover:scale-110 duration-300`}
              onClick={() => setLightMode(!lightMode)}
            />
          </div>
        </Slide>
        <Slide in={true} direction="left" timeout={1000}>
          <div onClick={handleNav} className="cursor-pointer z-50 lg:hidden">
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
            className={`hidden xl:flex flex-row gap-10 font-poppins font-semibold ${
              lightMode ? "text-black" : "text-white"
            }`}
          >
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skill" },
              { name: "Experience", href: "#experience" },
              { name: "Projects", href: "#project" },
              { name: "Education", href: "#education" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <li
                key={item.name}
                className={`relative group hover:scale-110 duration-300 ${
                  lightMode ? "hover:text-teal-600" : "hover:text-[#FEC45D]"
                }`}
              >
                <a href={item.href}>{item.name}</a>
                <span
                  className={`block mx-auto mt-1 w-0 h-0.5 ${
                    lightMode ? "bg-teal-600" : "bg-[#FEC45D]"
                  } transition-all duration-300 group-hover:w-full`}
                ></span>
              </li>
            ))}
          </ul>
        </Slide>

        {nav && (
          <div
            className={`fixed inset-0 duration-300 overflow-y-auto ${
              lightMode ? "bg-[#FFFFF0] text-black" : "bg-black text-white"
            } h-full flex flex-col items-center justify-center z-40 xl:hidden`}
          >
            <Slide in={true} direction="up" timeout={1000}>
              <div className="absolute top-24 left-10">
                <p className="font-bold text-xl tracking-widest -rotate-90">
                  <span
                    className={lightMode ? "text-teal-600" : "text-[#FEC45D]"}
                  >
                    MENU
                  </span>
                </p>
              </div>
            </Slide>

            <div className="flex flex-col">
              <Slide in={true} timeout={1000}>
                <ul className="space-y-10 text-3xl font-bold">
                  {[
                    { name: "ABOUT", href: "#about" },
                    { name: "SKILLS", href: "#skill" },
                    { name: "EXPERIENCE", href: "#experience" },
                    { name: "PROJECTS", href: "#project" },
                    { name: "EDUCATION", href: "#education" },
                    { name: "CONTACT", href: "#contact" },
                  ].map((item, index) => (
                    <Slide
                      key={item.name}
                      in={true}
                      direction={index % 2 === 0 ? "right" : "left"}
                      timeout={1000}
                    >
                      <li>
                        <a
                          href={item.href}
                          className="cursor-pointer"
                          onClick={handleNav}
                        >
                          {item.name}
                        </a>
                      </li>
                    </Slide>
                  ))}
                </ul>
              </Slide>
            </div>
            <div className="flex mt-8 flex-col gap-4">
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
