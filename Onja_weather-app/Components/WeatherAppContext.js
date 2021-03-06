import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";

const WeatherAppContexts = createContext();

const CORSE_API = "https://cors-anywhere.herokuapp.com/";

const DEFAULT_API = "https://www.metaweather.com//api/location/";

const QUERY = "https://www.metaweather.com//api/location/search/?query=";

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

        case "WEATHER_QUERY": {
          return {
            ...state,
            weather: action.result
          }
        }

        default: {
          console.error("No actions defined for", action.type);
          break;
        }
      }
      return state;
    },
    { weather: [], date: new Date(), loading: false, woeid: "44418" }
  );

  const { weather, loading, woeid } = state;
  console.log(woeid);
  console.log("first fetch", (weather.woeid));

  function detailedWeather() {
      console.log("details", weather.woeid);
  }

  useEffect(async () => {
    const response = await axios(CORSE_API + DEFAULT_API + woeid );
    console.log(response.data);
    dispatch({ type: "WEATHER_DEFAULT", response: response.data });
    console.log(query);
  }, []);

  useEffect(async () => {
    const result = await axios(CORSE_API + QUERY + query )
    console.log(result.data);
    dispatch({type: "WEATHER_QUERY", result: result.data})
  }, [])

  function handeInputQuery(e) {
    setQuery(e.target.value);
    console.log("fetch this", query);
  }

  function handleSubmitQuery(e) {
    e.preventDefault();
    console.log(query);
    dispatch({type: "WEATHER_QUERY"})
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