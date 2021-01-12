import React, { useContext, useState } from "react";
import locationSearchSvg from "../icons/location_searching.svg";
import Modal from "../pages/Modal";

function Header() {

  const [search, setSearch] = useState(false);
  console.log(search);

  return (
    <header>
      <div className="container">
        <button className="container__search" onClick={() => setSearch(true)}>
          Search for places
        </button>
        <button>
          <img src={locationSearchSvg} />
        </button>
      </div>
      {search ? <Modal search={search} setSearch={setSearch} /> : ""}
    </header>
  );
}

export default Header;
