import React from "react";
import "./Loader.css"; // Ensure this CSS file includes the new styles

const GalaxyLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="star-container">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>
  );
};

export default GalaxyLoader;
