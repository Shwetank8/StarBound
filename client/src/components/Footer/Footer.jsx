import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white px-5 reletive z-50">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
          {/* {first column} */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </h1>
            <p>
              Get Exclusive <span className="font-bold">Update</span>
              straight to your inbox
            </p>
            <br />
            <div className="flex items-center h-10">
              <input
                type="text"
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2 mr-3 rounded-lg"
                placeholder="Email"
              />
              <button className="primary-button">Subscribe</button>
            </div>
          </div>
          {/* {second column} */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Contact Us</h1>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <HiLocationMarker />
                  <p>Tughlakabad , New Delhi</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <MdMessage />
                  <p>abc123@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <MdCall />
                <p>+91 1234567890</p>
              </div>
            </div>
          </div>
        </div>

        {/* {Bottom section} */}
        <div className="hidden sm:block">
          <div className="flex justify-between items-center py-6 border-t-2 border-grey-400">
            <span className="text-sm text-gray-400">
              Copyright &copy; 2024 by X2 Space
            </span>
            <div className="flex items-center justify-center gap-4 pb-4">
              <a href="https://www.instagram.com/ritvik__718">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="https://www.linkedin.com/in/ritvikranjan/">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>
            <span className="text-sm text-gray-400">
              <ul className="flex gap-3">
                <li>Privacy Policy</li>
                <li>Terms And Conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
