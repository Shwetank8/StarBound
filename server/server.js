const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
// const cron = require('node-cron');

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());


const authRoute = require("./route/authRoute");
const podRoute = require("./route/podRoute");
//const imgvideoRoute = require("./route/imgvideoRoute");
const newsRoutes = require('./route/newsRoute');
// const {  fetchAndStoreNews_newsNow, fetchAndStoreNews_googleNews } = require('./controller/newsController')
const missionRoute = require('./route/missionRoute');
const seedMissions = require('./seedMission');

mongoose.connect(process.env.DB_URL, {
    dbName:"StarBound"
})
.then(() => console.log("Connected"))
.catch((error) => console.log(error))

app.use('/auth', authRoute);
app.use('/pod', podRoute);                                //   ASTRONOMY PICTURE OF THE DAY API
// app.use('/imgvideo', imgvideoRoute);                      //   NASA IMAGE AND VIDEO LIBRARY API
// app.use('/news', newsRoutes);                               //NEWS API'S
app.use('/mission', missionRoute);


app.listen(5000,(req,res) => {
    console.log("Listening");
    // fetchAndStoreNews_newsNow(),
    // fetchAndStoreNews_googleNews(),
    seedMissions()
});

