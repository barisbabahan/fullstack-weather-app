import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState("Not yet gotten!");

  const fetchWeatherTemp = async () => {
    await axios({
      method: "get",
      url: "http://localhost:5000/fetchweather",
      responseType: "stream",
    }).then(({ data }) => {
      setWeather(data);
    });
  };

  return (
    <div>
      <button onClick={() => fetchWeatherTemp()}>Get Weather in London</button>
      <h1>The weather in London is: {weather}</h1>
    </div>
  );
}

export default Weather;
