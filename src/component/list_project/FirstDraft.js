import React from "react";
import styled from "styled-components";
import firstdraft from "../../asset/firstdraft.jpg";

function FirstDraft() {
  return (
    <Container>
      <Image />
      <Title>
        <a href="https://my-firstdraft.herokuapp.com/">
          <i className="fas fa-wifi fa-xs icon" />
        </a>
        <span>First Draft</span>
        <a href="https://github.com/zdwatts/first_draft">
          <i className="fab fa-github fa-sm icon" />
        </a>
      </Title>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.3em;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-image: url(${firstdraft});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 69% top;
  border-radius: 0.3em;

  :hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 8em;
  justify-content: center;
  align-items: center;

  margin-top: -3em;
  box-sizing: border-box;
  text-align: center;
  background-color: grey;
  position: absolute;

  .icon {
    color: magenta;
    text-shadow: 1px 1px 9px #000000;
  }

  span {
    padding: 0 0.2em;
  }
`;

export default FirstDraft;
