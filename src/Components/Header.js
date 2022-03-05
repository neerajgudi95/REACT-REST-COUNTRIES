import React from "react";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styles from "./Header.module.css";

const Header = ({ mode, selectMode }) => {
  return (
    <div className={styles.header}>
      <h2>Where in the world?</h2>
      <div>
        <IconButton onClick={() => selectMode((prevState) => !prevState)}>
          {!mode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
