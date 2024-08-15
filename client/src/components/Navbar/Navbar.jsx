import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpeg";

export default function Navbar() {
  return (
    <div
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex text-white items-center gap-4 font-bold text-2xl">
            <img src={Logo} alt="" className="w-10" />
            <span>StarBound</span>
          </div>
          <div className="text-white hidden md:block">
            <ul className="flex items-center gap-6 text-xl py-4 sm:py-0 ">
              <li>
                <ScrollLink
                  to="spotlight"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  Spotlight
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="news"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  News
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="missions"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  Missions
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <Link
              to="/login"
              className="cursor-pointer text-white border-2 border-white px-3 py-1 rounded-md"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="cursor-pointer text-white border-2 border-white px-3 py-1 rounded-md"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
