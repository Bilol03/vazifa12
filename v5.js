const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

axios.get(API_URL)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Xatolik yuz berdi:', error.message);
  });