import React, { useState } from "react";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button, OutLineButton } from "./styled/Button";
import Rules from "./Rules";
const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(1); //NumberSelecter State
  const [currentDice, setCurrentDice] = useState(1); // RollDice State
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore((prev) => 0);
  };

  const manageRules = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          // @ts-ignore
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutLineButton onClick={resetScore}>Reset Score</OutLineButton>
        <Button onClick={manageRules}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.div`
  .top_section {
    padding-top: 64px;
    display: flex;
    justify-content: space-around;
    align-items: end;
    /* border: 1px solid black; */
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;
