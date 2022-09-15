import React from "react";
import styled from "styled-components";

function Search({ num, handleClick }) {
//   console.log("Search");
return (
    <Container onClick={() => handleClick(num)}>
      {num !== 0 ? num : null}
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export default Search;