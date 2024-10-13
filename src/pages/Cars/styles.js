import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  @media (min-width: 800px) {
    max-width: 70%;
  }
  text-align: center;
  align-items: center;
`;

export const AddButton = styled.button`
  // background-color: #41b3a3; /* Green */
  background-color: darkcyan;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  position: fixed;
  bottom: 5em;
  right: 5em;
  border-radius: 50%;
`;

export const StyledScrolledContainer = styled.div`
  max-height: 30rem;
  overflow-y: scroll;
`;

export const StyledBgImage = styled.div`
  width: -webkit-fill-available;

  &::before {
    background: rgba(0, 0, 0, 0.2); /* Adjust the color and opacity as needed */

    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 110%;
    background: url(${(props) => props.bgImage}) center/cover no-repeat;

    background-size: cover;
    opacity: 0.2; /* Adjust the opacity as needed */
    z-index: -10;
  }
`;
