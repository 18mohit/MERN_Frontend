import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { RiFacebookCircleLine, RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center sm:text-left">
          <div>
            <h3 className="font-bold mb-4">NSKA ON WEB</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start text-black hover:text-white cursor-pointer">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <FiYoutube className="mr-2" />
                  Our YouTube Official Channel
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start text-black hover:text-white cursor-pointer">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <FaInstagram className="mr-2" />
                  Instagram
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start text-black hover:text-white cursor-pointer">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <RiFacebookCircleLine className="mr-2" />
                  Facebook
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start text-black hover:text-white cursor-pointer">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <RiTwitterXFill className="mr-2" />
                  X
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">CHAMPIONSHIPS</h3>
            <ul className="space-y-2">
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">WORLD CHAMPIONSHIPS</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">KARATE 1</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">RANKING</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">CONTINENTAL FEDERATIONS</h3>
            <ul className="space-y-2">
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">AKF</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">AIKF</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">KAI</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">OKF</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">UFAK</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">PARTNERS</h3>
            <ul className="space-y-2">
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">ADIDAS</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">ARAWAZA</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">BEST SPORT</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">BUDO-NORD</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">DAEDO</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">HAYASHI</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">ISHII</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">PUNOK</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">SHUREIDO</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">SMAI</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">TAISHAN</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">TATAMIX</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">TOKAIDO</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">TROCELLEN</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">WACOKU</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">I.O.C</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">I.P.C</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">WORLD GAME ASSOCIATION</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">W.A.D.A</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">SPORTACORD</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">A.R.I.A.S.F</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">PEACE&SPORT</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">SPORTDATA</a>
              </li>
              <li className="text-black hover:text-white cursor-pointer">
                <a href="#" className="block">VIRTUS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
