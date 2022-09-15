import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";

// 1~25 배열 생성하고 numbers초기값으로 전달
let array = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}
function Mine() {
    const [numbers,setNumbers] = useState(array);
    const [GameStart, setGameStart] = useState(false);
    const [ClickNumber, setClickNumber] = useState(1);
    const handleClick = num => {
        if (num === ClickNumber && GameStart) {
            if (num === 50) {
                endGame();
                // console.log("Success");
                //게임 끝 구현
            }
            const index = numbers.indexOf(num);
            setNumbers(numbers => [
                numbers.slice(0, index),
                num < 26 ? num + 25 : 0,
                numbers.slice(index + 1)
            ]);
            setClickNumber(ClickNumber => ClickNumber + 1);
        }
    };
        const startGame = () => {
            setNumbers(shuffleArray(array));
            setClickNumber(1);
            setGameStart(true);
          };
    const endGame = () => {
        setGameStart(false);
    };
    // console.log("Mine");
    return (
        <Container>
        <Board numbers={numbers} handleClick={handleClick}></Board>
        {GameStart ? (
          ""
        ) : (
          <StartButton onClick={startGame}>start</StartButton>
        )}
      </Container>
    );
};     
        const shuffleArray = array => {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };
    
  

  const StartButton = styled.button`
  margin-top: 600px;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;


const Container = styled.div`
 
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Mine;