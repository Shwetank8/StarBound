import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import bgVideo from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Exploration from "./components/Exploration/Exploration";
import Apod from "./components/Apod/Apod";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import MoreNews from "./components/MoreNews/MoreNews";
import Missions from "./components/Missions/Missions";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="h-[700px] relative">
                <video
                  autoPlay
                  loop
                  muted
                  className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
                  src={bgVideo}
                  type="video/mp4"
                ></video>
                <Navbar />
                <Main />
              </div>
              <section id="spotlight">
                <Apod />
              </section>
              <section id="news">
                <Exploration />
              </section>
              <section id="missions">
                <Banner />
                <Banner2 />
              </section>
              {/* <Footer /> */}
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="h-screen bg-gradient-to-r from-indigo-900 to-black flex items-center justify-center">
              <Login />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="h-screen bg-gradient-to-r from-indigo-900 to-black flex items-center justify-center">
              <Signup />
            </div>
          }
        />
        <Route path="/exploration" element={<Exploration />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/news" element={<MoreNews />} />
      </Routes>
    </Router>
  );
}

export default App;
