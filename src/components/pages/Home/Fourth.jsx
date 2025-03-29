import React from 'react'

function Fourth() {
  return (
    <section className="bg-[#10405c] text-white py-12 px-6 md:px-12 font-serif">
      <div className="container mx-auto text-center">
        <h2 className="nska  lg:text-[3vw] text-black mb-3 text-[7vw] font-serif" >Training</h2>
        {/* Training Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Online Martial Arts Training",
            "Yoga & Meditation",
            "Personal Gym Training",
            "Karate Training",
            "Self-Defense Training",
            "Kickboxing Training",
            "Society & Community Training",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#073850] rounded-xl shadow-lg p-6 text-lg font-semibold hover:bg-[#0a4660] transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="mt-8 text-xl ">
          We also offer "special martial arts training sessions" in different societies, community centers and schools.
          If you want, feel free to 
          <a href="tel:+918160005063" className="text-yellow-400 font-bold hover:underline ml-1">
            Contact Us.
          </a> 
        </p>
      </div>
    </section>
  )
}

export default Fourth;