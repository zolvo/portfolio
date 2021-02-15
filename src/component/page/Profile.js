import React from "react";
import styled from "styled-components";
import pic from "../../asset/pic.jpg";

const Profile = () => {
  return (
    <Container>
      <Title className="animate__animated animate__fadeInDown">
        Ronald's Profile
      </Title>
      <Main>
        <Pic>
          <img src={pic} alt="pic" className="pic" />
        </Pic>
        <Text className="animate__animated animate__zoomIn">
          <div>👋 Hi there, nice to meet you all 👋</div>
          <div>
            I'm a <span> fullstack developer </span>, love to eat Ramen 🍜, play
            RPG 🎮 and Retro Games ✌
            <div>
              🔥 deep interest in
              <span> problem solving </span>, as well as great
              <span> UI/UX </span> and all the latest <span>technology</span>.
            </div>
            <div>
              I speak <span> Japanese, Chinese, Bahasa </span> and of course
              <span> English </span>😂
            </div>
            <div>
              Feel free to reach out, Looking forward to connect with you all
            </div>
            <div className="link">
              <span className="linkedin">
                <a href="https://www.linkedin.com/in/ronald-regan-palisuan-833451163/">
                  <i
                    className="fab fa-linkedin-in fa-lg"
                    style={{ backgroundColor: "magenta", borderRadius: "50%" }}
                  />
                </a>
              </span>
              <span className="twitter">
                <a href="https://twitter.com/rpalisuan">
                  <i
                    className="fab fa-twitter fa-lg"
                    style={{ backgroundColor: "magenta", borderRadius: "50%" }}
                  />
                </a>
              </span>
              <span className="github">
                <a href="http://github.com/zolvo">
                  <i
                    className="fab fa-github fa-lg"
                    style={{ backgroundColor: "magenta", borderRadius: "50%" }}
                  />
                </a>
              </span>
            </div>
          </div>
        </Text>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    margin-top: 2em;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
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
  z-index: 1;
  text-shadow: 1px 1px 9px #000000;
`;

const Main = styled.div`
box-sizing: border-box;
width: 63vw;
list-style: none;
justify-content: space-evenly;
display: flex;
flex-direction: row;
box - sizing: border-box;
margin-top: 3em;
`;

const Pic = styled.div`
  box-sizing: border-box;
  height: 22.3em;
  margin-top: -5em;
  margin-bottom: 5em;

  .pic {
    box-sizing: border-box;
    width: 15em;
    border-radius: 50%;
    box-shadow: 2px 2px 8px 6px rgba(0, 0, 0, 0.2);
  }
`;

const Text = styled.div`
  box-sizing: border-box;
  width: 63vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: absolute;
  margin-top: 10em;
  padding: 1em;

  span {
    color: magenta;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 9px #be18be;
    // text-shadow: 1px 1px 9px #FFFFFF;
    text-transform: uppercase;
  }

  .link {
    margin-top: 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      padding: 1em;
    }

    :hover {
      transform: scale(1.1);
      transition: transform 1s linear;
    }
  }
`;

export default Profile;
