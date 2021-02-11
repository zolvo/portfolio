import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import fluid from "../video/fluid.mp4";
import R08 from "../asset/R08.png";

function LogoBig() {
  return (
    <Container>
      <Tilt
        tiltReverse={true}
        scale={1.15}
        perspective={500}
        transitionSpeed={3500}
        className="logoBig"
      >
        <video autoPlay loop muted className="video">
          <source src={fluid} type="video/mp4" />
        </video>
        {/* <div className="inner-element">
          <div>こんにちは, </div>
          <div>Ronald Regan Palisuan です</div>
          <div>よろしくね～</div>
        </div> */}
        <img src={R08} className="inner-element" />
      </Tilt>
    </Container>
  );
}

const Container = styled.div`
  transform-style: preserve-3d;
  position: absolute;
  margin-top: 23em;

  .logoBig {
    margin-top: 0.5em;
    width: 11em;
    margin-left: 1.5em;
    transition: 2s;
  }

  .video {
    height: 10em;
    width: 10em;
    object-fit: cover;
    position: absolute;
    z-index: -99;
  }

  .inner-element {
    height: 11em;
    width: 11em;
    margin: -2px;
    z-index: -98;
    // background-image: url(${R08});
    // background-position: center;
    // background-size: cover;
    // background-repeat: no-repeat;
  }
`;

export default LogoBig;
