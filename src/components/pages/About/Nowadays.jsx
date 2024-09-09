import React from "react";
import dojo from "@/assets/dojo.jpg";
import oss from "@/assets/oss.jpg";

function Nowadays() {
  return (
    <>
      <div className="bg-slate-500 pt-[1vw]">
      <h1 className=" sm:text-[2vw] text-[5vw] font-semibold bg-slate-900 sm:max-w-[15vw] max-w-[35vw] rounded-tl rounded-bl rounded-3xl border-gray-500 ">
          <span className="ml-[2vw]">Nowadays</span>
        </h1>

        <div className="sm:flex sm:flex-row font-serif pt-3">
          <div>
            <img className="sm:w-[20vw] w-[80vw] sm:ml-[1vw] ml-[10vw] " src={dojo} alt="" />
          </div>
          <div>
          <h1 className=" sm:max-w-[75vw] ml-[2vw] sm:text-[1.2vw] text-[5vw] ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nowadays,
              our karate dojo has expanded its presence significantly across
              India, boasting over 10 branches spread throughout the country.
              From its humble beginnings to its current stature, our dojo has
              remained committed to spreading the art of karate and fostering a
              community of dedicated martial artists. Each branch serves as a
              hub of learning and discipline, welcoming individuals of all ages
              and backgrounds to train under experienced instructors and embrace
              the principles of karate. With a focus on excellence and
              continuous improvement, our dojo continues to thrive, empowering
              students to achieve their full potential and embody the spirit of
              martial arts both on and off the mat. <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the
              contemporary landscape, our karate dojo stands as a beacon of
              martial arts excellence, with a burgeoning presence spanning the
              vast expanse of India. With an impressive network of over 10
              branches strategically located across the nation, our dojo has
              become synonymous with the highest standards of karate training
              and mentorship. Our journey from modest origins to widespread
              acclaim reflects our unwavering dedication to the art of karate
              and the holistic development of our students. <br />
            </h1>
          </div>
        </div>

        <div className="sm:flex sm:flex-row font-serif pt-[2vw]">
          <div>
            <h1 className="sm:max-w-[75vw] ml-[1vw] sm:text-[1.2vw] text-[4vw] ">
              Our karate dojo not only excels in training dedicated martial
              artists but also takes pride in its achievements in camps and
              tournaments. Each year, we organize immersive training camps that
              bring together students from all branches, fostering camaraderie,
              skill development, and a deeper understanding of the art of
              karate. These camps serve as a crucible for honing techniques,
              refining strategies, and instilling the values of discipline and
              perseverance. <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Moreover, our dojo has a remarkable track record of success in
              various martial arts tournaments, both at regional and national
              levels. Our students consistently demonstrate exceptional skill,
              agility, and sportsmanship, earning accolades and recognition in a
              range of categories. From sparring competitions to kata
              demonstrations, our team showcases the culmination of years of
              dedication and rigorous training. <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; These
              victories not only reflect the prowess of our individual students
              but also underscore the collective strength and unity of our dojo.
              Through relentless practice, unwavering determination, and the
              guidance of our experienced instructors, we continue to raise the
              bar and set new standards of excellence in the martial arts
              community. As we look to the future, we remain committed to
              fostering a culture of continuous improvement, where each triumph
              serves as a testament to the indomitable spirit of our dojo and
              its members.
            </h1>
          </div>
          <div>
            <img
              className="sm:w-[20vw] w-[80vw] sm:ml-[1vw] ml-[10vw] "
              src={oss}
              alt="img2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nowadays;
