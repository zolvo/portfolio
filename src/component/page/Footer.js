import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <span>
        <a href="http://github.com/zolvo">
          <i
            className="fab fa-github fa-lg"
            style={{
              backgroundColor: "magenta",
              borderRadius: "50%",
              padding: "2px",
            }}
          />
        </a>
      </span>
      Created by: Ronald Regan Palisuan @2021
      <span>
        <a href="https://www.linkedin.com/in/ronaldpalisuan/">
          <i
            className="fab fa-linkedin-in fa-lg"
            style={{
              backgroundColor: "magenta",
              borderRadius: "50%",
              padding: "2px",
            }}
          />
        </a>
      </span>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 90%;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 1px 1px 9px #ffffff;
  span {
    padding: 0 5px;
  }
`;

export default Footer;
