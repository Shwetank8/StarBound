const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();

exports.getPod = async (req, res) => {
  try {
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from NASA API' });
  }
};
