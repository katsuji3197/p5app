"use client";

import { useEffect, useState, FC } from "react";
import CloudyComponent from "../../components/CloudyComponent";
import RainComponent from "../../components/RainComponent";
import SnowComponent from "../../components/SnowComponent";
import SunnyComponent from "../../components/SunnyComponent";
import ThunderComponent from "../../components/ThunderComponent";
import { getWeather , WeatherData } from "./lib/geatweather";

const Home: FC = () => {
  const [weather, setWeather] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchWeather() {
      try {
        const weatherData: WeatherData = await getWeather("Kanazawa");
        setWeather(weatherData.weather[0].main);
        setTemperature(weatherData.main.temp);
        setDescription(weatherData.weather[0].description);
      } catch (err) {
        setError((err as Error).message);
      }
    }

    fetchWeather();
  }, []);

  let WeatherComponent: FC;
  if (weather === "Clear") {
    WeatherComponent = SunnyComponent;
  } else if (weather === "Rain") {
    WeatherComponent = RainComponent;
  } else if (weather === "Clouds") {
    WeatherComponent = CloudyComponent;
  } else if (weather === "Snow") {
    WeatherComponent = SnowComponent;
  } else if (weather === "Thunderstorm") {
    WeatherComponent = ThunderComponent;
  } else {
    WeatherComponent = () => <div>Weather not recognized</div>;
  }

  return (
    <div id="min-w-screen">
      <span className="w-screen -z-50">
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <main>
            <span className="fixed -z-50">
              <WeatherComponent />
            </span>
            <span className="w-screen h-screen flex flex-col justify-end items-center">
              <span></span>
              {temperature !== null && <div>Temperature: {temperature}°C</div>}
              {description && <div>Description: {description}</div>}
            </span>
          </main>
        )}
      </span>
    </div>
  );
}

export default Home;
