"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import GuessBox from "@/components/GuessBox/GuessBox";
import Snowfall from "react-snowfall";
import PopupMessage from "@/components/PopupMessage/PopupMessage";
import ChristmasBag from "@/components/ChristmasBag/ChristmasBag";

const wordList = [
  { word: "homealone", hint: "Our First Christmas Movie", markedIndex: 2 },
  { word: "abeerb", hint: "Holiday Season Workplace", markedIndex: 2 },
  { word: "trees", hint: "Your Stocking Decoration", markedIndex: 1 },
  {
    word: "gingerbread",
    hint: "Rock Solid Christmas Construction",
    markedIndex: 5,
  },
  { word: "frosty", hint: "Christmas Snowman", markedIndex: 5 },
];

const Levels = () => {
  const router = useRouter();

  const [stage, setStage] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guessesUsed, setGuessesUsed] = useState(0);
  const [currentWordObj, setCurrentWordObj] = useState(wordList[stage]);
  const [completedStage, setCompletedStage] = useState(false);
  const [selectingLetter, setSelectingLetter] = useState(false);
  const [christmasBag, setChristmasBag] = useState([]);

  const [guessList, setGuessList] = useState(["", "", "", "", "", ""]);

  const handleChange = (event) => {
    if (event.key == "Enter" && currentGuess) {
      let tempGuessList = [...guessList];
      tempGuessList[guessesUsed] = currentGuess;
      if (currentGuess === currentWordObj.word) {
        setCompletedStage(true);
        setSelectingLetter(true);
      } else {
        setCurrentGuess("");
      }
      setGuessList(tempGuessList);
      setGuessesUsed(guessesUsed + 1);
    }
  };

  useEffect(() => {
    if (stage === 5) {
      router.push("christmasgame");
      return;
    }
    setCurrentGuess("");
    setGuessesUsed(0);
    setCurrentWordObj(wordList[stage]);
    setGuessList(["", "", "", "", "", ""]);
    setCompletedStage(false);
  }, [stage]);

  useEffect(() => {
    if (guessesUsed === 5) {
      setCompletedStage(true);
      setCurrentGuess(currentWordObj.word);
    }
  }, [guessesUsed]);

  const renderEmptyRow = () => {
    return currentWordObj.word
      .split("")
      .map((letter, columnIndex) => (
        <GuessBox key={columnIndex} status={0} textValue={""} />
      ));
  };

  const getStatus = (letter, index) => {
    if (!currentWordObj.word.includes(letter)) {
      return 0;
    } else if (currentWordObj.word.charAt(index) === letter) {
      return 2;
    }
    return 1;
  };

  const renderGrid = () => {
    return guessList.map((guess, index) => {
      if (index > guessesUsed) {
        return renderEmptyRow();
      }
      return guess
        .split("")
        .map((letter, index) => (
          <GuessBox
            key={index}
            status={getStatus(letter, index)}
            textValue={letter}
          />
        ));
    });
  };

  return (
    <div className={styles.levelWrapper}>
      {completedStage && stage === 0 && (
        <PopupMessage
          message={
            selectingLetter
              ? "One of these letters has some extra christmas cheer. Click the pulsing letters to add it to your bag"
              : "A special letter will be highlighted each round. Collect them all for a surprise"
          }
        />
      )}
      {christmasBag.length ? (
        <ChristmasBag bagContents={christmasBag} />
      ) : (
        <></>
      )}
      <Snowfall />
      <div className={styles.title}>Level {Math.min(stage + 1, 7)}</div>
      <div className={styles.subTitle}>Hint: {currentWordObj.hint}</div>
      <div
        className={styles.letterGrid}
        style={{
          gridTemplateColumns: `repeat(${currentWordObj.word.length}, 1fr)`,
        }}
      >
        {renderGrid()}
      </div>
      <div className={styles.guessWrapper}>
        <div style={{ display: "flex", gap: "10px" }}>
          {currentWordObj.word.split("").map((letter, columnIndex) => (
            <div key={columnIndex}>
              <GuessBox
                status={
                  completedStage
                    ? columnIndex === currentWordObj.markedIndex
                      ? 3
                      : 2
                    : 0
                }
                clickFunc={
                  columnIndex === currentWordObj.markedIndex && completedStage
                    ? () => {
                        setSelectingLetter(false);
                        setChristmasBag([...christmasBag, letter]);
                      }
                    : () => {}
                }
                textValue={currentGuess[columnIndex]}
                focused={currentGuess.length === columnIndex}
              />
            </div>
          ))}
        </div>
        <input
          style={{ opacity: 0 }}
          type="text"
          value={currentGuess}
          onChange={(e) => {
            !completedStage &&
              setCurrentGuess(
                e.target.value.toLowerCase().replace(/[^a-zA-Z]/g, "")
              );
          }}
          onKeyUp={
            !completedStage &&
            currentGuess.length === currentWordObj.word.length
              ? handleChange
              : () => {}
          }
          maxLength={currentWordObj.word.length}
          autoFocus={true}
          onBlur={({ target }) => target.focus()}
        />
        {completedStage && !selectingLetter && (
          <div
            onClick={() => setStage(stage + 1)}
            className={styles.nextButton}
          >
            Next level
          </div>
        )}
      </div>
    </div>
  );
};

export default Levels;
