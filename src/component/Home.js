import React, { useEffect } from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import beach from "../video/beach.mov";

function Home() {
  return (
    <Container>
      <video autoPlay loop muted className="video">
        <source src={beach} type="video/mp4" />
      </video>
      <Tilt
        tiltReverse={true}
        scale={1.1}
        perspective={500}
        transitionSpeed={2500}
        className="default-component"
      >
        <div className="inner-element">
          <div>こんにちは, </div>
          <div>Ronald Regan Palisuan です</div>
          <div>よろしくね～</div>
        </div>
      </Tilt>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .video {
    box-sizing: border-box;
    // margin-top: -25px;
    height: 80vh;
    width: 80vw;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }

  .default-component {
    background-color: #8661c1;
    @include background;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    font-size: 40px;
    color: white;
    border: 3px solid white;
    border-radius: 10px;
    transform-style: preserve-3d;
  }

  .inner-element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-style: italic;
    font-family: arial;
    color: white;
    transform: translateZ(60px);
  }
`;

export default Home;
