import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";

const WeatherAppContexts = createContext();

const CORSE_API = "https://cors-anywhere.herokuapp.com/" 
const DEFAULT_API =
  "https://www.metaweather.com//api/location/search/?query=london";

function WeatherContextProvider({ children }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "WEATHER_DEFAULT":
          {
            return {
              ...state,
              weather: action.response,
            };
          }
          break;
        default: {
          console.error("No actions defined for", action.type);
          break;
        }
      }
      return state;
    },
    { weather: [], query: "london" }
  );

  useEffect(async () => {
      const response = await axios(CORSE_API + DEFAULT_API + query)
      console.log(response.data)
      dispatch({type: "WEATHER_DEFAULT", response: response.data})
  }, []);

  function filterByLocation() {
    console.log("me");
  }

  return (
    <WeatherAppContexts.Provider value={{ state, dispatch }}>
      {children}
    </WeatherAppContexts.Provider>
  );
}

export { WeatherContextProvider, WeatherAppContexts };
