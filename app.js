const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const https = require('https');

app.get('/', (req, res) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=F7fe8c7b0e6e25b7a8864650f413ad72&units=metric';
  https.get(url, (response) => {
    // console.log(response);
    console.log(response.statusCode);

    response.on('data', (data) => {
      // console.log(data);
      const weatherData = JSON.parse(data);
      // const objectManga = {
      //   name: 'One Piece',
      //   mainguy: 'Luffy',
      // };
      // console.log(JSON.stringify(objectManga));
      console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      const feelslike = weatherData.main.feels_like;
      console.log(feelslike);
      const descrip = weatherData.weather[0].description;
      console.log(descrip);
      const icon = weatherData.weather[0].icon;
      console.log(icon);
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      res.write(`<p>The weather condition is ${descrip}</p>`);
      res.write(`<h1>The temperate is ${temp}</h1>`);
      res.write(`<h3>It feels like ${feelslike}</h3>`);
      res.write(`<img src=${imageURL}>`);
      // res.send(`<h1>The temperature in London is ${temp} degrees Celcius, it feels like ${feelslike} adn the forecast is ${descrip}</h1>`);
      res.send();
    });
  });

  // res.send('Server is up and running for you');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
