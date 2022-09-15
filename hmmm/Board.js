import React from "react";
import styled from "styled-components";
import Search from "./Search";


function Board({ numbers, hClick }) {
    console.log("Board");
  return (
    // map을 이용해서 전달받은 numbers를 25개의 search으로 반환
    <Container>
      {numbers.map((num, index) => ( // 각 컴포넌트마다 고유key값 설정 반복문으로 렌더링해야하니까..
        <Search num={num} key={index} hClick={hClick}></Search>
        
      ))}
    </Container>

  );
}


const Container = styled.div`
   width: 400px;
  height: 400px;
  justify-content: center;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-template-rows: repeat(5,1fr);
`;

export default Board;
