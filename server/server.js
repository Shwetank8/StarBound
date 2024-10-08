const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
// const cron = require('node-cron');


dotenv.config();
const app = express();

// Middleware setup
app.use(bodyParser.json());


// CORS configuration
const allowedOrigins = [process.env.FRONTEND_URL];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Import routes
const authRoute = require("./route/authRoute");
const podRoute = require("./route/podRoute");
// const imgvideoRoute = require("./route/imgvideoRoute");
const newsRoutes = require("./route/newsRoute");
// const { fetchAndStoreNews_newsNow, fetchAndStoreNews_googleNews } = require('./controller/newsController');

const seedMissions = require("./seedMission");
const Mission = require("./model/Missions");

// Route to get all missions
app.get("mission", async (req, res) => {
  try {
    const missions = await Mission.find();
    res.json(missions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get the top 2 missions
app.get("mission/top", async (req, res) => {
  try {
    const missions = await Mission.find().sort({ launchDate: -1 }).limit(2);
    res.json(missions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Database connection
mongoose
  .connect(process.env.DB_URL, {
    dbName: "StarBound",
  })
  .then(() => console.log("Connected"))
  .catch((error) => console.log(error));

// Set up routes
app.use("auth", authRoute);
app.use("pod", podRoute); //   ASTRONOMY PICTURE OF THE DAY API
// app.use('/imgvideo', imgvideoRoute);                      //   NASA IMAGE AND VIDEO LIBRARY API
app.use("news", newsRoutes); //NEWS API'S

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // fetchAndStoreNews_newsNow(),
  // fetchAndStoreNews_googleNews(),
  seedMissions();
});