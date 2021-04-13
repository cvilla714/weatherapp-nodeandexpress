const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const https = require('https');

app.get('/', (req, res) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=F7fe8c7b0e6e25b7a8864650f413ad72&units=metric';
  https.get(url, (response) => {
    console.log(response);
    console.log(response.statusCode);
  });

  res.send('Server is up and running for you');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
