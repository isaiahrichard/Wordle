import React from "react";
import styles from "./ChristmasBag.module.css";
import GuessBox from "../GuessBox/GuessBox";

const ChristmasBag = ({ bagContents }) => {
  return (
    <div className={styles.ChristmasBagWrapper}>
      <div className={styles.title}>Christmas Bag</div>
      <div className={styles.contentWrapper}>
        {bagContents.map((specialLetter, index) => (
          <div className={styles.guessBoxWrap} key={index}>
            <GuessBox status={2} textValue={specialLetter} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChristmasBag;
