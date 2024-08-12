const axios = require('axios');
const News = require('../model/News');
const cron = require('node-cron');

const newsNow = {
  method: 'POST',
  url: 'https://newsnow.p.rapidapi.com/newsv2_top_news_cat',
  headers: {
    'x-rapidapi-key': '73eea5c146msh23094c40cad2b6ep16aaf3jsncd0f9fa00c3f',
    'x-rapidapi-host': 'newsnow.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    category: 'SCIENCE',
    location: '',
    language: 'en',
    page: 2,
    max_results: 20
  }
};


const googleNews = {
  method: 'GET',
  url: 'https://google-news22.p.rapidapi.com/v1/search',
  params: {
    q: 'space OR astronomy OR astrophysics OR NASA OR SpaceX OR ISRO OR ESA OR CERN OR MIT ',
    country: 'us',
    language: 'en'
  },
  headers: {
    'x-rapidapi-key': '73eea5c146msh23094c40cad2b6ep16aaf3jsncd0f9fa00c3f',
    'x-rapidapi-host': 'google-news22.p.rapidapi.com'
  }
};

const fetchAndStoreNews_newsNow = async () => {
  try {
    const response = await axios.request(newsNow);

    if (response.data && response.data.news && Array.isArray(response.data.news)) {
      
      const newsData = response.data.news.map(article => ({
        title: article.title || '',
        description: article.short_description || '',
        url: article.url || '',
        publishedAt: new Date(article.date) || null,
        topImage: article.top_image || '',
        images: Array.isArray(article.images) ? article.images : [],
        videos: Array.isArray(article.videos) ? article.videos : [],
        text: article.text || '',
        publisher: article.publisher ? article.publisher.toString() : '',
        source: 'NewsNow'
      }));

      for (const newsItem of newsData) {
        await News.updateOne(
          { url: newsItem.url }, 
          { $set: newsItem }, 
          { upsert: true }
        );
      }

      console.log('News fetched and stored successfully from NewsNow');
    } else {
      console.error('Unexpected response structure from NewsNow API:');
    }
  } catch (error) {
    console.error('Error fetching news from NewsNow:', error.message);
  }
};

const fetchAndStoreNews_googleNews = async () => {
  try {
    const response = await axios.request(googleNews);

    if (response.data && response.data.data && Array.isArray(response.data.data)) {
      
      const newsData = response.data.data.map(article => ({
        title: article.title || '',
        description: '',
        url: article.url || '',
        publishedAt: new Date(article.date) || null,
        topImage: article.thumbnail || '',
        publisher: article.source ? article.source.name.toString() : '',
        source: 'GoogleNews'
      }));

      for (const newsItem of newsData) {
        await News.updateOne(
          { url: newsItem.url }, 
          { $set: newsItem }, 
          { upsert: true }
        );
      }

      console.log('News fetched and stored successfully from Google News');
    } else {
      console.error('Unexpected response structure from Google News API:', response.data);
    }
  } catch (error) {
    console.error('Error fetching news from Google News:', error.message);
  }
};



// Schedule the fetchAndStoreNews_newsNow function to run every 24 hours
// cron.schedule('0 0 * * *', () => {
//   console.log('Fetching latest news...');
//   fetchAndStoreNews_newsNow();
//   fetchAndStoreNews_googleNews();
// });

// Optional: Call fetchAndStoreNews_newsNow and fetchAndStoreNews_googleNews immediately when the server starts
// fetchAndStoreNews_newsNow();
// fetchAndStoreNews_googleNews();

module.exports = {
  fetchAndStoreNews_newsNow,
  fetchAndStoreNews_googleNews
};
