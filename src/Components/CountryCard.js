import React from "react";
import styles from "./CountryCard.module.css";

const CountryCard = ({ countryData }) => {
  let shortCountryName =
    countryData.name.common.length > 20
      ? countryData.name.common.slice(0, 20).concat("...")
      : countryData.name.common;
  const countryCap = countryData.capital ? countryData.capital : "NA";
  return (
    <div className={styles.countryCard}>
      <div className={styles.countryFlag}>
        <img src={countryData.flags.png} alt="flag" />
      </div>
      <div className={styles.countryInfo}>
        <h2 className={styles.countryName}>{shortCountryName}</h2>
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
          {countryCap}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
