import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: flex;

  @media all and (max-width: 520px) {
    a {
      margin: 2em;
    }
    flex-direction: column;
    svg {
      transform: scale(1.5);
      margin-bottom: 0.3em;
    }
  }
  @media all and (min-width: 521px) {
    a {
      margin: 3em;
    }
    svg {
      transform: scale(1.8);
      margin-bottom: 0.8em;
    }
    div {
      padding-top: 0.8em;
    }
  }
  @media all and (min-width: 750px) {
    a {
      margin: 4em;
    }
    svg {
      transform: scale(2);
      margin-bottom: 1em;
    }
    div {
      padding-top: 1em;
    }
  }
  @media all and (min-width: 1151px) {
    a {
      margin: 5em;
    }
    svg {
      transform: scale(2.2);
      margin-bottom: 1em;
    }
    div {
      padding-top: 1em;
    }
  }
`;

export const StyledCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-self: center;

  &:hover {
    text-decoration: none; /* Remove underline */
  }
`;

export const StyledText = styled.div`
  font-weight: bold;
  color: black;
`;

export const HeroSection = styled.div`
  display: flex;
  width: -webkit-fill-available;
  justify-content: center;

  @media screen and (min-width: 600px) {
    height: 100vh;
  }

  &::before {
    background: rgba(0, 0, 0, 0.2); /* Adjust the color and opacity as needed */

    content: "";
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: url(${(props) => props.bgImage}) center/cover;

    background-size: cover;
    opacity: 0.2; /* Adjust the opacity as needed */
    z-index: -10;
  }
`;

export const CircleContainer = styled.div`
  width: 80%;
  margin: 5rem;

  /* max-width: 800px;
  margin: 0 auto;
  flex-wrap: wrap; */
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: flex;
    margin: 0;
    /* flex-direction: column; */
  }
`;

export const Circle = styled.div`
  /* width: 20%; */
  height: 10em;
  width: 10rem;
  position: relative;
  border-radius: 50%;
  background-color: darkcyan;
  box-shadow: inset 0 0 0 8px white, 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;
  margin: 10px;
  overflow: hidden;
  display: flex;

  &:hover {
    transform: scale(0.9);
    background-color: lightblue;
  }

  /* @media screen and (max-width: 600px) {
    width: 10rem;
  } */
`;

export const TextInCircle = styled.div`
  padding-top: 1em;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: white;
`;

export const CircleContent = styled.div`
  margin: 2em;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
