"use client"

import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logo from "@/assets/logo1.jpeg" // Adjust the path to your logo

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect (adds shadow, does NOT fix position)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavVisible(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header
      className={`bg-[#10405c] text-white py-3`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <NavLink
              to="/"
              className="relative h-10 w-10 md:h-20 md:w-20 overflow-hidden rounded-full"
            >
              {/* Replace with your actual logo */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold"> */}
                <img className="w-full h-full object-cover" src={logo} alt="Logo" />
              {/* </div> */}
            </NavLink>
            <h1 className="text-lg md:text-xl font-bold font-serif hidden md:block">Koutsuku Martial Arts</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Photo Gallery", path: "/mygallery" },
                { name: "Our Team", path: "/team" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative py-2 px-1 text-md font-medium transition-colors group ${
                        isActive ? "text-yellow-400" : "hover:text-yellow-400"
                      } `
                    }
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsNavVisible(!isNavVisible)}
            className="md:hidden text-white focus:outline-none relative z-20"
            aria-label={isNavVisible ? "Close menu" : "Open menu"}
            aria-expanded={isNavVisible}
          >
            {isNavVisible ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Positioned below menu icon on RIGHT side */}
      <div
        className={`md:hidden absolute right-0 w-64 bg-[#072638] shadow-lg transition-all duration-300 ease-in-out z-10 ${
          isNavVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ top: "calc(100% - 90%)" }}
      >
        <nav className="py-3 px-4 border-t border-white/10">
          <ul className="flex flex-col space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Photo Gallery", path: "/mygallery" },
              { name: "Our Team", path: "/team" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <li key={index} className="border-b border-white/10 pb-2">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-2 text-base font-medium transition-colors ${
                      isActive ? "text-yellow-400" : "hover:text-yellow-400"
                    }`
                  }
                  onClick={() => setIsNavVisible(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
