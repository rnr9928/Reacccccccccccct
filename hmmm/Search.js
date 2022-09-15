import React from "react";
import styled from "styled-components";

function Search({ num, hClick }) {
  console.log("Search");
  return <Container onClick={hClick} >{num}</Container>;
}

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0px;
`;

export default Search;