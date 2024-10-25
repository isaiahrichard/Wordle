"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const start = () => {
    router.push("levels");
  };
  return (
    <div className={styles.main}>
      <div className={styles.subTitle}>
        <h1 className={styles.title}>Jennydle</h1>
        <h2>Janetika and Isaiah themed wordle </h2>
        <span>🤩 🟩🟨🟥 🤩</span>
      </div>
      <div className={styles.pillbtn} onClick={start}>
        Start
      </div>
      ;
    </div>
  );
}
