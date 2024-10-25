"use client";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import styles from "./page.module.css";

const Completed = ({ router }) => {
  const [pos, setPos] = useState({ x: 60, y: 50 });
  const [loopConfetti, setloopConfetti] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    console.log("CONFETTI");
    setTimeout(() => {
      setloopConfetti(false);
    }, 5000);
  }, []);

  const noClick = () => {
    const x = Math.floor(Math.random() * 81) + 10;
    const y = Math.floor(Math.random() * 81) + 10;
    setPos({ x, y });
  };

  return (
    <div>
      {!done ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Confetti
            width={window.innerWidth}
            height={window.innerHeigh}
            recycle={loopConfetti}
            numberOfPieces={600}
          />
          <div className={styles.congrats}>
            {"Congratulations".toUpperCase()}
          </div>
          <div className={styles.congratsSubtitle}>
            Did you enjoy the experience?
          </div>
          <div
            className={styles.button}
            style={{ top: "50%", left: "30%" }}
            onClick={() => setDone(true)}
          >
            Yes 😊
          </div>
          <div
            className={styles.button}
            onClick={noClick}
            style={{ top: `${pos.y}%`, left: `${pos.x}%` }}
          >
            No 😥
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className={styles.congrats}>Thanks for playing😊</div>
        </div>
      )}
    </div>
  );
};

export default Completed;
