const express = require("express");
const https = require("https");
var cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Weather Data");
});

app.get("/fetchweather", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Turkey&APPID=4e8c38b59a1ddf64bff18cb6042a1354";
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      res.sendStatus(temp);
    });
  });
});

app.listen(5000, function (req, res) {
  console.log("Server is now running on port 5000.");
});
