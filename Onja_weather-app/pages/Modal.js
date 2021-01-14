import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { WeatherAppContexts } from "../Components/WeatherAppContext";

function Modal({ search, setSearch }) {
  const { state, dispatch, CORSE_API, query, setQuery } = useContext(WeatherAppContexts);

  const classModalName = search ? "displayBlock" : "displayNone";

  useEffect( () => {
    handleSubmitQuery()
  }, [query])

  async function handleSubmitQuery(e) {
    console.log("prevent def", e);
    e.preventDefault();
    fetchQuery()
  }

  function handeInputQuery(e) {
    setQuery(e.target.value);
    console.log("fetch this", query);
  }

  return (
    <div className={classModalName}>
    <form className="modal-content"  onSubmit={handleSubmitQuery}>
      <input type="text" value={query} onChange={handeInputQuery} placeholder="search location" />
      <button onSubmit={handleSubmitQuery} className="search-btn">Search</button>
    </form>
    <button onClick={() => setSearch(false)} className="close">X</button>
    </div>
  );
}

export default Modal;
