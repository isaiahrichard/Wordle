"use client";
import React from "react";
import styles from "./page.module.css";
import GuessBox from "@/components/GuessBox/GuessBox";

const christmasgame = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>Christmas Bag</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <GuessBox status={2} textValue="M" />
          <GuessBox status={2} textValue="E" />
          <GuessBox status={2} textValue="R" />
          <GuessBox status={2} textValue="R" />
          <GuessBox status={2} textValue="Y" />
        </div>
      </div>
      <div className={styles.scroll} />
      <div className={styles.messageContainer}>
        <div>
          <span style={{ fontSize: "1.5rem", color: "#538d4e" }}>M</span>y days
          always end on a high note when I end them talking to you. Hearing your
          voice and seeing your smile can turn my worst day into a winter
          wonderland
        </div>
        <div>
          <span style={{ fontSize: "1.5rem", color: "#538d4e" }}>E</span>
          ven now that the days are getting colder and dark being in your
          presence gives me a warmth that makes me feel like I can stop a
          blizzard
        </div>
        <div>
          <span style={{ fontSize: "1.5rem", color: "#538d4e" }}>R</span>
          arely do you find someone that you can talk endlessly with and
          consider myself lucky to have such a great yapping partner
        </div>
        <div>
          <span style={{ fontSize: "1.5rem", color: "#538d4e" }}>R</span>
          eflecting on the past few months never fails to make me smile. From
          4am hangman to accidental nose picking, happy memories are in no short
          supply
        </div>
        <div>
          <span style={{ fontSize: "1.5rem", color: "#538d4e" }}>Y</span>
          ou&apos;re one of the most caring and thoughtful people that I know
          and I&apos;m so happy that I get to call you my girlfriend
        </div>
      </div>
      <div className={styles.christmasMsg}>
        <div className={styles.christmasMsgInner}>
          <GuessBox status={2} textValue="M" />
          <GuessBox status={4} textValue="E" />
          <GuessBox status={2} textValue="R" />
          <GuessBox status={4} textValue="R" />
          <GuessBox status={2} textValue="Y" />
        </div>
        <div className={styles.christmasMsgInner}>
          <GuessBox status={4} textValue="C" />
          <GuessBox status={2} textValue="H" />
          <GuessBox status={4} textValue="R" />
          <GuessBox status={2} textValue="I" />
          <GuessBox status={4} textValue="S" />
          <GuessBox status={2} textValue="T" />
          <GuessBox status={4} textValue="M" />
          <GuessBox status={2} textValue="A" />
          <GuessBox status={4} textValue="S" />
        </div>
      </div>
    </div>
  );
};

export default christmasgame;
