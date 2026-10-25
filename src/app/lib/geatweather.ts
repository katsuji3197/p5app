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

export const missingWeatherApiKeyMessage =
  "NEXT_PUBLIC_OPENWEATHER_API_KEY が未設定です。.env.example を .env.local にコピーし、OpenWeatherMap の API キーを記入してから、開発サーバーを再起動してください。";

export function hasWeatherApiKey(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY?.trim());
}

export async function getWeather(city: string): Promise<WeatherData> {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY?.trim();
  if (!apiKey) {
    throw new Error(missingWeatherApiKeyMessage);
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
  );
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(
        "OpenWeatherMap が API キーを拒否しました。NEXT_PUBLIC_OPENWEATHER_API_KEY の値を確認し、開発サーバーを再起動してください。"
      );
    }
    throw new Error(`天気データの取得に失敗しました（HTTP ${response.status}）。`);
  }
  const data = await response.json();
  return data;
}
