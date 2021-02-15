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
          <li>
            <Appron />
          </li>
          <li>
            <FirstDraft />
          </li>
          <li>
            <CoreDump />
          </li>
          <li>
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
margin-bottom: 5.23em;

li{
    box-sizing-border-box;
    width: 8em;
    height: 12em;
    // border: 1px solid white;
    border-radius: 0.4em;

}
`;

export default Project;
