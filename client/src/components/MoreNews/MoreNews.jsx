import React, { useState, useEffect } from "react";
import axios from "axios";

const MoreNews = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://starboundapi.vercel.app/");
        setNewsArticles(response.data);
      } catch (error) {
        setError("Failed to fetch news articles");
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <div className="text-black text-center">{error}</div>;
  }

  return (
    <div className="bg-white text-black p-8 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-light font-[Font from the Stars] text-[#0033DD] mb-12 text-left">
          More Space News
        </h1>
        <div className="space-y-12">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-8 cursor-pointer"
              onClick={() => window.open(article.url, "_blank")}
            >
              <p className="text-sm font-bold text-gray-900 mb-2">
                {new Date(article.publishedAt).toLocaleDateString(undefined, {
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="text-3xl font-light font-[Font from the Stars] text-[#0033DD] mb-2">
                {article.title}
              </h2>
              <p className="text-lg font-Barlow">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreNews;
