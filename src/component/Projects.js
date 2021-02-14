import React from "react";
import styled from "styled-components";
// import Chart from "chart.js";

function Projects() {
  return (
    <Containers>
      {/* <Circle> */}
      <ul className="chart" />
      {/* </Circle> */}
      {/* <List> */}
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
      {/* </List> */}
    </Containers>
  );
}

const Containers = styled.div`
  // box-sizing: border-box;
  // display:flex;
  // justify-content; center;
  // align-items: center;

  height: 17em;
  width: 17em;
  list-style: none;

  /* RESET STYLES
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .chart *,
  .chart::before {
    box-sizing: border-box;
  }

  /* CHART-SKILLS STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
  .chart {
    position: relative;
    width: 100px;
    height: 200px;
    margin-top: 5.5em;
    margin-left: 8.3em;
  }

  .chart::before,
  .chart::after {
    position: absolute;
  }

  .chart::before {
    content: "";
    // left: 0px;
    width: inherit;
    height: inherit;
    border: 40px solid rgba(211, 211, 211, 0.3);
    border-right: none;
    border-top-left-radius: 175px;
    border-bottom-left-radius: 175px;
  }

  .chart::after {
    content: "Projects";
    top: 42%;
    right: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    color: cadetblue;
  }

  li {
    position: absolute;
    top: 36.5%;
    right: 10.4%;
    width: 65px;
    height: 120px;
    border: 40px solid;
    border-left: none;
    border-top-right-radius: 175px;
    border-bottom-right-radius: 175px;
    transform-origin: 50% 0;

    animation-fill-mode: forwards;
    animation-duration: 0.4s;
    animation-timing-function: linear;
  }

  .chart-skills li:nth-child(1) {
    z-index: 4;
    border-color: green;
    animation-name: rotate-one;
  }

  .chart-skills li:nth-child(2) {
    z-index: 3;
    border-color: firebrick;
    animation-name: rotate-two;
    animation-delay: 0.4s;
  }

  .chart-skills li:nth-child(3) {
    z-index: 2;
    border-color: steelblue;
    animation-name: rotate-three;
    animation-delay: 0.8s;
  }

  .chart-skills li:nth-child(4) {
    z-index: 1;
    border-color: orange;
    animation-name: rotate-four;
    animation-delay: 1.2s;
  }

  /* ANIMATIONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

  @keyframes rotate-one {
    100% {
      transform: rotate(21.6deg);
      /**
     * 12% => 21.6deg
     */
    }
  }

  @keyframes rotate-two {
    0% {
      transform: rotate(21.6deg);
    }
    100% {
      transform: rotate(79.2deg);
      /**
     * 32% => 57.6deg
     * 57.6 + 21.6 => 79.2deg
     */
    }
  }

  @keyframes rotate-three {
    0% {
      transform: rotate(79.2deg);
    }
    100% {
      transform: rotate(140.4deg);
      /**
     * 34% => 61.2deg
     * 61.2 + 79.2 => 140.4deg
     */
    }
  }

  @keyframes rotate-four {
    0% {
      transform: rotate(140.4deg);
    }
    100% {
      transform: rotate(180deg);
      /**
     * 22% => 39.6deg
     * 140.4 + 39.6 => 180deg
     */
    }
  }
`;
export default Projects;
