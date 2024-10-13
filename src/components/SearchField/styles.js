import styled from "styled-components";
// import SearchIcon from "@material-ui/icons/Search";
import SearchIcon from "@mui/icons-material/Search";

export const SearchField = styled.div`
  margin: 3em;
  width: 80%;
  position: relative;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  display: inline-block;
  position: absolute;

  margin: 0.7em;
`;

export const InlineItem = styled.div`
  display: inline-block;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 80em;
  height: 3em;
  border: 2px solid lightgray;
  border-radius: 1em;
  text-decoration: none;
  outline: none;
  padding-left: 3em;
  font-size: 1.2em;
  max-width: -webkit-fill-available;
`;
