import React, { useRef, useContext } from "react";
import ThemeContext from "../Contexts/themeContext";
import styles from "./SearchBar.module.css";

const SearchBar = ({ selectRegion }) => {
  const inputRef = useRef();
  const ctx = useContext(ThemeContext);
  const searchCountry = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  const classes = ctx.darkThemeSelected
    ? `${styles.searchBar} ${styles.darkMode}`
    : `${styles.searchBar}`;
  return (
    <div className={classes}>
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
          onChange={(e) => {
            selectRegion(e.target.value);
          }}
          // value={selectedRegRef.current.value}
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
