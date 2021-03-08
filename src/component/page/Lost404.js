import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Lost404 = () => {
  const history = useHistory();
  return (
    <Container>
      <div>Ups, you are lost !</div>
      <div className="sub" onClick={history.goBack}>
        go back
      </div>
    </Container>
  );
};

const Container = styled.div`
  // height: 16.85em;
  height: 17.45em;
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 9px #ffffff;

  .sub {
    font-size: 15px;
    margin-top: 3em;
    color: magenta;
    text-shadow: 1px 1px 9px #000000;
    :hover {
      color: white;
      text-shadow: 1px 1px 9px #ffffff;
    }
  }
`;

export default Lost404;
