import React from "react";
import styles from "./GuessBox.module.css";

const GuessBox = ({
  textValue = "",
  status = 0,
  focused = false,
  clickFunc = () => {},
}) => {
  const getColorByStatus = (status) => {
    switch (status) {
      case 0:
        return "";
      case 1:
        return "#b59e3a";
      case 2:
      case 3:
        return "#538d4e";
      case 4:
        return "#a53d38";
      default:
        return "";
    }
  };
  return (
    <div className={styles.guessBoxWrapper}>
      <div
        className={[
          styles.guessBox,
          status === 3 && styles.specialGuessBox,
        ].join(" ")}
        style={{
          backgroundColor: getColorByStatus(status),
          borderColor: focused && "red",
          borderWidth: focused && "2px",
        }}
        onClick={clickFunc}
      >
        {textValue.toUpperCase()}
      </div>
    </div>
  );
};

export default GuessBox;
