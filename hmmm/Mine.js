import React, { useState} from "react";
import styled from "styled-components";
import Board from "./Board";

// 1~25 배열 생성하고 numbers초기값으로 전달
let array = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}
function Mine() {
console.log("Mine");
    const [numbers] = useState(array);
    
    const hClick= num =>{
        console.log(num);
    };
    return (
      // numbbers board로 전달
    <Container>
      <Board numbers={numbers} hClick={hClick}></Board>
    </Container>
  );
}

const Container = styled.div`
 
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Mine;