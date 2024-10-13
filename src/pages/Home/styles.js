import styled from "styled-components";
// import bannerImage from "../../assets/Home_page.PNG";

export const StyledAppHeader = styled.header`
  background-color: darkcyan;
  // background-color: #41b3a3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const StyledAppContainer = styled.div`
  text-align: -webkit-center;
`;

export const StyledBanner = styled.div`
  height: 100vh;
  width: -webkit-fill-available;
  background: url(${(props) => props.bgImage}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: -3rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust the color and opacity as needed */
  }
`;

export const StyledTitle = styled.h1`
  margin-bottom: 2.5em;
`;
