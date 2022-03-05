import React from "react";
import styles from "./CountryCard.module.css";

const CountryCard = ({ countryData }) => {
  return (
    <div className={styles.countryCard}>
      <div className={styles.countryFlag}>
        <img src={countryData.flags.png} alt="flag" />
      </div>
      <div className={styles.countryInfo}>
        <h2 className={styles.countryName}>{countryData.name}</h2>
        <p>
          <span>Population:&nbsp;</span>
          {countryData.population.toLocaleString("en-US")}
        </p>
        <p>
          <span>Region:&nbsp;</span>
          {countryData.region}
        </p>
        <p>
          <span>Capital:&nbsp;</span>
          {countryData.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
