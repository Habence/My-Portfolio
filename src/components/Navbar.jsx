import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex flex-row px-10 py-10 justify-between items-center relative cursor-default xs:px-14 max-sm:px-20 sm:px- md:px ">
      <p className="text-white font-poppins font-semibold">
        <span className="text-[#FEC45D]">Vince</span> Micklay
      </p>
      <div onClick={handleNav} className="cursor-pointer z-50 md:hidden">
        {nav ? (
          <IoIosClose size={30} color="white" />
        ) : (
          <HiMenuAlt3 size={25} color="white" />
        )}
      </div>
      <ul className="flex flex-row gap-10 font-poppins font-semibold text-white hidden md:flex">
        <li className="cursor-pointer">Work</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      {nav && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-40 md:hidden">
          <div className="absolute top-[22rem] left-2  transform -translate-y-52">
            <p className="text-white font-bold text-2xl tracking-widest -rotate-90">
              <span className="text-yellow-400"> MENU</span>
            </p>
          </div>

          <div className="fixed top-28 bottom-0">
            <ul className="space-y-10 text-5xl font-bold">
              <li className="cursor-pointer">WORK</li>
              <li className="cursor-pointer">ABOUT</li>
              <li className="cursor-pointer">CONTACT</li>
            </ul>
          </div>
          <div className="mt-56 flex flex-col gap-4">
            <p className="font-bold">micklayvince@gmail.com</p>
            <p className="font-bold">+63 (908) 579-6392</p>
          </div>
          <div className="flex gap-5 mt-8">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTelegram size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
