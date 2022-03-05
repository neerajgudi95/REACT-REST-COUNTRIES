import React, { useRef, useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [optionSelected, setOptionSelected] = useState("all");
  const inputRef = useRef();

  const searchCountry = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={searchCountry}>
        <input
          type="text"
          name="countryName"
          id="countryName"
          placeholder="Search country by name"
          ref={inputRef}
          className={styles["form-control"]}
        />
        <select
          name="region"
          id="region"
          className={styles.selectBar}
          value={optionSelected}
          onChange={(e) => {
            console.log(e.target.value);
            setOptionSelected(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};

export default SearchBar;
