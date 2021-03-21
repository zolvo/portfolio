import React from "react";
import styled from "styled-components";
import python from "../../asset/icons/python.png";
import docker from "../../asset/icons/docker.png";
import flask from "../../asset/icons/flask.png";
import html from "../../asset/icons/html.png";
import javascript from "../../asset/icons/javascript.png";
import postgresql from "../../asset/icons/postgresql.png";
import react from "../../asset/icons/react.png";
import css from "../../asset/icons/css.png";
import sequelize from "../../asset/icons/sequelize.png";
import node from "../../asset/icons/node.png";
import sql from "../../asset/icons/sql.png";
import git from "../../asset/icons/git.png";

function Skills() {
  return (
    <Container>
      <List>
        <li>
          <img src={python} alt="python" className="icon" />
        </li>
        <li>
          <img src={css} alt="css" className="icon" />
        </li>
        <li>
          <img src={html} alt="html" className="icon" />
        </li>
        <li>
          <img src={javascript} alt="javascript" className="icon" />
        </li>
        <li>
          <img src={postgresql} alt="postgresql" className="icon" />
        </li>
        <li>
          <img src={react} alt="react" className="icon" />
        </li>
        <li>
          <img src={flask} alt="flask" className="icon" />
        </li>
        <li>
          <img src={docker} alt="docker" className="icon" />
        </li>
        <li>
          <img src={sql} alt="sql" className="icon" />
        </li>
        <li>
          <img src={git} alt="git" className="icon" />
        </li>
        <li>
          <img src={node} alt="node" className="icon" />
        </li>
        <li>
          <img src={sequelize} alt="sequelize" className="icon" />
        </li>
      </List>
      <Title>
        <div className="click">SKILLS</div>
      </Title>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(255, 0, 255, 0.5),
    rgba(0, 0, 0, 0.8)
  );
`;

const List = styled.div`
  // width: 100%;
  // height: 100%;
  box-sizing: border-box;
  margin: 0 8%;
  width: 28em;
  height: 15em;
  // border: 1px solid white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;

  .icon {
    margin: 1em 1em;
    box-sizing: border-box;
    width: 4em;
    height: 4.2em;

    :hover {
    transform: rotateY(360deg);
    transition: 1s;
  }
`;

const Title = styled.div`
  box-sizing: border-box;
  // border: 1px solid white;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1em;

  }
`;

export default Skills;
