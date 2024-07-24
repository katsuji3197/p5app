// lib/getWeather.ts
export interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}

export async function getWeather(city: string): Promise<WeatherData> {
  const API_KEY = 'cc599e1269deedd48c322eae6d5e4a35'; // OpenWeatherMapのAPIキーを設定
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();
  return data;
}
