import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledRowContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 680px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const StyledCardContainer = styled.div`
  width: fit-content;
  align-self: center;
  padding-bottom: 3em;
`;

export const StyledRowCenteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledPadding = styled.div`
  height: 5em;
`;

export const StyledHorizontalLine = styled.hr`
  border: 2px solid;
  width: 15em;
  align-self: center;
`;

export const StyledArrowButton = styled.button`
  cursor: pointer;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  border: none;
  margin: 0 1em;
  background-color: darkcyan;

  :hover {
    background-color: gray;
  }
`;

export const StyledScrolledContainer = styled.div`
  max-height: 10em;
  overflow-y: scroll;
  background-color: white;
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