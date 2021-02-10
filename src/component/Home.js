import React, { useEffect } from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import fluid from "../video/fluid.mp4";
import R08 from "../asset/R08.png";
import e23 from "../asset/e23.jpg";

function Home() {
  return (
    <Container>
      <Background00>
        <Background01>
          <Tilt
            tiltReverse={true}
            scale={1.2}
            perspective={500}
            transitionSpeed={2500}
            className="default-component"
          >
            <video autoPlay loop muted className="video">
              <source src={fluid} type="video/mp4" />
            </video>
            {/* <div className="inner-element">
          <div>こんにちは, </div>
          <div>Ronald Regan Palisuan です</div>
          <div>よろしくね～</div>
        </div> */}
            <img
              src={R08}
              className="inner-element"
              // style={{ position: "relative" }}
            ></img>
          </Tilt>
        </Background01>
      </Background00>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: #1c1c1c;
  // z-index: -99;

  .video {
    // box-sizing: border-box;
    // left: 9rem;
    // top: 27em;

    height: 8em;
    width: 10rem;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }

  .default-component {
    // background-color: #8661c1;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // width: 300px;
    // height: 300px;
    // font-size: 40px;
    // color: white;

    margin: 0;
    position: relative;
    box-sizing: border-box;
    width: 10em;
    min-height: 10rem;
    border: 3px solid black;
    left: 1.5em;
    transform-style: preserve-3d;
  }

  .inner-element {
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // font-size: 40px;
    // font-style: italic;
    // font-family: arial;
    // color: white;
    // transform: translateZ(60px);

    height: 11em;
    margin: -1px;
    width: 11em;
    z-index: 1;
    position: absolute;
    background-image: url(${R08});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Background00 = styled.div`
  display: flex;
  justify-content: center;
  filter: blur;
  height: 100vh;
  width: 80vw;
  background-color: #4a4a4a;
`;

const Background01 = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  background-color: black;
  margin: 0 5em;
  heigth: 15em;
  width: 90vw;
  backdrop-filter: contrast() blur(20px);
`;

const Background02 = styled.div`
  // top: 24.7em;
  // left: 8em;
  // height: 50vh;
  // width: 50vw;
  // position: absolute;
  // background-image: url(${R08});
  // // background-position: center;
  // background-size: 50%;
  // background-repeat: no-repeat;

  // top: 24.7em;
  // left: 9em;
  // height: 23em;
  // width: 23em;
  position: absolute;
  background-image: url(${R08});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Home;
