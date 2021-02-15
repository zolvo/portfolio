import React from "react";
import styled from "styled-components";
import coredump from "../../asset/coredump.jpg";

function CoreDump() {
  return (
    <Container>
      <Image />
      <Title>
        <div className="front">
          <a href="https://aa-coredump.herokuapp.com/">
            <i className="fas fa-wifi fa-lg icon" />
          </a>
          <span>CoreDump</span>
          <a href="https://github.com/mjshuff23/coredump-project">
            <i className="fab fa-github fa-lg icon" />
          </a>
        </div>
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
  background-image: url(${coredump});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 59.5% top;
  border-radius: 0.3em;

  :hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -3.75em;
  box-sizing: border-box;
  text-align: center;

  .icon {
    padding: 3px;
    border-radius: 50%;
    // background: black;
    opacity: 0.8;
    color: magenta;
    text-shadow: 2px 2px 6px #000000;
  }

  .front {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: grey;
    width: 100%;
    z-index: 5;
    padding: 0.5em 0;
  }

  span {
    padding: 0 0.05em;
  }
`;

export default CoreDump;
