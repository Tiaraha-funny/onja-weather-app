import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import WeatherApp from "./Onja_weather-app/Components/WeatherApp";
import { WeatherContextProvider } from "./Onja_weather-app/Components/WeatherAppContext";
import "./Onja_weather-app/index.css";

ReactDOM.render(
  <WeatherContextProvider>
    <Router>
      <WeatherApp />
    </Router>
  </WeatherContextProvider>,
  document.getElementById("root")
);
