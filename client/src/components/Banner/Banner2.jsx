import React, { useEffect, useState } from "react";
import axios from "axios";
import satelliteImg from "../../assets/satellite1.webp";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export default function Banner2() {
  const [mission, setMission] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchMission = async () => {
      try {
        const response = await axios.get("https://starboundapi.vercel.app/");
        setMission(response.data[1]); // Set the second mission
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
          <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
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
            <p data-aos="fade-up" data-aos-delay="500">
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
          <div data-aos="zoom-in">
            <img src={satelliteImg} alt="" />
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg text-xl hover:bg-indigo-700 transition mb-12"
            onClick={() => navigate("/missions")}
          >
            Explore More Missions
          </button>
        </div>
      </div>
    </div>
  );
}
