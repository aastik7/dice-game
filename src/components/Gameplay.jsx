import React, { useState } from "react";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
const Gameplay = () => {
  const [currentDice, setCurrentDice] = useState(1);
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector />
      </div>
      <RollDice />
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
    border: 1px solid black;
  }
`;
