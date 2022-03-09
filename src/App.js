import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import "./App.css";
import Countries from "./Components/Countries";
import ErrorPage from "./Components/ErrorPage";
import Loading from "./Components/Loading";
import { ThemeContextProvider } from "./Contexts/themeContext";

const App = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [region, setRegion] = useState("all");
  let baseUrl = "https://restcountries.com/v3.1/";
  const newUrl =
    region === "all" ? `${baseUrl}/all` : `${baseUrl}/region/${region}`;

  const fetchCountries = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Something's wrong please refresh the page`);
      }
      const data = await response.json();
      setErrorMessage();
      setIsLoading(false);
      setCountriesList(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchCountries(newUrl);
  }, [newUrl]);

  return (
    <ThemeContextProvider>
      <div className="app">
        <Header />
        <SearchBar selectRegion={setRegion} />
        {errorMessage ? (
          <ErrorPage errorMsg={errorMessage} />
        ) : isLoading ? (
          <Loading />
        ) : (
          <Countries countriesList={countriesList} />
        )}
      </div>
    </ThemeContextProvider>
  );
};

export default App;
