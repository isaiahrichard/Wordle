"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Snowfall from "react-snowfall";

export default function Home() {
  const router = useRouter();
  const start = () => {
    router.push("levels");
  };
  return (
    <div className={styles.main}>
      <Snowfall />
      <div className={styles.subTitle}>
        <h1 className={styles.title}>Jennydle</h1>
        <h2 style={{ marginBottom: 4 }}>Janetika christmas themed wordle </h2>
        <span>🎅🏾 🟩🟨🟥 🎅🏾</span>
      </div>
      <button className={styles.button} type="button" onClick={start}>
        Start
        <img
          className={styles.buttonHat}
          src="https://res.cloudinary.com/freecodez/image/upload/v1701705719/images/guidvrtf8kre7pc3jdk5.webp"
          alt=""
        />
      </button>
    </div>
  );
}
