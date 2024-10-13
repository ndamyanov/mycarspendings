import React from "react";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import {
  StyledAppHeader,
  StyledAppContainer,
  StyledBanner,
  StyledTitle,
} from "./styles";

// import bannerImage from "../../assets/Home_page.PNG";
//import bannerImage from "../../../public/Home_page.PNG";

// import SettingsIcon from "@material-ui/icons/Settings";
//import SettingsIcon from "@mui/icons-material/Settings";

const Home = () => {
  return (
    <StyledAppContainer>
      <StyledAppHeader>
        {/* <SettingsIcon
          style={{ fontSize: 200 }}
          className="App-logo"
          alt="logo"
        />
        <a className="App-link" href="#" target="_blank">
          My Cars Manager
        </a> */}
        <StyledBanner bgImage={'https://firebasestorage.googleapis.com/v0/b/niki-test-project.appspot.com/o/suv.jpeg?alt=media&token=695ec7ca-75b9-4798-aa64-d9ddcda9400d'}>
          {/* Content for the hero section */}
          <StyledTitle>My cars service manager</StyledTitle>
        </StyledBanner>
        {/* <img
          src={bannerImage}
          alt="Banner"
          style={{ width: "100%", height: "auto" }}
        /> */}
      </StyledAppHeader>
    </StyledAppContainer>
  );
};

export default Home;
