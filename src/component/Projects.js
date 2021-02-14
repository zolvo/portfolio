import React from "react";
import styled from "styled-components";
// import Chart from "chart.js";

function Projects() {
  return (
    <Containers>
      <ul className="chart" />
      <Circle>
        <li>
          <span>APPRON</span>
        </li>
        <li>
          <span>FIRST DRAFT</span>
        </li>
        <li>
          <span>COREDUMP</span>
        </li>
        <li>
          <span>PEKO-PEKO</span>
        </li>
      </Circle>
    </Containers>
  );
}

const Containers = styled.div`
  box-sizing: border-box;
  height: 17em;
  width: 17em;
  list-style: none;

  .chart {
    position: relative;
    width: 100px;
    height: 200px;
    margin-top: 5.5em;
    margin-left: 8.3em;
  }

  .chart::before,
  .chart::after {
    box-sizing: border-box;
    position: absolute;
  }

  .chart::before {
    content: "";
    width: inherit;
    height: inherit;
    border: 30px solid rgba(211, 211, 211, 0.3);
    border-right: none;
    border-top-left-radius: 175px;
    border-bottom-left-radius: 175px;
  }

  .chart::after {
    content: "Projects";
    text-shadow: 1px 1px 9px #000000;
    top: 42%;
    right: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    color: cadetblue;
  }

  li {
    position: absolute;
    left: 100%;
    width: 70px;
    height: 140px;
    border: 30px solid;
    border-left: none;
    border-top-right-radius: 175px;
    border-bottom-right-radius: 175px;
    transform-origin: 0% 50%;
    animation: 0.4s linear 1 forwards;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  li:nth-child(1) {
    z-index: 4;
    border-color: firebrick;
    animation-name: appron;
    animation-delay: 0.7s;
  }

  li:nth-child(2) {
    z-index: 3;
    border-color: steelblue;
    animation-name: firstdraft;
    animation-delay: 1.2s;
  }

  li:nth-child(3) {
    z-index: 2;
    border-color: orange;
    animation-name: coredump;
    animation-delay: 1.7s;
  }

  li:nth-child(4) {
    z-index: 1;
    border-color: green;
    animation-name: pekopeko;
    animation-delay: 2.2s;
  }

  @keyframes appron {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-45deg);
    }
  }

  @keyframes firstdraft {
    0% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(-95deg);
    }
  }

  @keyframes coredump {
    0% {
      transform: rotate(-95deg);
    }
    100% {
      transform: rotate(-142deg);
    }
  }

  @keyframes pekopeko {
    0% {
      transform: rotate(-142deg);
    }
    100% {
      transform: rotate(-180deg);
    }
  }

  li:nth-child(1) span {
    position: absolute;
    transform: translate(-30px, -80px) rotateZ(45deg);

    backface-visibility: hidden;
    animation: fade-in 1.3s linear forwards;
  }
  li:nth-child(2) span {
    position: absolute;
    width: 5em;
    transform: translate(8px, -82px) rotateZ(97deg);

    backface-visibility: hidden;
    animation: fade-in 1.8s linear forwards;
  }
  li:nth-child(3) span {
    position: absolute;
    transform: translate(50px, -65px) rotateZ(142deg);

    backface-visibility: hidden;
    animation: fade-in 2.2s linear forwards;
  }
  li:nth-child(4) span {
    width: 5em;
    position: absolute;
    transform: translate(45px, -42px) rotateZ(180deg);

     backface-visibility: hidden;
    animation: fade-in 2.8s linear forwards;
  }

  span {
    backface-visibility: hidden;
    animation: fade-in 0.4s linear forwards;
    text-shadow: 1px 1px 9px #ffffff;
    letter-spacing: 1px;
  }

  @keyframes fade-in {
    0%,
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  // }
`;

const Circle = styled.div`
  margin-top: -12.5em;
  // border: 1px solid white;
  box-sizing: border-box;
  overflow: hidden;
  height: 13em;
  width: 17em;
  position: fixed;
`;

export default Projects;
