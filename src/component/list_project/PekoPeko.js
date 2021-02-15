import React from "react";
import styled from "styled-components";
import pekopeko from "../../asset/pekopeko.jpg";

function PekoPeko() {
  return (
    <Container>
      <Image />
      <Title>
        <div className="front">
          <a href="https://main.d2fp27heurb617.amplifyapp.com/">
            <i className="fas fa-wifi fa-lg icon" />
          </a>
          PekoPeko
          <a href="https://github.com/zolvo/pekoPeko-frontend">
            <i className="fab fa-github fa-lg icon" />
          </a>
        </div>
      </Title>
      <div className="comingsoon">Coming Soon</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.3em;

  .comingsoon {
    position: absolute;
    margin-left: 3em;
    margin-top: 4.5em;
    font-size: 13px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-image: url(${pekopeko});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
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

  margin-top: -4em;
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
    padding: 0 0.5em;
  }
`;

export default PekoPeko;
