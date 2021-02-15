import React from "react";
import styled from "styled-components";
import pekopeko from "../../asset/pekopeko.jpg";

function PekoPeko() {
  return (
    <Container>
      <Image />
      <Title>
        <a href="https://main.d2fp27heurb617.amplifyapp.com/">
          <i className="fas fa-wifi fa-xs icon" />
        </a>
        Peko-Peko
        <a href="https://github.com/zolvo/pekoPeko-frontend">
          <i className="fab fa-github fa-sm icon" />
        </a>
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
    margin-top: 1em;
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
  width: 8em;
  justify-content: center;
  align-items: center;

  margin-top: -3em;
  box-sizing: border-box;
  text-align: center;
  background-color: grey;
  position: absolute;

  .icon {
    color: magenta;
    text-shadow: 1px 1px 9px #000000;
  }
`;

export default PekoPeko;
