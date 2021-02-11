import React from "react";
import styled from "styled-components";

function Profile() {
  return (
    <Container>
      <div className="profile">
        <div className="title">
          Ronald Regan <span>Palisuan</span>
        </div>
        <div className="middle">I'm</div>
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
    height: 15em;
  }

  .title {
    font-size: 30px;
    font-weight: bold;

    span {
      color: magenta;
    }
  }

  .middle {
    margin-top: 1em;
    font-size: 25px;
  }
`;

export default Profile;
