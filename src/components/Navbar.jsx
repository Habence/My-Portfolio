import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex flex-row px-10 py-10 justify-between items-center relative">
      <p className="text-white font-poppins font-semibold">
        <span className="text-yellow-400">Vince</span> Micklay
      </p>
      <div onClick={handleNav} className="cursor-pointer z-50 md:hidden">
        {nav ? (
          <IoIosClose size={30} color="white" />
        ) : (
          <HiMenuAlt3 size={25} color="white" />
        )}
      </div>
      <ul className="flex flex-row gap-10 font-poppins font-semibold text-white hidden md:flex">
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {nav && (
        <div className="fixed inset-0 bg-black text-white text-center z-40 md:hidden">
          <ul className="pt-20">
            <li className="p-4 border-b-2">Work</li>
            <li className="p-4 border-b-2">About</li>
            <li className="p-4 border-b-2">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
