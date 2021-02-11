import React from "react";
import styled from "styled-components";
import logo from "../asset/logo.png";

function Menu() {
  return (
    <Container>
      <div className="menu">
        <img src={logo} alt="logo" className="logo" />
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
      <div>project</div>
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

  .logo {
    background-color: white;
    height: 2.5em;
    cursor: pointer;

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
      transition-delay: 0.2s;
      position:absolute;
    }

    :hover .dropdown-content li:nth-child(1) {
    animation: github 0.1s linear 1 forwards;
    // -webkit-animation: github 0.3s linear 1 forwards;
      @keyframes github {
      0% {transform: translate(0, 0) rotateZ(0)}
      100% {transform: translate(0px, 65px) rotateZ(360deg)}
      }
    }

    :hover .dropdown-content li:nth-child(2) {
    animation: linkedin 0.2s linear 1 forwards;
    // -webkit-animation: linkedin 0.4s linear 1 forwards;
      @keyframes linkedin {
      0% {transform: translate(0, 0) rotateZ(0)}
      100% {transform: translate(27px, 58px) rotateZ(360deg)}
      }
    }

    :hover .dropdown-content li:nth-child(3) {
    animation: facebook 0.3s linear 1 forwards;
    // -webkit-animation: facebook 0.3s linear 1 forwards;
      @keyframes facebook {
      0% {transform: translate(0, 0) rotateZ(0)}
      100% {transform: translate(50px, 46px) rotateZ(360deg)}
      }
    }

    :hover .dropdown-content li:nth-child(4) {
    animation: instagram 0.4s linear 1 forwards;
    // -webkit-animation: instagram 0.4s linear 1 forwards;
      @keyframes instagram {
      0% {transform: translate(0, 0) rotateZ(0)}
      100% {transform: translate(65px, 25px) rotateZ(360deg)}
      }
    }

    :hover .dropdown-content li:nth-child(5) {
    animation: twitter 0.5s linear 1 forwards;
    // -webkit-animation: twitter 0.4s linear 1 forwards;
      @keyframes twitter {
      0% {transform: translate(0, 0) rotateZ(0)}
      100% {transform: translate(70px, 0px) rotateZ(360deg)}
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

    // z-index: -1;
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
    position:absolute;
  }

  .button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;




    // .menu:hover .dropdown-content li:nth-child(1){
    //   transition-delay: 0.02s;
    //   transform: rotate(85deg);
    // }

    // .menu:hover .dropdown-content li:nth-child(2){
    //   transition-delay: 0.04s;
    //   transform: rotate(85deg);
    // }

  //   :hover {
  //   }
  // }

  // .fab {
  //   transition: transform 1.4s 0.08s;
  // }

  // .menu .dropdown-content {
  //   transform: scale(0);
  //   transition: transform 1.4s 0.07s;
  //   z-index: -1;
  // }

  // .menu:hover .dropdown-content {
  //   transition: transform 0.4s 0.08s, z-index 0s 0.5s;
  //   transform: scale(1);
  //   z-index: 1;
  // }


  // .menu .dropdown-content li {
  //   position:absolute;
  //   top: -100px;
  //   left: -100px;
  //   transform origin: 100px 100px;
  //   transition: all 0.5s 0.1s;
  // }

//   .menu:hover .dropdown-content li {
//     transition: all 0.7s;
//   }

//   .menu .dropdown-content li a {
//     width: 45px;
//     height: 45px;
//     border-radius: 50%;
//     position:absolute;
//     transition: 0.7s;
//   }
// `;

export default Menu;
