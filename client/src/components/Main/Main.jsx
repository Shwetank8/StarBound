import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

export default function Hero() {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            className="
          space-y-4 lg:pr-36"
          >
            <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">
              Discover the Cosmos, Explore the Infinite
            </h1>
            <p data-aos="fade-up text-2xl" data-aos-delay="300">
              Explore the wonders of the cosmos with our website, a dedicated
              hub for space enthusiasts. Dive into the latest astronomical news,
              breathtaking images, and detailed information on space missions
              from around the world.
            </p>
            {/* <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="primary-button"
            >
              Learn More
            </button> */}
          </div>
          <div></div>
        </div>
      </div>
      {/* {Moon Surface} */}
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />
      {/* {Bottom gradient section} */}
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px]md:[60px]"></div>
    </div>
  );
}
