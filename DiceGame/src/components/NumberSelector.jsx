import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({setError, error, selectedNumber , setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value)=>{
    setSelectedNumber(value)
    setError("")
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            key={i}
            onClick={() => numberSelectorHandler(value)}
            isSelected={value === selectedNumber}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font: 24px;
    font-weight: 700;
    margin-top: 10px;
  }
  .error{
    color: red;
    font-weight: 300;
    margin-bottom: 2px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  border-radius: 25px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "darkgray" : "#f0f0f0")};
    cursor: pointer;
  }
`;

