import React, { useContext, useState } from "react";
import { WeatherAppContexts } from "../Components/WeatherAppContext";
import Header from "./Header";

function DisplayWeatherApp() {
  const [search, setSearch] = useState(false);
  console.log("search", search);

  const { state, dispatch } = useContext(WeatherAppContexts);
  const { weather, loading } = state;
  console.log("global weather", weather);

  const nameLocation = loading && weather && weather.parent
  console.log("name of the city", nameLocation);

  const weatherToday =
    loading && weather && weather.consolidated_weather[0];
  console.log("weather today", weatherToday);

  const dateWeath = loading && weather && weather.applicable_date
  console.log("weather of the date", dateWeath);

  const weather1 = loading && weather && weather.consolidated_weather[0];
  console.log("start tomorow", weather1);
  const weather2 = loading && weather && weather.consolidated_weather[2];
  const weather3 = loading && weather && weather.consolidated_weather[3];
  const weather4 = loading && weather && weather.consolidated_weather[4];
  const weather5 = loading && weather && weather.consolidated_weather[5];

  const weekWeather = [weather1, weather2, weather3, weather4, weather5];
  console.log(weekWeather);

  return (
    <section>
      <header className="subheadings">
        <Header/>
        {!loading && "Loading..."}
        <div className="main-container-description">
          <img
            className="image-heading"
            src={`https://www.metaweather.com//static/img/weather/${weatherToday.weather_state_abbr}.svg`}
          />
          <p className="temp">{Math.round(weatherToday.the_temp)}&deg;C</p>
          <p className="name">{weatherToday.weather_state_name}</p>
          <p className="date">
            Today:
            {new Date(weatherToday.applicable_date).toDateString('en-us', { day: 'numeric', weekday: 'short', month: 'short' })}
          </p>
          <h1>{nameLocation.title}</h1>
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
                <p>{Math.round(day.max_temp)} &deg;C</p>
                <p>{Math.round(day.min_temp)} &deg;C</p>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <h2>
            {new Date(weatherToday.applicable_date).toDateString()}{" "}
            Highlight
          </h2>
          <ul className="lists-info">
            <li>
              <p>Wind status</p>
              <p>{Math.round(weatherToday.wind_speed)} mph</p>
              <p>{weatherToday.wind_direction_compass}</p>
            </li>
            <li>
              <p>Humidity</p>
              <p>{weatherToday.humidity} %</p>
              <dfn className="progress-bar">
              <div className="progress">
                <small>0</small>
                <small className="half-progress">50</small>
                <small>100</small>
              </div>
                <progress value={weatherToday.humidity} max="100"></progress>%
              </dfn>
            </li>
            <li>
              <p>Visibility</p>
              <p>{Math.round(weatherToday.visibility)} miles</p>
            </li>
            <li>
              <p>Air pressure</p>
              <p>{Math.round(weatherToday.air_pressure)} mb</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DisplayWeatherApp;
