"use client";

import { useEffect, useState, FC } from "react";
import CloudyComponent from "../../components/CloudyComponent";
import RainComponent from "../../components/RainComponent";
import SnowComponent from "../../components/SnowComponent";
import SunnyComponent from "../../components/SunnyComponent";
import ThunderComponent from "../../components/ThunderComponent";
import { getWeather , WeatherData } from "./lib/geatweather";
import Link from "next/link";

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
            <span className="w-screen h-screen flex flex-col justify-between items-center">
              <div className="flex bg-black text-xl p-2 gap-2 m-12 bg-opacity-40 px-3 rounded-full text-center opacity-90">
                <p className="bg-gray-500 py-4 w-40 rounded-full shadow-xl">現在の天気</p>
                <Link href="/sunny" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">晴れ</Link>
                <Link href="/cloudy" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">曇り</Link>
                <Link href="/rainy" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">雨</Link>
                <Link href="/thunder" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">雷</Link>
              </div>
              <span className="flex items-end gap-4 mb-12">
                {temperature !== null && <div className="text-5xl drop-shadow-xl"> {temperature}</div>}
                <p className="text-2xl drop-shadow-xl">℃</p>
              </span>
              
            </span>
          </main>
        )}
      </span>
    </div>
  );
}

export default  Home;
