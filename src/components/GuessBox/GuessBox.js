import React from "react";
import styles from "./GuessBox.module.css";

const GuessBox = ({ textValue = "", status = 0, focused = false }) => {
  const getColorByStatus = (status) => {
    switch (status) {
      case 0:
        return "";
      case 1:
        return "#b59e3a";
      case 2:
        return "#538d4e";
    }
  };
  return (
    <div className={styles.guessBoxWrapper}>
      <div
        className={styles.guessBox}
        style={{
          backgroundColor: getColorByStatus(status),
          borderColor: focused && "red",
          borderWidth: focused && "2px",
        }}
      >
        {textValue.toUpperCase()}
      </div>
    </div>
  );
};

export default GuessBox;
