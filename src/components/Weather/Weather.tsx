import React, { useState, useEffect } from "react";
import "./Weather.css";
import Loader from "../Loader/Loader";

export const Weather: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weather, setWeather] = useState<number | null>(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=${
          import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
        }`
      );
      const weatherData = await response.json();
      const todaysWeather =
        weatherData?.timelines?.daily?.[0]?.values?.temperatureMax * (9 / 5) +
        32;
      setIsLoading(false);
      setWeather(Math.ceil(todaysWeather));
    } catch (e) {
      console.log("e", e);
    }
  };

  return isLoading ? <Loader /> : <div id="weather">{weather}*F</div>;
};
