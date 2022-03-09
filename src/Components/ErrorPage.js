import React from "react";
import styles from "./ErrorPage.module.css";

const ErrorPage = ({ errorMsg }) => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorImg}></div>
      <h3>{errorMsg}</h3>
    </div>
  );
};

export default ErrorPage;
