import React from "react";
import CountryCard from "./CountryCard";
import styles from "./Countries.module.css";

const Countries = ({ countriesList }) => {
  return (
    <div className={styles.countries}>
      {countriesList?.map((country, idx) => (
        <CountryCard countryData={country} key={idx} />
      ))}
    </div>
  );
};

export default Countries;
