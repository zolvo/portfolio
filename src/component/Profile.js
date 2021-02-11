import React from "react";
import styled from "styled-components";

function Profile() {
  return (
    <Container>
      <div className="profile">
        <div className="title">
          Ronald Regan <span>Palisuan</span>
        </div>
        <div className="subtitle">こんにちは、　ロナルドです、よろしく～</div>
        <div className="middle">Web Developer, Full Stack & Front End, Manga & Game Addict, Ramen Lover</div>
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
