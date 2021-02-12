import React from "react";
import styled from "styled-components";
import Projects from "./Projects";
import LogoBig from "./LogoBig";
import Menu from "./Navbar";
import Profile from "./Profile";

function Home() {
  return (
    <Container>
      <Bacground>
        <Card>
          <Menu />
          <Main>
            <Profile />
            <Projects />
          </Main>
          <LogoBox>
            <LogoBig />
          </LogoBox>
        </Card>
      </Bacground>
    </Container>
  );
}

const Container = styled.div`
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

const Bacground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur;
  height: 100vh;
  width: 75vw;
  background-image: linear-gradient(
    to right,
    rgba(128, 128, 128, 0.5),
    rgba(0, 0, 0, 0.8)
  );
`;

const Card = styled.div`

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 1em;
  box-shadow: 2px 2px 8px 6px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
  90deg,
  rgba(0, 0, 0, 1) 25%,
  rgba(128, 128, 128, 0.5)
  );

  // margin: 0 em;
  // height: 36em;
  // height: 62;
  // width: 100vw;
  // position: relative;
`;

const Main = styled.div`
  display: flex;
  width: 63vw;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1 1 auto;
`;

const LogoBox = styled.div`

box-sizing:border-box;
margin-left: 3em;
// width: 20em;
height: 12.5em;
`

export default Home;
