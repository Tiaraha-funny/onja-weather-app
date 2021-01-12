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
  console.log(weather);

  useEffect(async () => {
    const response = await axios(CORSE_API + DEFAULT_API + woeid );
    console.log(response.data);
    dispatch({ type: "WEATHER_DEFAULT", response: response.data });
    console.log(query);
  }, []);

  function handeInputQuery(e) {
    setQuery(e.target.value);
    console.log("fetch this", query);
  }

  function handleSubmitQuery(e) {
    e.preventDefault();
    console.log(query);
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
