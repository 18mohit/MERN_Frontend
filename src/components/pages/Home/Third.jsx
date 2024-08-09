import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

function Third() {
  const [count, setCount] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCount(true);
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          } else {
            setCount(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-zinc-600 text-center lg:text-[3vw] text-[7vw]">
        <h1 className="koushuku font-serif" data-aos="fade-down">
          Our Numbers
        </h1>
        <div ref={triggerRef} className="flex flex-col lg:flex-row lg:justify-around lg:mx-auto lg:space-y-0 am:ml-0 ml-[30vw] text-center space-y-10 pt-2 pb-10">
          <div
            className="bg-slate-900 hover:bg-slate-500 cursor-pointer lg:h-[10vw] h-[25vw] lg:w-[16vw] w-[40vw] rounded-lg"
            data-aos="fade-down"
          >
            <h1 className="lg:pt-8 pt-5 text-white lg:text-[2.4vw] text-[6vw]">
              {count && <CountUp start={0} end={98} duration={2.75}></CountUp>}
              %
            </h1>
            <p className="text-slate-300 lg:text-[1.2vw] text-[3vw]">
              Customer Satisfaction Rate
            </p>
          </div>
          <div
            className="bg-slate-900 hover:bg-slate-500 cursor-pointer lg:h-[10vw] h-[25vw] lg:w-[16vw] w-[40vw] rounded-lg"
            data-aos="fade-down"
          >
            <h1 className="lg:pt-8 pt-5 text-white lg:text-[2.4vw] text-[6vw]">
              {count && <CountUp start={0} end={20} duration={4.75}></CountUp>}
              +
            </h1>
            <p className="text-slate-300 lg:text-[1.2vw] text-[3vw]">
              Number of Branches
            </p>
          </div>
          <div
            className="bg-slate-900 hover:bg-slate-500 cursor-pointer lg:h-[10vw] h-[25vw] lg:w-[16vw] w-[40vw] rounded-lg"
            data-aos="fade-down"
          >
            <h1 className="lg:pt-8 pt-5 text-white lg:text-[2.4vw] text-[6vw]">
              {count && <CountUp start={0} end={100} duration={6.75}></CountUp>}
              +
            </h1>
            <p className="text-slate-300 lg:text-[1.2vw] text-[3vw]">
              Certified Instructors
            </p>
          </div>
          <div
            className="bg-slate-900 hover:bg-slate-500 cursor-pointer lg:h-[10vw] h-[25vw] lg:w-[16vw] w-[40vw] rounded-lg"
            data-aos="fade-down"
          >
            <h1 className="lg:pt-8 pt-5 text-white lg:text-[2.4vw] text-[6vw]">
              {count && <CountUp start={0} end={80} duration={5.75}></CountUp>}
              %
            </h1>
            <p className="text-slate-300 lg:text-[1.2vw] text-[3vw]">
              Success Rate in Competitions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Third;
