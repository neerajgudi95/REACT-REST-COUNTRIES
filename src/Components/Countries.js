import React, { useContext } from "react";
import CountryCard from "./CountryCard";
import styles from "./Countries.module.css";
import ThemeContext from "../Contexts/themeContext";

const Countries = ({ countriesList }) => {
  const totalCountries = countriesList.length;
  const ctx = useContext(ThemeContext);
  const classes = ctx.darkThemeSelected
    ? `${styles.countries} ${styles.darkMode}`
    : `${styles.countries}`;
  return (
    <div className={classes}>
      <p>Found {totalCountries} countries for this region</p>
      <div className={styles.countriesCard}>
        {countriesList?.map((country, idx) => (
          <CountryCard countryData={country} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
