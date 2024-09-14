import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaNewspaper } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace with your API endpoint to fetch news articles from your database
        const response = await axios.get("https://starboundapi.vercel.app/");
        const filteredArticles = response.data.slice(0, 3); // Get the top 3 articles
        setNewsArticles(filteredArticles);
      } catch (error) {
        setError("Failed to fetch news articles");
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <div className="text-white">{error}</div>;
  }

  return (
    <div className="bg-black text-white relative z-50">
      <div className="container">
        <h1 className="text-center text-4xl font-bold mb-8">
          Latest Space News
        </h1>
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {newsArticles.map((article, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 200}
                className="min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto cursor-pointer"
                onClick={() => window.open(article.url, "_blank")}
              >
                <FaNewspaper className="text-7xl" />
                <h1>{article.title}</h1>
                <p className="text-sm">{article.description}</p>
                <p className="text-sm text-gray-400">{article.source.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg text-xl hover:bg-indigo-700 transition mb-12"
              onClick={() => navigate("/news")}
            >
              More Space News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
