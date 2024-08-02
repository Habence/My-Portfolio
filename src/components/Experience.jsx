import React, { useEffect } from "react";
import Slide from "@mui/material/Slide";
import AOS from "aos";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = ({ lightMode, experienceData }) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on every render to ensure animations work correctly
  });

  return (
    <div
      className={
        lightMode
          ? " bg-[#FFFFF0] cursor-default transition-colors duration-500 flex flex-col px-10  items-start  xs:px-5 sm:px-[6rem] md:px-20 lg:px-28 xl:px-40 2xl:px-54 "
          : " transition-colors duration-500 flex flex-col px-10  items-start cursor-default xs:px-5 sm:px-[6rem] md:px-20 lg:px-28 xl:px-40 2xl:px-54 "
      }
    >
      <section id="experience">
        <div className="mt-10 2xl:mt-28">
          <Slide in={true} timeout={1000}>
            <section id="about">
              <p
                data-aos="slide-right"
                className={
                  lightMode
                    ? "text-black font-semibold text-4xl xl:text-6xl"
                    : "text-white font-semibold text-4xl xl:text-6xl"
                }
              >
                Expe
                <span
                  className={lightMode ? "text-teal-600" : "text-[#FEC45D]"}
                >
                  rience
                </span>
              </p>
            </section>
          </Slide>
        </div>
      </section>
      <Slide in={true} direction="up" timeout={1000}>
        <div
          data-aos="fade-up"
          className={
            lightMode
              ? "border-b-2 border-teal-600 w-full my-8"
              : "border-b-2 border-[#FEC45D] w-full my-8"
          }
        ></div>
      </Slide>

      <div className="w-full" data-aos="fade-right">
        <VerticalTimeline
          lineColor={lightMode ? "rgb(13, 148, 136)" : "#FEC45D"}
          className=""
        >
          {experienceData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              contentStyle={{
                background: lightMode ? "#FFFFF0" : "#31333b",
                color: "#fff",
                boxShadow: lightMode
                  ? "0 0 20px rgb(13, 148, 136)"
                  : "0 0 20px #FEC45D",
              }}
              iconStyle={{
                background: lightMode ? "#fff" : "#38343c",
                color: "#fff",
                boxShadow: lightMode
                  ? "0 0 20px rgb(13, 148, 136)"
                  : "0 0 50px #FEC45D",
              }}
              date={
                <span style={{ color: lightMode ? "#000000 " : "#fff" }}>
                  {item.date}
                </span>
              }
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={item.imageUrl}
                    alt="Icon"
                    className="w-full h-full rounded-full"
                  />
                </div>
              }
            >
              <div
                className={
                  lightMode
                    ? "text-black flex flex-col"
                    : "text-white flex flex-col"
                }
              >
                <img
                  src={item.imageUrl}
                  alt={`${item.company} Image`}
                  className="rounded-md h-[15rem]"
                />
                <div
                  className={
                    lightMode
                      ? "border-b-2 my-2 border-b-teal-600"
                      : "border-b-2 my-2 border-b-[#FEC45D]"
                  }
                ></div>
                <li className="list-none font-poppins font-semibold max_sm:text-lg text-xl uppercase">
                  {" "}
                  {item.company}
                </li>
                <li className="list-none font-poppins font-semibold max_sm:text-sm text-md uppercase">
                  {item.job}
                </li>
                <ul className="mt-4 font-poppins text-sm max_sm:text-xs sm:text-xs md:text-sm">
                  <li className="font-poppin font-normal ">
                    {item.description[0]}
                  </li>
                  <li className="mt-4 font-poppin font-normal">
                    {item.description[1]}
                  </li>
                  <li className="mt-4 font-poppin font-normal">
                    {item.description[2]}
                  </li>
                  <li className="mt-4 font-poppin font-normal">
                    {item.description[3]}
                  </li>
                  <li className="mt-4 font-poppin font-normal">
                    {item.description[4]}
                  </li>
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
