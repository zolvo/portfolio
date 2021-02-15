import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";
import Appron from "../list_project/Appron";
import FirstDraft from "../list_project/FirstDraft";
import CoreDump from "../list_project/CoreDump";
import PekoPeko from "../list_project/PekoPeko";

const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.7)",
    transform: "scaleY(.01) scaleX(0)",
    animation: "unfoldIn 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
  },

  content: {
    borderRadius: "5em",
    overflow: "hidden",
    cursor: "pointer",
    width: "21em",
    height: "50%",
    top: "50%",
    left: "55%",
    right: "auto",
    bottom: "auto",
    background: "none",
    border: "none",
    transform: "translate(-50%, -50%)",
  },
};

function Projects() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const closeModal = () => {
    setShowModal1(false);
    setShowModal2(false);
    setShowModal3(false);
    setShowModal4(false);
  };

  return (
    <Containers>
      <ul className="chart" />
      <Circle>
        <li>
          <span
            className="appron modal"
            onClick={() => setShowModal1(!showModal1)}
          >
            APPRON
          </span>
          <Modal
            isOpen={showModal1}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div style={{ marginBottom: "0.3em" }}>
              Chef on demand app, inspired by a chef friend himself, user can
              search for a chef, make an appointment, comment, & star rating.
            </div>
            <Appron />
          </Modal>
        </li>
        <li>
          <span
            className="firstdraft modal"
            onClick={() => setShowModal2(!showModal2)}
          >
            FIRST DRAFT
          </span>
          <Modal
            isOpen={showModal2}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div style={{ marginBottom: "0.3em" }}>
              Clone app Insipired by Medium itself, allow user to create story,
              comment, likes, and posting pictures with WYSWYG input text.
            </div>
            <FirstDraft />
          </Modal>
        </li>
        <li>
          <span
            className="coredump modal"
            onClick={() => setShowModal3(!showModal3)}
          >
            COREDUMP
          </span>
          <Modal
            isOpen={showModal3}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div style={{ marginBottom: "0.3em" }}>
              StactOverFlow clone, user was able to create a question, answer a
              question, edit & delete, also could choose avatar & able to vote
            </div>
            <CoreDump />
          </Modal>
        </li>
        <li>
          <span
            className="pekopeko modal"
            onClick={() => setShowModal4(!showModal4)}
          >
            PEKO-PEKO
          </span>
        </li>
        <Modal
          isOpen={showModal4}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div style={{ marginBottom: "0.3em" }}>
            Yelp clone app with a twist, suggest user with meal category to make
            it easier to pick without spending time with the seaching.
          </div>
          <PekoPeko />
        </Modal>
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


  .one {
    transform:scaleY(.01) scaleX(0);
    animation:unfoldIn 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    .modal-background {
      .modal {
        transform:scale(0);
        animation: zoomIn .5s .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
    .out {
      transform:scale(1);
      animation:unfoldOut 1s .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      .modal-background {
        .modal {
          animation: zoomOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
      }
    }
  }

@keyframes unfoldIn {
  0% {
    transform:scaleY(.005) scaleX(0);
  }
  50% {
    transform:scaleY(.005) scaleX(1);
  }
  100% {
    transform:scaleY(1) scaleX(1);
  }
}

@keyframes unfoldOut {
  0% {
    transform:scaleY(1) scaleX(1);
  }
  50% {
    transform:scaleY(.005) scaleX(1);
  }
  100% {
    transform:scaleY(.005) scaleX(0);
  }
}

.modal {
cursor: pointer;
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
