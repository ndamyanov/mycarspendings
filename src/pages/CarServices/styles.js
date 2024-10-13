import styled from "styled-components";

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