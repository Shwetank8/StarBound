const axios = require('axios');

exports.searchImages = async (req, res) => {
  const { query } = req.params;
  try {
    const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from NASA Image and Video Library API' });
  }
};
