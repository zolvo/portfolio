import React from "react";
import styled from "styled-components";
import click from "../../asset/icons/click.png";

function Icons() {
  return (
    <Container>
      <List>
        <div className="list">
          <span className="text">Click Me</span>
        </div>
      </List>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  //   border: 1px solid white;
  height: 4em;
  width: 7.5em;
  margin-left: -2em;
  margin-top: 12.5em;
`;

const List = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${click});
  background-position: 0% 0%;
  background-repeat: no-repeat;
  background-size: 40%;

  animation: icons 2s linear 2 forwards;

  /* The animation code */
  @keyframes icons {
    0% {
      transform: translate(-30px, -30px) rotate(-30deg);
    }
    100% {
      transform: translate(-30px, -30px) rotate(-30deg);
    }
    80% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    82% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    84% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    86% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    88% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    92% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    94% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    96% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    98% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(0px, 0px) rotate(0deg);
    }

    from {
      background-position: left;
    }
    to {
      background-position: right;
    }
  }

  .text {
    position: absolute;
    // box-sizing: border-box;
    border: 1px solid white;
    margin-top: 0.2em;
    margin-left: -6em;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 3px;
    padding: 0.2em 0.5em;
  }
`;

export default Icons;
