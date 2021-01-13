import React, { useContext, useState } from "react";
import locationSearchSvg from "../icons/location_searching.svg";
import Modal from "../pages/Modal";
import { WeatherAppContexts } from "../Components/WeatherAppContext";

function DisplayWeatherApp() {
  const [search, setSearch] = useState(false);
  console.log(search);

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
    <section>
      <header className="subheadings">
        <div className="main-container">
          <button className="container__search" onClick={() => setSearch(true)}>
            Search for places
          </button>
          <button className="container__icon">
            <img src={locationSearchSvg} />
          </button>
        </div>
        {search ? <Modal search={search} setSearch={setSearch} /> : ""}
        {!loading && "Loading..."}
        <div className="main-container-description">
          <img
            className="image-heading"
            src={`https://www.metaweather.com//static/img/weather/${weatherConsolidated.weather_state_abbr}.svg`}
          />
          <p className="temp">{weatherConsolidated.the_temp}&deg;C</p>
          <p className="name">{weatherConsolidated.weather_state_name}</p>
          <p className="date">
            Today:{" "}
            {new Date(weatherConsolidated.applicable_date).toDateString()}
          </p>
        </div>
      </header>
      <div className="more-info">
        <ul className="container">
          {weekWeather.map((day) => (
            <li key={day.id} className="list-items">
              <p>{new Date(day.applicable_date).toDateString()}</p>
              <img
                className="image-content"
                src={`https://www.metaweather.com//static/img/weather/${day.weather_state_abbr}.svg`}
              />
              <div className="tempeture">
                <p>{day.max_temp} &deg;C</p>
                <p>{day.min_temp} &deg;C</p>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <h2>
            {new Date(weatherConsolidated.applicable_date).toDateString()}{" "}
            Highlight
          </h2>
          <ul className="lists-info">
            <li>
              <p>Wind status</p>
              <p>{weatherConsolidated.wind_speed} mph</p>
              <p>{weatherConsolidated.wind_direction_compass}</p>
            </li>
            <li>
              <p>Humidity</p>
              <p>{weatherConsolidated.humidity} %</p>
              <p>
                <progress>100</progress>%
              </p>
            </li>
            <li>
              <p>Visibility</p>
              <p>{weatherConsolidated.visibility} miles</p>
            </li>
            <li>
              <p>Air pressure</p>
              <p>{weatherConsolidated.air_pressure} mb</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DisplayWeatherApp;
