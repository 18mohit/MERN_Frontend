import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import punch from "../../assets/punch.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/context/contex";
import { setUser } from "@/store/authSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setIsNavVisible((prev) => !prev);
  };

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res && res.data && res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("logout error", error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Logout failed. Please try again.");
      }
    }
  };
  

  return (
    <header className="bg-gray-800 text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between px-[1.5vw] py-4">
        <div className="lg:hidden flex items-center mb-4 lg:mb-0">
          <NavLink to="/" className="text-white">
            <img
              src={logo}
              alt="Logo"
              className="h-[30vw] w-[30vw] rounded-full inline"
            />
          </NavLink>
        </div>
        <div className="hidden lg:flex items-center">
          <NavLink to="/" className="text-white">
            <img
              src={logo}
              alt="Martial Arts Logo"
              className="h-16 lg:h-[8vw] lg:w-[8.8vw] rounded-full inline"
            />
          </NavLink>
        </div>
        <div className="text-center w-full">
          <h1 className="lg:text-[2vw] text-[5vw] font-bold">
            NIHON SHOTOKAN KARATE ASSOCIATION - INDIA
          </h1>
          <h2 className="lg:text-[1vw] text-[2.5vw] font-mono">
            Affiliated With: NIHON SHOTOKAN KARATE DO SHUUGOUKAI - JAPAN
          </h2>
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center px-[1.5vw]">
        <nav className="lg:flex flex-wrap lg:ml-auto w-full lg:w-auto">
          <div className="lg:hidden flex justify-between">
            <img
              src={punch}
              alt="Toggle navigation"
              onClick={toggleNavVisibility}
              className="cursor-pointer h-[11vw] w-[11vw] rounded-full"
            />
          </div>
          {isNavVisible && (
            <ul className="flex flex-col lg:flex-row lg:flex-wrap text-[5vw] lg:text-[1.4vw] ml-[1vw] lg:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 hover:text-yellow-400"
                      : "hover:text-yellow-400"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 hover:text-yellow-400"
                      : "hover:text-yellow-400"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mygallery"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 hover:text-yellow-400"
                      : "hover:text-yellow-400"
                  }
                >
                  Photo Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 hover:text-yellow-400"
                      : "hover:text-yellow-400"
                  }
                >
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 hover:text-yellow-400"
                      : "hover:text-yellow-400"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="items-center">
                {!user ? (
                  <div className="items-center lg:-mt-2 mt-0">
                    <NavLink to="/login">
                      <Button className="w-[15vw] text-wrap lg:w-[6vw] bg-slate-50 text-black hover:bg-slate-200">
                        Login
                      </Button>
                    </NavLink>
                    <NavLink to="/signup">
                      <Button className="w-[15vw] text-wrap lg:w-[6vw]">
                        SignUp
                      </Button>
                    </NavLink>
                  </div>
                ) : (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Avatar className="cursor-pointer">
                        <AvatarImage src={user.photo} />
                      </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="flex gap-10 ">
                        <Avatar className="cursor-pointer">
                          <AvatarImage src={user.photo} />
                        </Avatar>
                        <div>
                          <h1 className="font-medium">{user.fullname}</h1>
                          <h1 className="font-medium text-gray-500">
                            {user.role}
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <div className="flex items-center">
                          <User2 />
                          <NavLink to="/profile">
                            <Button
                              variant="link"
                              className="font-medium text-gray-500"
                            >
                              View Profile
                            </Button>
                          </NavLink>
                        </div>
                        <div className="flex items-center">
                          <LogOut />
                          <Button
                            onClick={logoutHandler}
                            variant="link"
                            className="font-medium text-gray-500"
                          >
                            Logout
                          </Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                )}
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
