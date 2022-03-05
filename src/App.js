import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import "./App.css";
import Countries from "./Components/Countries";

const App = () => {
  const [mode, setMode] = useState(false);
  const [countriesList, setCountriesList] = useState([]);
  const fetchCountries = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Something's wrong please try reloading the page`);
      }
      const data = await response.json();
      setCountriesList(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const url = "https://restcountries.com/v2/all";
    fetchCountries(url);
  }, []);

  return (
    <div className="app">
      <Header mode={mode} selectMode={setMode} />
      <SearchBar />
      <Countries countriesList={countriesList} />
    </div>
  );
};

export default App;
