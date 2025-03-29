import React from "react";
import kb1 from "@/assets/kb1.png";
import karate_girl from "@/assets/karate_girl.png"
import kg2 from "@/assets/kg2.png";

function Nowadays() {
  return (
    <>
      <div className="bg-[#1f4c66] pt-[1vw] font-serif">
        <h1 className="flex justify-center items-center nska text-black sm:text-[2vw] text-[5vw] font-semibold mx-auto">
          <span className="p-2 ml-[2vw]">Nowadays We Are</span>
        </h1>

        <div className="sm:flex sm:flex-row font-serif pt-3">
          <div>
            <img className="sm:w-[20vw] w-[80vw] sm:ml-[1vw] ml-[10vw] " src={kg2} alt="kg2" />
          </div>
          <div>
          <h1 className=" sm:max-w-[75vw] ml-[2vw] sm:text-[1.2vw] text-[5vw] ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with Koutsuku, we are on a mission to empower individuals through martial arts, fitness, and self-discipline. With years of experience in training over 30+ schools and mentoring countless students, we have built a strong foundation in martial arts education. <br />
              <br />

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the
              with Koutsuku, we take pride in our students’ accomplishments in training programs and competitions. Each year, we organize special training camps, bringing students together to refine techniques, strengthen their skills, and build lasting camaraderie.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Additionally, our students have demonstrated exceptional performance in various martial arts tournaments at both regional and national levels. Their dedication, agility, and sportsmanship have earned them multiple accolades and recognition. These victories reflect not only their individual strength but also the unity and perseverance of the Koutsuku community. <br />
            </h1>
          </div>
        </div>

        <div className="sm:flex sm:flex-row font-serif pt-[2vw]">
          <div>
            <h1 className="sm:max-w-[75vw] ml-[1vw] sm:text-[1.2vw] text-[4vw] font-serif">
              Koutsuku not only excels in training dedicated martial
              artists but also takes pride in its achievements in camps and
              tournaments. Each year, we organize immersive training camps that
              bring together students from all branches, fostering camaraderie,
              skill development, and a deeper understanding of the art of
              karate. These camps serve as a crucible for honing techniques,
              refining strategies, and instilling the values of discipline and
              perseverance. <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Moreover, Koutsuku has a remarkable track record of success in
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
              src={kb1}
              alt="img2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nowadays;