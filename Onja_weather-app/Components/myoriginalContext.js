


import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";

const WeatherAppContexts = createContext();

const CORSE_API = "https://cors-anywhere.herokuapp.com/";

const DEFAULT_API = "https://www.metaweather.com//api/location/search/?query=";

function WeatherContextProvider({ children }) {
  const [query, setQuery] = useState("london");

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "WEATHER_DEFAULT": {
          return {
            ...state,
            weather: action.response,
            loading: !action.loading,
          };
        }

        case "DETAILS": {
          return {
            ...state,
            weather: action.result,
          };
        }

        default: {
          console.error("No actions defined for", action.type);
          break;
        }
      }
      return state;
    },
    { weather: [], details: [],  loading: false }
  );

  const { weather, loading } = state;
  console.log("first fetch", weather);

  async function fetchDataWeatherFromApi() {
    const response = await axios(CORSE_API + DEFAULT_API + query);
    console.log("response data", response.data);
    dispatch({ type: "WEATHER_DEFAULT", response: response.data });

    if(weather) {
      console.log("woeid waethe", weather.woeid);
    }
  }

  useEffect(async () => {
    fetchDataWeatherFromApi();
    console.log(query);
  }, []);


  function handeInputQuery(e) {
    setQuery(e.target.value);
    console.log("fetch this", query);
  }

  function handleSubmitQuery(e) {
    e.preventDefault();
    console.log(query);
    dispatch({ type: "WEATHER_QUERY" });
  }

  return (
    <WeatherAppContexts.Provider
      value={{ state, dispatch, handeInputQuery, handleSubmitQuery, query }}
    >
      {children}
    </WeatherAppContexts.Provider>
  );
}

export { WeatherContextProvider, WeatherAppContexts };
