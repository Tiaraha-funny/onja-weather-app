import React, { useContext, useState } from "react";
import locationSearchSvg from "../icons/location_searching.svg";
import { WeatherAppContexts } from "../WeatherAppContext";
import Modal from "./Modal";

function Header() {
    const {state, dispatch} = useContext(WeatherAppContexts); 
    const {weather} = state;
    console.log(weather);

    const [search, setSearch ] = useState(false);
    console.log(search);

  return (
    <header>
      <div className="container">
        <button className="container__search" onClick={() => setSearch(true)} >Search for places</button>
        <button><img src={locationSearchSvg} /></button>
      </div>
      {search ? <Modal search={search} /> : ""}
    </header>
  );
}

export default Header;
