import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { RiArrowRightSFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import bg1 from "../../../assets/bg1.png";

function First() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <>
      <div className="bg-gray-700 flex justify-between">
        <div 
        data-aos="fade-down"
        className="right ">
        <div>
          <h1 className="max-w-[40vw] text-left ml-[1.5vw] center pt-[1vw]">
            <span className="tagline sm:text-[3.5vw] text-[6vw] font-bold font-serif align-middle">
              {/* <br /> */}
              Pursue Mastery in <br />
              Mind,Body, and Soul with&nbsp;
            </span>
            <span className="nska font-bold sm:text-[4vw] text-[7vw] text-wrap">
              ABX. <br />
            </span>
          </h1>
        </div>
        <div className="text-[3.5vw]  sm:text-[1.5vw]">
          <div className="flex mt-4 font-serif">
            <span className="mt-1 mr-1">
              <RiArrowRightSFill />
            </span>
            <span> Learn With Top Sensei. </span>
            {/* <span> 30 years of karate experience. </span> */}
            {/* Train like a beast, fight like a warrior. */}
          </div>
          <div className="flex mt-4 font-serif">
            <span className="mt-1 mr-1">
              <RiArrowRightSFill />
            </span>
            <span> Learn any type of Martial Art.</span>
            {/* <span> Learn any type of Martial Art.</span> */}
          </div>
          <div className="flex mt-4 font-serif ">
            <span className="mt-1 mr-1">
              <RiArrowRightSFill />
            </span>
            <span> Take Knowledge of Weapons. </span>
          </div>
          <div className="flex mt-4 font-serif">
            <span className="mt-1 mr-1">
              <RiArrowRightSFill />
            </span>
            <span> Combat fight & Tournament fight. </span>
          </div>
        </div>
        </div>

        <div className="left mr-[5vw]">
            <img 
            className=" h-[50vw] sm:h-[33.5vw]" 
            data-aos="fade-down"
            data-aos-delay="500"
            src={bg1} alt="sensei" />
        </div>
      </div>
    </>
  );
}

export default First;
