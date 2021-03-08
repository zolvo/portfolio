import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../asset/logo.png";

function Menu() {


  return (
    <Container>
      <div className="menu">
        <div className="home">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="dropdown-content">
          <li>
            <button className="button">
              <a href="http://github.com/zolvo">
                <i className="fab fa-github fa-lg" style={{ color: "black" }} />
              </a>
            </button>
          </li>
          <li>
            <button className="button">
              <a href="https://www.linkedin.com/in/ronald-regan-palisuan-833451163/">
                <i
                  className="fab fa-linkedin-in fa-lg"
                  style={{ color: "black" }}
                />
              </a>
            </button>
          </li>
          <li>
            <button className="button">
              <a href="https://www.facebook.com/rpalisuan/">
                <i
                  className="fab fa-facebook fa-lg"
                  style={{ color: "black" }}
                />
              </a>
            </button>
          </li>
          <li>
            <button className="button">
              <a href="https://www.instagram.com/ronaldpalisuan/">
                <i
                  className="fab fa-instagram fa-lg"
                  style={{ color: "black" }}
                />
              </a>
            </button>
          </li>
          <li>
            <button className="button">
              <a href="https://twitter.com/rpalisuan">
                <i
                  className="fab fa-twitter fa-lg"
                  style={{ color: "black" }}
                />
              </a>
            </button>
          </li>
        </div>
      </div>
      <div className="option">
        <NavLink to="/" className="home">
          <i className="fas fa-home fa-lg icon" />
          <span>Home</span>
        </NavLink>
        <div className="subOption">
          <NavLink to="projects" className="home">
            <i class="fas fa-check-square fa-lg icon" />
            <span>Skills</span>
            </NavLink>
          <NavLink to="projects" className="home">
            <i class="fas fa-tasks fa-lg icon" />
            <span>Projects</span>
          </NavLink>
          <NavLink to="/profile" className="home">
            <i class="fas fa-user icon" />
            <span>Profile</span>
          </NavLink>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  width: auto;
  height: 5em;
  display: flex;
  flex-direction: row;
  margin: 0 3em;
  justify-content: space-between;
  align-items: center;

  .option {
    font-size: 14px;
    display: flex;
    width: 30.5vw;
    justify-content: space-between;
    padding-right:2em;
  }

  .subOption{
    display: flex;
    width: 16.5em;
    justify-content: space-between;
  }

  .icon{
    color: magenta;
  }

  .home{
    text-decoration: none;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .logo {
    background-color: white;
    height: 2.5em;
    cursor: pointer;
    transition: 0.5s;


    :hover {
      margin-top: 8px;
      height: 3em;
      transition: 0.5s;
      background-color: magenta;
    }
  }

  .menu {
    :hover .logo {
      margin-top: 8px;
      height: 3em;
      transition: 0.5s;
      background-color: magenta;
    }

    :hover .dropdown-content {
      display: block;
      position: absolute;
    }


    :hover .dropdown-content li:nth-child(1) {
      animation: github 0.1s linear 1 forwards;
      @keyframes github {
        0% {
          transform: translate(0, 0) rotateZ(0);
        }
        100% {
          transform: translate(0px, 65px) rotateZ(360deg);
        }
      }
    }

    :hover .dropdown-content li:nth-child(2) {
      animation: linkedin 0.2s linear 1 forwards;
      @keyframes linkedin {
        0% {
          transform: translate(0, 0) rotateZ(0);
        }
        100% {
          transform: translate(27px, 58px) rotateZ(360deg);
        }
      }
    }

    :hover .dropdown-content li:nth-child(3) {
      animation: facebook 0.3s linear 1 forwards;
      @keyframes facebook {
        0% {
          transform: translate(0, 0) rotateZ(0);
        }
        100% {
          transform: translate(50px, 46px) rotateZ(360deg);
        }
      }
    }

    :hover .dropdown-content li:nth-child(4) {
      animation: instagram 0.4s linear 1 forwards;
      @keyframes instagram {
        0% {
          transform: translate(0, 0) rotateZ(0);
        }
        100% {
          transform: translate(65px, 25px) rotateZ(360deg);
        }
      }
    }

    :hover .dropdown-content li:nth-child(5) {
      animation: twitter 0.5s linear 1 forwards;
      @keyframes twitter {
        0% {
          transform: translate(0, 0) rotateZ(0);
        }
        100% {
          transform: translate(70px, 0px) rotateZ(360deg);
        }
      }
    }
  }



  .dropdown-content {
    display: none;
    list-style: none;
    overflow: hidden;
    width: 7em;
    height: 7em;
    margin-left: 0.5em;
    margin-top: -3.5em;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: magenta;
    border-radius: 50%;
    margin: 10px auto;
    height: 22px;
    width: 22px;
    margin-left: 0em;
    position: absolute;
  }

  li :hover {
    transform: scale(1.2);
    transition: 0.5s;
    box-sizing;border-box;
  }

  .button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    border-readius: 50%;
  }

  span{
    text-shadow: 1px 1px 6px #ffffff;

    :hover{
      font-weight: 600;
      transition: 0.2s;
    }

  }
  `;

export default Menu;
