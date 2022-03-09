import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styles from "./Header.module.css";
import ThemeContext from "../Contexts/themeContext";

const Header = () => {
  const ctx = useContext(ThemeContext);
  const classes = ctx.darkThemeSelected
    ? `${styles.header} ${styles.darkMode}`
    : `${styles.header}`;
  return (
    <div className={classes}>
      <h2>Where in the world?</h2>
      <div>
        <IconButton onClick={ctx.toggleTheme}>
          {!ctx.darkThemeSelected ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
