import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 20.49,
    humidity: 49,
    presure: 1018,
    temp: 21.05,
    weather: "haze",
  });

  let newWeatherInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div>
      <SearchBox newWeatherInfo={newWeatherInfo} />
      <InfoBox weatherInfo={weatherInfo} />
    </div>
  );
}
