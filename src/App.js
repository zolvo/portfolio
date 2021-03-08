import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Menu from "./component/card/Navbar";
import Profile from "./component/page/Profile";
import Home from "./component/page/Home";
import Project from "./component/page/Project";
import test from "./video/test.mp4";
import Footer from "./component/page/Footer";
import Lost404 from "./component/page/Lost404";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <video autoPlay loop muted className="video1">
          <source src={test} type="video/mp4" />
        </video>
        <Background>
          <Card>
            <Menu />
            <Switch>
              <Route exact path="/projects">
                <Project />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/*">
                <Lost404 />
              </Route>
            </Switch>
          </Card>
          <Footer />
        </Background>
      </Container>
    </BrowserRouter>
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

  .video1 {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -90;
  }
 `;

const Background = styled.div`
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
  width: 63vw;
  // height: 65vh;
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
`;

export default App;
