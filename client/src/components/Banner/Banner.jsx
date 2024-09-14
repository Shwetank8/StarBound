import React, { useEffect, useState } from "react";
import axios from "axios";
import satelliteImg from "../../assets/satellite.webp";

export default function Banner() {
  const [mission, setMission] = useState(null);

  useEffect(() => {
    const fetchMission = async () => {
      try {
        const response = await axios.get("https://starboundapi.vercel.app/mission");
        setMission(response.data[0]); // Set the first mission
      } catch (error) {
        console.error("Failed to fetch mission data:", error);
      }
    };

    fetchMission();
  }, []);

  if (!mission) {
    return <div>Loading...</div>; // Optionally handle loading state
  }

  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img
              data-aos="zoom-in"
              src={satelliteImg}
              alt=""
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
          <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
            <p data-aos="fade-up" className="text-sky-800 uppercase">
              {mission.name} Mission
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-5xl"
            >
              {mission.name}
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              {mission.description}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-button"
              onClick={() => window.open(mission.wikipediaLink, "_blank")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
