import React from "react";
import { FaArrowRight } from "react-icons/fa";
import bence from "../../public/bence.png";
import film from "../../public/film.png";
import finance from "../../public/finance.png";
import perfume from "../../public/perfume.png";

const Hero = () => {
  return (
    <div className="flex flex-col px-10 py-20 items-start ">
      <div className="relative mx-auto bg-gradient-to-b rounded-full w-80 h-80  overflow-hidden mb-4 md:h-96 md:w-96 max-sm:h-[220px] max-sm:w-[220px]">
        <img src={bence} className="object-cover w-full h-full" />
      </div>

      <p className="text-white font-poppins font-normal text-lg leading-relaxed">
        <span className="text-yellow-400 font-semibold">Web Developer</span>{" "}
        based in Baguio City, Philippines.
        <br />
        Bachelor of Science in IT from the{" "}
        <span className="text-yellow-400 font-semibold">
          University of the Cordilleras
        </span>
        .
        <br />
        Passionate about creating{" "}
        <span className="text-yellow-400 font-semibold">
          dynamic and responsive websites
        </span>
        .
        <br />
        Seeking an{" "}
        <span className="text-yellow-400 font-semibold">
          entry-level role
        </span>{" "}
        to work on{" "}
        <span className="text-yellow-400  font-semibold">
          meaningful projects
        </span>
        .
      </p>
      <a
        href="/RESUME - Micklay_Vince.pdf"
        className="flex items-center font-poppins font-normal text-xs text-yellow-200 leading-[4rem]"
      >
        CHECK MY RESUME <FaArrowRight className="ml-1" />
      </a>

      <div className="mt-10 ">
        <p className="text-white font-semibold text-4xl">Selected Works</p>
      </div>
      <div className="border-b-2 border-yellow-400 w-full mt-4"></div>

      <div className="flex flex-col mt-10 items-center gap-8 text-white font-poppins font-normal">
        <div>
          <img
            src={film}
            alt="film"
            className="rounded-xl h-72 w-full object-cover"
          />
          <p className="ml-2 my-2">Movie Website</p>
          <a
            href="https://film-project-indol.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-yellow-400 font-poppins flex font-normal text-xs uppercase "
          >
            View Website <FaArrowRight className="ml-1 mt-[0.10rem]" />
          </a>
        </div>
        <div>
          <img
            src={finance}
            alt="finance"
            className="rounded-xl h-72 w-full object-cover"
          />
          <p className="ml-2 my-2">Finance Website</p>
          <a
            href="https://finance-project-pink.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-yellow-400 font-poppins flex font-normal text-xs uppercase "
          >
            View Website <FaArrowRight className="ml-1 mt-[0.10rem]" />
          </a>
        </div>
        <div>
          <img
            src={perfume}
            alt="perfume"
            className="rounded-xl h-72 w-full object-cover"
          />
          <p className="ml-2 my-2">Perfume Website</p>
          <a
            href="https://vercel.com/bences-projects-a1571fc8/perfume"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-yellow-400 font-poppins flex font-normal text-xs uppercase "
          >
            View Website <FaArrowRight className="ml-1 mt-[0.10rem]" />
          </a>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-white font-semibold text-4xl">About Me</p>
      </div>
      <div className="border-b-2 border-yellow-400 w-full mt-4"></div>
      <div className="mt-10 text-white font-poppins font-normal text-xs leading-relaxed">
        <p className="">
          I am Vince Micklay, a Web Developer based in Baguio City, Philippines,
          holding a Bachelor of Science in Information Technology (BSIT) from
          the University of the Cordilleras. I specialize in creating dynamic
          and responsive websites using JavaScript, HTML, CSS, and ReactJS. My
          experience includes developing mobile apps with Java and Android
          Studio, and I have successfully implemented a QR code transaction
          process for a recycling app. I interned as a Junior Backend Developer
          at BitShares Labs Inc., where I enhanced interactions within the
          Cryptosavers Club through a Discord chatbot utilizing neural networks.
        </p>
        <br />
        <p>
          I am committed to continuous learning and professional growth, having
          attended various seminars and courses to expand my skill set.
          Proficient in version control with Git and database management with
          MySQL, I am eager to apply my foundational programming skills in an
          entry-level role. My goal is to contribute to meaningful projects and
          collaborate with experienced professionals to drive digital
          transformation and innovative solutions.
        </p>
        <a
          href="/RESUME - Micklay_Vince.pdf"
          className="flex items-center font-poppins font-normal text-xs text-yellow-200 leading-[4rem]"
        >
          CHECK MY RESUME <FaArrowRight className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
