import styled from "styled-components";

export const Container = styled.div`
  // display: grid;
  // grid-template: 100% / auto auto auto;
  width: 95%;
  @media (min-width: 800px) {
    max-width: 70%;
  }
`;

export const InlineItem = styled.div`
  display: inline-block;
`;

export const AddButton = styled.button`
  background-color: darkcyan;
  // background-color: #41b3a3; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 50%;
  position: -webkit-sticky;
  position: fixed;
  top: 80%;
  float: right;
  right: 5%;
`;

export const ListContainer = styled.div`
  width: 80%;
`;

export const StyledCard = styled.div`
  border: 1px solid lightgray;
  box-shadow: 1px 2px darkgray;
  width: 100%;
  border-radius: 0.5em;
  margin: 1em;
  display: flex;
  padding: 0.5em;
  justify-content: space-around;
  background-color: white;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Date = styled.div`
  font-size: 1.2em;
  font-weight: bold;

  color: #357c77;
  text-align: center;
  margin: 0 1em;
`;

export const Km = styled.div`
  font-size: 1.2em;
  padding: 0 1em;
`;

export const Description = styled.div`
  flex-grow: 2;
  text-align: center;
`;

export const Icons = styled.div`
  margin: 0 1em;
`;
