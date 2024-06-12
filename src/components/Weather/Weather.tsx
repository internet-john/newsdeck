import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import useWeatherStore from "../../stores/weatherStore";
import "./Weather.css";

export const Weather: React.FC = () => {
  const { data, loading, error: fetchError, fetchData } = useWeatherStore();
  const [weather, setWeather] = useState<number | null>(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    fetchData(
      `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=${
        import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
      }`
    );

    setWeather(data);
  };

  if (fetchError) return <div>Something went wrong {fetchError}</div>;

  return loading ? <Loader /> : <div id="weather">{weather}*F</div>;
};
