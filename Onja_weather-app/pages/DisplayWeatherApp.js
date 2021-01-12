import React, { useContext } from "react";
import { WeatherAppContexts } from "../Components/WeatherAppContext";

function DisplayWeatherApp() {
  const { state, dispatch } = useContext(WeatherAppContexts);
  const { weather, loading } = state;
  console.log(weather);

  const weatherConsolidated =
    loading && weather && weather.consolidated_weather[0];
  console.log(weatherConsolidated);

  // const date1 = loading && weather && ;

  const weather1 = loading && weather && weather.consolidated_weather[1];
  console.log(weather1);
  const weather2 = loading && weather && weather.consolidated_weather[2];
  const weather3 = loading && weather && weather.consolidated_weather[3];
  const weather4 = loading && weather && weather.consolidated_weather[4];
  const weather5 = loading && weather && weather.consolidated_weather[5];

  const weekWeather = [weather1, weather2, weather3, weather4, weather5];
  console.log(weekWeather);

  return (
    <main>
      <div>
        {!loading && "Loading..."}
        <img
          src={`https://www.metaweather.com//static/img/weather/${weatherConsolidated.weather_state_abbr}.svg`}
        />
        <p>{weatherConsolidated.humidity}&deg;C</p>
        <p>{weatherConsolidated.weather_state_name}</p>
        <p>Today: {new Date(weatherConsolidated.applicable_date).toDateString()}</p>
      </div>
      <div>
        {weekWeather.map((day) => (
          <ul key={day.id}>
            <li>{new Date(day.applicable_date).toDateString()}</li>
            <img
              src={`https://www.metaweather.com//static/img/weather/${day.weather_state_abbr}.svg`}
            />
            <li>{day.humidity}&deg;C</li>
            <li>{day.predictability}&deg;C</li>
          </ul>
        ))}
      </div>
      <div>
        <h2>{new Date(weatherConsolidated.applicable_date).toDateString()} Highlight</h2>
        <ul>
          <li>
            <p>Wind status</p>
            <p></p>
          </li>
        </ul>
      </div>
    </main>
  );
}
{
  /* <li>{day.weather2}</li> */
}
{
  /* <li>{day.weather3}</li> */
}
{
  /* <li>{day.weather4}</li> */
}
{
  /* <li>{day.weather5}</li> */
}
export default DisplayWeatherApp;
