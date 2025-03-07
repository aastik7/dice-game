import React from "react";
import styled from "styled-components";
import { useState } from "react";
const RollDice = ({ currentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`images/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 0;
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;
