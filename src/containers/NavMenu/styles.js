import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  background-color: darkcyan;
  // background-color: #41b3a3;
`;

export const MenuItem = styled.div`
  margin: 2em;
  flex: 2;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.3em;
  }
  a:hover {
    color: gray;
  }
`;

// export const MenuItemSearch = styled.div`
//   flex: 6;
//   margin: 2em;
// `;

export const MenuAction = styled.div`
  margin: 2em;
  flex: 1;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.3em;
  }
  a:hover {
    color: gray;
  }
`;

export const AccountMenuPopup = styled.div`
  position: sticky;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  width: 8em;
  margin: auto;
  z-index: 1;

  div {
    word-break: break-word;
  }
  div:hover {
    color: blue;
  }
  div:last-child {
    margin-top: 1em;
  }
`;
