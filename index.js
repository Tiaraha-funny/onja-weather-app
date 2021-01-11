import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import WeatherApp from "./Onja_weather-app/WeatherApp";
import {WeatherContextProvider} from "./Onja_weather-app/WeatherAppContext";

ReactDOM.render(
  <WeatherContextProvider>
    <Router>
      <WeatherApp />
    </Router>
  </WeatherContextProvider>,
  document.getElementById("root")
);
