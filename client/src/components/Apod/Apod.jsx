import React, { useState, useEffect } from "react";
import axios from "axios";
import GalaxyLoader from "../GalaxyLoader/GalaxyLoader";

const Apod = () => {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=vSuOpoYOTwEna6CYiaQIDTVOsuoE97o9dDZRtzXT"
        );
        setApodData(response.data);
      } catch (error) {
        setError("Failed to fetch APOD data");
      }
    };

    fetchApodData();
  }, []);

  if (error) {
    return <div className="text-white text-center">Error: {error}</div>;
  }

  if (!apodData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
        <GalaxyLoader />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 md:p-8">
      <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-black p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          {apodData.title}
        </h2>
        {apodData.media_type === "image" ? (
          <img
            src={apodData.url}
            alt={apodData.title}
            className="w-full h-80 object-cover mb-4 rounded-lg shadow-md"
          />
        ) : (
          <iframe
            title="space video"
            src={apodData.url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-80 mb-4 rounded-lg shadow-md"
          />
        )}
        <p className="text-lg md:text-xl text-center mb-4 px-4">
          {apodData.explanation}
        </p>
        {apodData.photographer && (
          <p className="text-gray-400 text-center mt-4">
            Photo by: {apodData.photographer}
          </p>
        )}
      </div>
    </div>
  );
};

export default Apod;
