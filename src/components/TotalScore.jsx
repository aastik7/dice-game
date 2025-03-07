import React from "react";
import styled from "styled-components";
const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  text-align: center;
  max-width: 200px;
  /* border: 1px solid purple; */

  h1 {
    font-size: 100px;
    line-height: 100px;
    margin: 0;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
    margin: 0;
  }
`;
