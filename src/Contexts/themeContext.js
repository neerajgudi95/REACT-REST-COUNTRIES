import React from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext({
  darkThemeSelected: true,
  toggleTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [darkThemeSelected, setDarkThemeSelected] = useState(false);

  const toggleTheme = () => {
    setDarkThemeSelected((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkThemeSelected: darkThemeSelected,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
