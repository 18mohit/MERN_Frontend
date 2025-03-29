import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { RiFacebookCircleLine, RiTwitterXFill } from "react-icons/ri";
import { Phone, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/logo1.jpeg"; // Replace with actual logo path

function Footer() {
  return (
    <footer className="bg-[#072638] font-serif text-white py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
          {/* Logo & Slogan */}
          <div className="flex flex-col sm:items-center items-start md:items-start">
            <NavLink to="/" className="h-16 w-16 md:h-20 md:w-20 mb-4">
              <img src={logo} alt="Logo" className="w-full h-full rounded-full object-contain" />
            </NavLink> 
            <p className="text-2xl nska_footer font-semibold italic text-black">
              Discover the power within you with us.
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg nska text-black font-serif">
              Follow Us
            </h3>
            <ul className="space-y-2 text-black nska_footer text-left text-lg">
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-start hover:text-yellow-400 transition-colors"
                >
                  <FiYoutube className="mr-2" />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/koutsuku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-start hover:text-yellow-400 transition-colors"
                >
                  <FaInstagram className="mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1Ac2d57qAB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-start hover:text-yellow-400 transition-colors"
                >
                  <RiFacebookCircleLine className="mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-start hover:text-yellow-400 transition-colors"
                >
                  <RiTwitterXFill className="mr-2" />
                   X
                </a>
              </li>
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h3 className="font-bold mb-4 text-lg nska text-black font-serif">
              Our Training Programs
            </h3>
            <ul className="space-y-2 text-black nska_footer text-lg">
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                Online Martial Arts Training
              </li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                Personal Gym Training
              </li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                Karate, Kickboxing & Self-Defense
              </li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                 Yoga & Meditation
              </li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                Society & Groups and School Training 
              </li>

            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold mb-4 text-lg nska text-black font-serif">
              Contact Us
            </h3>
            <p className="hover:text-yellow-500 mb-2 transition-colors text-yellow-400 cursor-pointer flex items-center gap-2">
              <a href="tel:+918160005063" className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-yellow-500" /> +91 8160005063
              </a>
            </p>

            <p className="hover:text-yellow-500 mb-2 transition-colors text-yellow-400 cursor-pointer flex items-center gap-2">
              <a href="mailto:koutsuku9@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-500" /> koutsuku9@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
