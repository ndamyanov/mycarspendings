import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import HomeIcon from "@mui/icons-material/Home";
import { AccountMenuPopup, Container, MenuAction, MenuItem } from "./styles";

import {
  withAuthenticator,
  // Button,
  // Heading,
  // Image,
  // View,
  // Card,
} from "@aws-amplify/ui-react";

import { Auth } from "aws-amplify";

const NavMenu = ({ signOut }) => {
  const ref = useRef(null);

  const [isOpenAccountMenu, setIsOpenAccountMenu] = useState(false);
  const [userName, setUserName] = useState("");

  const onExit = () => {
    signOut();
  };

  useEffect(() => {
    const getToken = async () => {
      // const { accessToken } = await Auth.currentSession();
      // setUserName(accessToken.payload.username);
      const { attributes } = await Auth.currentUserInfo();
      setUserName(attributes.email);
    };
    getToken();
  }, []);

  useEffect(() => {
    /**
     * Event clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpenAccountMenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const NavigationAuth = () => (
    <Container>
      <MenuItem>
        <Link to="/">
          <HomeIcon fontSize="large" />
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/cars">
          <DriveEtaIcon fontSize="large" />
        </Link>
      </MenuItem>
      <MenuItem ref={ref} onMouseLeave={() => setIsOpenAccountMenu(false)}>
        <Link to="#" onClick={() => setIsOpenAccountMenu(!isOpenAccountMenu)}>
          <AccountBoxIcon fontSize="large" />
        </Link>
        {isOpenAccountMenu && (
          <AccountMenuPopup onMouseLeave={() => setIsOpenAccountMenu(false)}>
            <div>Hello, {userName}!</div>
            {/* <div>Settings</div> */}
            <div onClick={onExit}>Log out</div>
          </AccountMenuPopup>
        )}
      </MenuItem>
    </Container>
  );

  return <NavigationAuth />;
};

export default withAuthenticator(NavMenu);
