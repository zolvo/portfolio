import React from "react";
import styled from "styled-components";
import python from "../../asset/icons/python.png";
import javascript from "../../asset/icons/javascript.png";
import sprites from "../../asset/icons/css_sprites.png";

function Icons() {
  return (
    <Container>
      <List>
        <div className="list"></div>
      </List>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  //   border: 1px solid white;
  height: 6em;
  width: 6em;
  margin-top: 8em;
`;

const List = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${sprites});
  // background-position: left;
  background-repeat: no-repeat;
  background-size: 370%;

  /* The animation code */
  @keyframes list {
    0% {
      background-position: 0%, 0%;
    }
    100% {
      background-position: 0%. 100%;
    }
  }

  /* The element to apply the animation to */
  .list {
    animation-name: example;
    animation-duration: 4s;
    animation-timing-function: steps(7);
  }
`;

export default Icons;
