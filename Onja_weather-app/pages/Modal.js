import React, { useContext } from "react";
import { WeatherAppContexts } from "../Components/WeatherAppContext";

function Modal({ search, setSearch }) {
  const { state, handeInputQuery, handleSubmitQuery, qeury } = useContext(WeatherAppContexts);

  const classModalName = search ? "displayBlock" : "displayNone";
  return (
    <form className={classModalName} onSubmit={handleSubmitQuery}>
      <button onClick={() => setSearch(false)}>X</button>
      <input type="text" value={qeury} onChange={handeInputQuery} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Modal;
