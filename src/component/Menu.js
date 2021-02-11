import React from "react";
import styled from "styled-components";
import R02 from "../asset/R02.png";

function Menu() {
  return (
    <Container>
      <div>
        <a href="/">
          <img src={R02} alt="logo" className="logo" />
        </a>
      </div>
      <div>project</div>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  width: auto;
  height: 5em;
  display: flex;
  flex-direction: row;
  margin: 0 3em;
  justify-content: space-between;
  align-items: center;

  .logo {
    background-color: white;
    height: 2em;

    :hover {
      margin-top: 8px;
      height: 2.3em;
      transition: 0.5s;
      background-color: magenta;
    }
  }
`;

export default Menu;
