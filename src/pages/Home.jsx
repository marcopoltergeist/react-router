import { useState } from "react";

const getWeatherOfTheDay = () => {
  return "sunny";
};

function Home() {
  const [weather, setWeather] = useState(null);

  return (
    <>
      <h1>Hello from Home</h1>

      {weather != null ? (
        <p>Today is a {weather} day</p>
      ) : (
        <button
          type="button"
          onClick={() => {
            const weatherOfTheDay = getWeatherOfTheDay();

            setWeather(weatherOfTheDay);
          }}
        >
          Get Weather
        </button>
      )}
    </>
  );
}

export default Home;