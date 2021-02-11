import React from "react";
import styled from "styled-components";
import Projects from "./Projects";
import LogoBig from "./LogoBig";
import Menu from "./Navbar";
import Profile from "./Profile";

function Home() {
  return (
    <Container>
      <Background00>
        <Background01>
          <Menu />
          <Main>
            <Profile />
            <Projects />
          </Main>
            <LogoBig />
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
    background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(128, 128, 128, 0.5),
    rgba(0, 0, 0, 0.8)
    );
`;

const Background00 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur;
  height: 100vh;
  width: 75vw;
  background-image: linear-gradient(
    to right,
    // rgba(0, 0, 0, 0.8),
    rgba(128, 128, 128, 0.5),
    rgba(0, 0, 0, 0.8)
  );
`;

const Background01 = styled.div`
  box-sizing: border-box;
  // position: relative;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 25%,
    rgba(128, 128, 128, 0.5)
  );
  display: flex;
  flex-direction: column;

  margin: 0 3em;
  height: 36em;
  width: 100vw;
  border-radius: 1em;
  box-shadow: 2px 2px 8px 6px rgba(0, 0, 0, 0.2);
`;

const Main = styled.div`
  display: flex;
  width: 58vw;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 1 auto;
  // margin: 0 15em;
`;

export default Home;
