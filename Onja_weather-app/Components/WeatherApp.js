import React, { useContext } from "react";
import DisplayWeatherApp from "../pages/DisplayWeatherApp";
import Header from "../pages/Header";

function WeatherApp() {
  return (
    <main>
      <h1>Onja Weather App </h1>
      <Header />
      <DisplayWeatherApp />
    </main>
  );
}

export default WeatherApp;
