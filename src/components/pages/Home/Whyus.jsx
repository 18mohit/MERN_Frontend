import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import ScrollTrigger from "react-scroll-trigger";

function second() {
  const [count, setCount] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);
  return (
    <div className=" bg-neutral-900 bg-opacity-95 text-white justify-center">
      <div className="text-center mb-10">
        <h3 className="pt-5 lg:text-[2vw] text-[4vw]">
          Why Choose Us ?
        </h3>
        <h1 className="lg:text-[3vw] text-[6vw] p-2 " data-aos="fade-down">
          1. Our Mission
        </h1>
        <h2 className="lg:text-[1.2vw] text-[3vw] " data-aos="fade-down">
          At KOUSHUKU, our mission is to empower individuals of all ages and
          abilities to <br /> achieve their fullest potential through the
          practice of martial arts. <br /> We are committed to fostering a
          supportive community where respect, discipline, and personal growth
          are paramount.
        </h2>
      </div>
      <div className="text-center mb-10" data-aos="fade-down">
        <h1 className="lg:text-[3vw] text-[6vw] p-2 ">2. Our Experience</h1>
        <h2 className="lg:text-[1.2vw] text-[3vw] ">
          With over 10 Years of experience in the martial arts industry, our
          team of dedicated <br /> instructors brings a wealth of knowledge and
          expertise to every class. <br /> Our instructors hold International
          certificates and are passionate about helping students reach their
          goals.
        </h2>
      </div>
      <div className="text-center mb-10" data-aos="fade-down">
        <h1 className="lg:text-[3vw] text-[6vw] p-2 ">3.Training Approach</h1>
        <h2 className="lg:text-[1.2vw] text-[3vw] ">
          At KOUSHUKU, we believe in a holistic approach to martial arts
          training that encompasses <br /> physical, mental, and spiritual
          development. Our classes are designed to instill confidence, build
          strength and flexibility, <br />
          and cultivate a mindset of perseverance and self-discipline.
        </h2>
      </div>
      <div className="text-center mb-10" data-aos="fade-down">
        <h1 className="lg:text-[3vw] text-[6vw] p-2 ">
          4.Community and Culture
        </h1>
        <h2 className="lg:text-[1.2vw] text-[3vw] ">
          Joining KOUSHUKU means becoming part of a vibrant and supportive
          community of like-minded individuals. <br /> From social events and
          workshops to volunteer opportunities, <br /> our community fosters
          lasting friendships and personal connections that extend beyond the
          dojo.
        </h2>
      </div>
      <div className="text-center pb-6 " data-aos="fade-down">
        <button className="b2 bg-gray-900 w-[30vw] lg:w-[10vw] rounded-xl border text-white p-3">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default second;
