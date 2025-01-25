import { useState } from "react";
import styled from "styled-components";

const Rules = () => {
  const [isOpen, setIsOpen] = useState(true); 

  const closeModal = (e) => {
    // Check if the click is outside the RulesContainer
    if (e.target === e.currentTarget) {
      setIsOpen(false); // Close the modal if the click is outside
    }
  };

  return (
    isOpen && (
      <Overlay onClick={closeModal}>
        <RulesContainer>
        <h2>🎲 How to play dice game</h2>
          <div className="text">
            <p>1. Select any number</p>
            <p>2. Click on dice image</p>
            <p>
              3. After clicking on the dice, if the selected number is equal
              to the dice number, you will get the same points as the dice
            </p>
            <p>4. If you get the wrong guess, then 2 points will be deducted</p>
          </div>
        </RulesContainer>
      </Overlay>
    )
  );
};

export default Rules;

const Overlay = styled.div`
  position: fixed; /* Make it cover the whole screen */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent dark background */
  backdrop-filter: blur(5px); /* Apply blur effect to the background */
  z-index: 999; /* Overlay should be on top of everything */
`;

const RulesContainer = styled.div`
  max-width: 800px;
  background-color: #fbf1f1; 
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  z-index: 1000; 
  
  h2 {
    font-size: 24px;
  }

  .text {
    margin-top: 24px;
  }
`;
