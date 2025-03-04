import { useState } from "react";
import styled from "styled-components";
import StartGame from "./components/StartGame";
import "./App.css";
import Gameplay from "./components/Gameplay";
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`;

function App() {
  const [isGameStart, setGameStart] = useState(true);
  const toggleGame = () => setGameStart((prev) => !prev);
  return (
    <>
      {isGameStart ? <Gameplay></Gameplay> : <StartGame toggle={toggleGame} />}
    </>
  );
}

export default App;
