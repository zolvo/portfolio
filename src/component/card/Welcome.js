import React from "react";
import styled from "styled-components";
import pic from "../../asset/pic.jpg";

function Profile() {
  return (
    <Container>
      <div className="profile">
        <div className="title animate__animated animate__slideInLeft">
          Ronald Regan <span>Palisuan</span>
        </div>
        <div>
          <img
            src={pic}
            alt="pic"
            className="pic animate__animated animate__fadeInDown"
          />
        </div>
        <div className="subtitle animate__animated animate__slideInRight">
          こんにちは、　ロナルドです、よろしく～
        </div>
        <div className="middle">
          Web Developer, Full Stack & Front End, Manga & Game Addict, Ramen
          Lover
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .profile {
    margin-top: 3em;
    margin-left: 3em;
    box-sizing: border-box;
    // border: 1px solid white;
    width: 18em;
    height: 14em;
  }

  .title {
    font-size: 30px;
    font-weight: bold;

    span {
      color: magenta;
    }
  }

  .pic {
    position: absolute;
    margin-top: -1.5em;
    margin-left: 15.5em;
    box-sizing: border-box;
    border-radius: 50%;
    height: 2.5em;
    width: 2.5em;
  }

  .subtitle {
    margin-top: 1em;
    font-weight: lighter;
    font-size: 9px;
    letter-spacing: 2.5px;
  }

  .middle {
    margin-top: 3em;
    letter-spacing: 2px;
    font-size: 20px;
  }
`;

export default Profile;
