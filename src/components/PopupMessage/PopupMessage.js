import React from "react";
import styles from "./PopupMessage.module.css";
import Image from "next/image";
import santa from "../../../public/images/santa.png";

const PopupMessage = ({ message }) => {
  return (
    <div className={styles.popupWrapper}>
      <div style={{ position: "relative" }}>
        <Image src={santa} width={400} height={400} />
        <div className={styles.speechBubbleWrapper}>
          <div className={styles.speechBubble}>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default PopupMessage;
