import styled from "styled-components";

export const Button = styled.button`
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
  transition: 0.3s background ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;

export const OutLineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.3s background ease-in;
  }
`;
