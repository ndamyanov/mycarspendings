import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCard = styled.div`
  margin: 1em;
  display: grid;
  grid-template-columns: repeat(2, auto) 5em;
  padding: 0.5em;
  border: 2px solid lightgray;
  border-radius: 1em;
  text-decoration: none;
  outline: none;
  margin-left: 3em;
  background-color: white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: #357c77;

  &:hover {
    color: #8ad6cc; /* Change color on hover */
    text-decoration: none; /* Remove underline */
  }
`;

export const Title = styled.h5``;
