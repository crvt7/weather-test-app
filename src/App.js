import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { WeatherBox } from "./WeatherBox";

function App() {
  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState({
    data: null,
    loading: false,
  });

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWeatherData({ data: weatherData.data, loading: true });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93be819586db4e2e5bd1aa3f5a8dfad2&units=metric`
    )
      .then((x) => x.json())
      .then((y) => {
        setWeatherData({ data: y, loading: false });
        setCity("");
      });
  };

  return (
    <div className="App">
      <div className="weatherBox">
        <div className="weatherBoxHeader">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              placeholder="city name"
              ref={inputRef}
              type="text"
              className="inputCity"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <input type="submit" className="inputButton" value="Search" />
          </form>
        </div>
        {weatherData.data && (
          <WeatherBox
            data={{ ...weatherData.data }}
            loading={weatherData.loading}
          />
        )}
      </div>
    </div>
  );
}

export default App;
