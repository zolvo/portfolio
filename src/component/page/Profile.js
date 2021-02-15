import React from "react";
import styled from "styled-components";
import pic from "../../asset/pic.jpg";

const Profile = () => {
  return (
    <Container>
      <Title>Ronald's Profile</Title>
      <Main>
        <Pic>
          <img src={pic} alt="pic" className="pic" />
        </Pic>
        <Text>Hi there, nice to meet you all</Text>
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
  position: absolute;
  margin-top: 10em;
`;

export default Profile;
