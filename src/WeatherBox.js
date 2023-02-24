import React, { useEffect } from "react";
import wind from "./wind.png";
import humidity from "./humidity.png";


export const WeatherBox = (data) => {
  useEffect(() => {
    console.log(data);
  }, []);

  const weatherData = data.data;

  switch (weatherData.cod) {
    case "404":
      return <div className="weatherBoxContent">City not found</div>;
    case "400":
      return <div className="weatherBoxContent">City not found</div>;
    default:
      return (
        <div className="weatherBoxContent">
          <div className="weatherContentHeader">
            {weatherData.name}, {weatherData.sys.country}
          </div>

          <div className="mainDisplay">
            <div className="temperature">
              <div className="bigTemperature">
                {Math.round(weatherData.main.temp)}°C
              </div>

              <div className="smallTemperature">
                Feels like {Math.round(weatherData.main.feels_like)}°C
              </div>
            </div>
            <img
              className="weatherIcon"
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </div>

          <div className="weatherFooter">

            <div className="wind">
              <img className="windIcon" src={wind} alt="windIcon" />
              {Math.round(weatherData.wind.speed)} m/s
            </div>

            <div className="humidity">
              <img src={humidity} className="humidityIcon" alt="humidityIcon" />
              {weatherData.main.humidity}%
            </div>

          </div>
        </div>
      );
  }
};
