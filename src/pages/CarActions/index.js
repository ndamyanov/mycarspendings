import React from "react";
import { useParams } from "react-router-dom";
import BuildIcon from "@mui/icons-material/Build";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import {
  StyledLink,
  HeroSection,
  CircleContainer,
  Circle,
  TextInCircle,
  Line,
} from "./styles";

const CarActions = (props) => {
  const { carId } = useParams();

  return (
    <HeroSection
      id="herosection"
      bgImage={
        "https://firebasestorage.googleapis.com/v0/b/niki-test-project.appspot.com/o/suv.jpeg?alt=media&token=695ec7ca-75b9-4798-aa64-d9ddcda9400d"
      }
    >
      <CircleContainer>
        <Line>
          <Circle>
            <StyledLink to={{ pathname: `/cars/${carId}/services` }}>
              <BuildIcon fontSize="large" style={{ color: "white" }} />
              <TextInCircle>Services</TextInCircle>
            </StyledLink>
          </Circle>
          <Circle>
            <StyledLink to={{ pathname: `/cars/${carId}/statistics` }}>
              <AttachMoneyIcon fontSize="large" style={{ color: "white" }} />
              <TextInCircle>Statistics</TextInCircle>
            </StyledLink>
          </Circle>
          <Circle>
            <StyledLink to={{ pathname: `/cars/${carId}/fuel` }}>
              <LocalGasStationIcon
                fontSize="large"
                style={{ color: "white" }}
              />
              <TextInCircle>Fuel</TextInCircle>
            </StyledLink>
          </Circle>
        </Line>
        <Line>
          <Circle>
            <StyledLink to={{ pathname: `/cars/${carId}/taxes` }}>
              <ReceiptLongIcon fontSize="large" style={{ color: "white" }} />
              <TextInCircle>Taxes</TextInCircle>
            </StyledLink>
          </Circle>
          <Circle>
            {/* <StyledLink to={{ pathname: `/cars/${carId}/notifications` }}>
              <MailOutlineIcon fontSize="large" style={{ color: "white" }} />
              <TextInCircle>Notifications</TextInCircle>
            </StyledLink> */}
          </Circle>
        </Line>
      </CircleContainer>
    </HeroSection>
  );
};

export default CarActions;
