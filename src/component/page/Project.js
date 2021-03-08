import React from "react";
import styled from "styled-components";
import Appron from "../list_project/Appron";
import CoreDump from "../list_project/CoreDump";
import FirstDraft from "../list_project/FirstDraft";
import PekoPeko from "../list_project/PekoPeko";

function Project() {
  return (
    <Container>
      <Title>
        <div className="head animate__animated animate__fadeInDown">
          Project List
        </div>
        <List>
          <li className="animate__animated animate__fadeIn">
            <Appron />
          </li>
          <li className="animate__animated animate__fadeIn">
            <FirstDraft />
          </li>
          <li className="animate__animated animate__fadeIn">
            <CoreDump />
          </li>
          <li className="animate__animated animate__fadeIn">
            <PekoPeko />
          </li>
        </List>
      </Title>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  .head {
    text-shadow: 1px 1px 9px #000000;
  }

  .tail {
    animate-duration: 0.9s;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const List = styled.div`
box-sizing: border-box;
width: 63vw;
list-style: none;
justify-content: space-evenly;
display: flex;
flex-direction: row;
box - sizing: border-box;
margin-top: 3em;
margin-bottom: 6.05em;

li{
    box-sizing-border-box;
    width: 8em;
    height: 12em;
    border-radius: 0.4em;

}
`;

export default Project;
