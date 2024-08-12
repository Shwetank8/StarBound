const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  url: {
    type: String,
    required: true
  },
  publishedAt: {
    type: Date,
    required: true
  },
  topImage: {
    type: String
  },
  images: {
    type: [String]  // Array of image URLs
  },
  videos: {
    type: [String]  // Array of video URLs
  },
  text: {
    type: String
  },
  publisher: {
    type: String,
    required: true
  },
  source: {
    type: String,  // Optionally store which API this data came from
  }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
