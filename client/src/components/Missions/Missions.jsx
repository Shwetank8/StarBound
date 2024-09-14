import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSpring, animated } from "@react-spring/web";
import "./Missions.css";

export default function Missions() {
  const [missions, setMissions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.get("https://starboundapi.vercel.app/");
        setMissions(response.data);
      } catch (error) {
        console.error("Failed to fetch missions data:", error);
        setError("Failed to fetch missions data.");
      }
    };

    fetchMissions();
  }, []);

  if (error) {
    return (
      <div className="text-center text-white bg-gray-800 p-4 rounded">
        {error}
      </div>
    );
  }

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 250, friction: 30 },
  });

  return (
    <div className="missions-container bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen p-6">
      <h1 className="text-5xl font-bold text-center text-white mb-8">
        Space Missions
      </h1>
      <div className="missions-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {missions.map((mission) => (
          <animated.div
            key={mission._id}
            className="mission-card bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={cardAnimation}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {mission.name}
            </h2>
            <p className="text-lg mb-4">{mission.description}</p>
            <div className="flex justify-center">
              <a
                href={mission.wikipediaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
