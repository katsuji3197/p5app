'use client'
import { useEffect, useState, FC, ComponentType } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getWeather, hasWeatherApiKey, missingWeatherApiKeyMessage, WeatherData } from "./lib/geatweather";

const CloudyComponent = dynamic(() => import("../../components/CloudyComponent"), { ssr: false });
const RainComponent = dynamic(() => import("../../components/RainComponent"), { ssr: false });
const SnowComponent = dynamic(() => import("../../components/SnowComponent"), { ssr: false });
const SunnyComponent = dynamic(() => import("../../components/SunnyComponent"), { ssr: false });
const ThunderComponent = dynamic(() => import("../../components/ThunderComponent"), { ssr: false });

const Home: FC = () => {
  const [weather, setWeather] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const visibleError = hasWeatherApiKey() ? error : missingWeatherApiKeyMessage;
  
  useEffect(() => {
    if (!hasWeatherApiKey()) {
      return;
    }

    async function fetchWeather() {
      try {
        const weatherData: WeatherData = await getWeather("Kanazawa");
        setWeather(weatherData.weather[0].main);
        setTemperature(weatherData.main.temp);
      } catch (err) {
        setError((err as Error).message);
      }
    }

    fetchWeather();
  }, []);

  let WeatherComponent: ComponentType;
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
        {visibleError ? (
          <div className="min-h-screen flex items-center justify-center p-6">
            <div role="alert" className="max-w-lg bg-black/70 text-white rounded-2xl px-6 py-5 text-center leading-relaxed">
              <p className="text-xl mb-2">天気を表示できません</p>
              <p>{visibleError}</p>
            </div>
          </div>
        ) : (
          <main>
            <span className="fixed -z-50">
              <WeatherComponent />
            </span>
            <span className="w-screen h-screen flex flex-col justify-between items-center text-white">
              <div className="flex bg-black text-xl p-2 gap-2 m-12 bg-opacity-40 px-3 rounded-full text-center opacity-90">
                <p className="bg-gray-500 py-4 w-40 rounded-full shadow-xl">現在の天気</p>
                <Link href="/sunny" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">晴れ</Link>
                <Link href="/cloudy" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">曇り</Link>
                <Link href="/rainy" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">雨</Link>
                <Link href="/snow" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">雪</Link>
                <Link href="/thunder" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">雷</Link>
              </div>
              <span className="flex items-end gap-4 mb-12 text-white">
                {temperature !== null && <div className="text-5xl drop-shadow-xl"> {temperature}</div>}
                <p className="text-2xl drop-shadow-xl">℃</p>
              </span>
              
            </span>
          </main>
        )}
      </span>
    </div>
  );

  // return(
  //   <div className="text-white">
  //     <span className="fixed -z-50">
  //       <SunnyComponent/>
  //     </span>
  //     <span className="w-screen h-screen flex flex-col justify-between items-center">
  //       <div className="flex bg-black gap-2 text-xl p-2 m-12 bg-opacity-40 px-3 rounded-full text-center opacity-90">
  //       <p className="bg-gray-500 py-4 w-40 rounded-full shadow-xl">現在の天気</p>
  //         <Link href="/sunny" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">晴れ</Link>
  //         <Link href="/cloudy" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">曇り</Link>
  //         <Link href="/rainy" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">雨</Link>
  //         <Link href="/snow" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">雪</Link>
  //         <Link href="/thunder" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">雷</Link>
  //       </div>
  //     </span>
  //   </div>
  // );


}

export default  Home;
