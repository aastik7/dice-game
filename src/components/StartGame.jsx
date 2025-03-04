import React from "react";
import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  /* border: 2px solid yellow; */
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
    margin-bottom: 10px; /* Reduced margin-bottom to decrease space */
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  width: 220px;
  height: 44px;
  border-radius: 5px;
  padding: 10px 18px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  line-height: 24px;
  transition: 0.1s background ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.1s background ease-in;
  }
`;
