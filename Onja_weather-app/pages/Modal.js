import React, { useContext } from "react";
import { WeatherAppContexts } from "../Components/WeatherAppContext";

function Modal({ search, setSearch }) {
  const { state, handeInputQuery, handleSubmitQuery, qeury } = useContext(WeatherAppContexts);

  const classModalName = search ? "displayBlock" : "displayNone";
  return (
    <div className={classModalName}>
    <form className="modal-content" onSubmit={(e) => handleSubmitQuery(e.target.value)}>
      <input type="text" value={qeury} onChange={handeInputQuery} placeholder="search location" />
      <button type="submit" className="search-btn">Search</button>
    </form>
    <button onClick={() => setSearch(false)} className="close">X</button>
    </div>
  );
}

export default Modal;
