import React from "react";
import styled from "styled-components";
import Circle from "../card/Circle";
import Icons from "../card/Icons";
import LogoBig from "../card/LogoBig";
import Welcome from "../card/Welcome";

function Home() {
  return (
    <div>
      <Main>
        <Welcome />
        {/* <Icons /> */}
        <Circle />
      </Main>
      <LogoBox>
        <LogoBig />
      </LogoBox>
    </div>
  );
}

const Main = styled.div`
  box-sizing: border-box;
  // border: 1px solid white;
  display: flex;
  // width: 63vw;
  // height: 60vh;
  flex-direction: row;
  justify-content: space-between;
  // flex-wrap: wrap;
`;

const LogoBox = styled.div`
  box-sizing: border-box;
  margin-left: 3em;
  width: 20em;
  height: 12.5em;
`;

export default Home;
