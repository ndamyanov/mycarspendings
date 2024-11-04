import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  StyledHorizontalLine,
  StyledContainer,
  StyledRowContainer,
  StyledRowCenteredContainer,
  StyledPadding,
  StyledArrowButton,
  StyledScrolledContainer,
  StyledCardContainer,
  StyledBgImage,
} from "./styles";
// import { API } from "aws-amplify";
// import {
//   getCar,
//   listCarRefuels,
//   listCarServices,
//   listCarTaxes,
// } from "../../graphql/queries";
import Loader from "../../components/Loader";
import {
  formatDate,
  compareDatesDesc,
  isInCurrentMonth,
  getMonthFromIndex,
  getMonthsSinceEarliestDate,
} from "../../helpers/utils";
import TodayIcon from "@mui/icons-material/Today";
import Tooltip from "@mui/material/Tooltip";
import Toggle from "../../components/Toggle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import BuildIcon from "@mui/icons-material/Build";

const CarStatistics = () => {
  const [car, setCar] = useState({});
  const [carServices, setCarServices] = useState();
  const [filteredServices, setFilteredServices] = useState();
  const [carTaxes, setCarTaxes] = useState();
  const [filteredTaxes, setFilteredTaxes] = useState();
  const [carRefuels, setCarRefuels] = useState();
  const [filteredRefuels, setFilteredRefuels] = useState();
  const [sumServices, setSumServices] = useState(0);
  const [averageServices, setAverageServices] = useState(0);
  const [sumRefuels, setSumRefuels] = useState(0);
  const [averageRefuels, setAverageRefuels] = useState(0);
  const [sumTaxes, setSumTaxes] = useState(0);
  const [averageTaxes, setAverageTaxes] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [monthIndex, setMonthIndex] = useState(0);
  const { carId } = useParams();

  useEffect(() => {
    getCarDetails();
    getCarServices();
    getCarTaxes();
    getCarRefuels();
  }, []);

  const getCarDetails = async () => {
    // const apiData = await API.graphql({
    //   query: getCar,
    //   variables: { id: carId },
    // });
    // const carDetailsFromAPI = apiData.data.getCar;
    // setCar(carDetailsFromAPI);
  };

  const getCarServices = async () => {
    // const apiData = await API.graphql({
    //   query: listCarServices,
    //   variables: { filter: { carID: { eq: carId } } },
    // });

    // const { items } = apiData.data.listCarServices;
    // setCarServices(items);
  };

  const getCarTaxes = async () => {
    // const apiData = await API.graphql({
    //   query: listCarTaxes,
    //   variables: { filter: { carID: { eq: carId } } },
    // });

    // const { items } = apiData.data.listCarTaxes;
    // setCarTaxes(items);
  };

  const getCarRefuels = async () => {
    // const apiData = await API.graphql({
    //   query: listCarRefuels,
    //   variables: { filter: { carID: { eq: carId } } },
    // });

    // const { items } = apiData.data.listCarRefuels;
    // setCarRefuels(items);
  };

  useEffect(() => {
    if (carServices && carRefuels && carTaxes) {
      // #region Services
      let allServiceCost = 0;
      let tempServices = [...carServices];
      if (!showAll) {
        tempServices = tempServices.filter((s) =>
          isInCurrentMonth(s.date, monthIndex)
        );
      }

      tempServices.map((el) => (allServiceCost += Number(el.cost)));
      setFilteredServices(tempServices.sort(compareDatesDesc));
      setSumServices(allServiceCost);

      if (showAll) {
        const numberOfMonths = getMonthsSinceEarliestDate(tempServices);
        const averagePerMonthForService = allServiceCost / numberOfMonths;
        setAverageServices(averagePerMonthForService);
      }
      //#endregion

      //#region Refuels
      let allRefuelsCost = 0;
      let tempRefuels = [...carRefuels];
      if (!showAll) {
        tempRefuels = tempRefuels.filter((s) =>
          isInCurrentMonth(s.date, monthIndex)
        );
      }

      tempRefuels.map((el) => (allRefuelsCost += Number(el.cost)));
      setFilteredRefuels(tempRefuels.sort(compareDatesDesc));
      setSumRefuels(allRefuelsCost);

      if (showAll) {
        const numberOfMonths = getMonthsSinceEarliestDate(tempRefuels);
        const averagePerMonthForFuel = allRefuelsCost / numberOfMonths;
        setAverageRefuels(averagePerMonthForFuel);
      }
      //#endregion

      //#region Taxes
      let allTaxesCost = 0;
      let tempTaxes = [...carTaxes];
      if (!showAll) {
        tempTaxes = tempTaxes.filter((s) =>
          isInCurrentMonth(s.date, monthIndex)
        );
      }

      tempTaxes.map((el) => (allTaxesCost += Number(el.cost)));
      setFilteredTaxes(tempTaxes.sort(compareDatesDesc));
      setSumTaxes(allTaxesCost);

      if (showAll) {
        const numberOfMonths = getMonthsSinceEarliestDate(tempTaxes);
        const averagePerMonthForTaxes = allTaxesCost / numberOfMonths;
        setAverageTaxes(averagePerMonthForTaxes);
      }
      //#endregion
    }
  }, [car, carServices, carRefuels, carTaxes, showAll, monthIndex]);

  const showCurrentMonthEventsIcon = () => (
    <Tooltip title="Show only current month events">
      <TodayIcon />
    </Tooltip>
  );

  return (
    <StyledBgImage
      bgImage={
        "https://firebasestorage.googleapis.com/v0/b/niki-test-project.appspot.com/o/suv.jpeg?alt=media&token=695ec7ca-75b9-4798-aa64-d9ddcda9400d"
      }
    >
      <StyledContainer>
        <h2>{car.carNumber}</h2>
        <h4>{car.brand}</h4>
        <StyledRowCenteredContainer>
          <Toggle
            icon={showCurrentMonthEventsIcon()}
            isChecked={showAll}
            onChange={() => setShowAll(!showAll)}
          />
        </StyledRowCenteredContainer>
        {!showAll && (
          <StyledRowCenteredContainer>
            <StyledArrowButton
              onClick={() => setMonthIndex((prev) => prev - 1)}
            >
              <ChevronLeftIcon />
            </StyledArrowButton>
            <div>{getMonthFromIndex(monthIndex)}</div>
            <StyledArrowButton
              onClick={() => setMonthIndex((prev) => prev + 1)}
            >
              <ChevronRightIcon />
            </StyledArrowButton>
          </StyledRowCenteredContainer>
        )}
        <StyledPadding />
        {!car && <Loader />}
        <StyledRowContainer>
          <StyledCardContainer>
            <h5>
              <BuildIcon />
              Total: ${sumServices}
            </h5>
            {showAll && (
              <h5>
                <span>Average Per Month:</span>
                <span>
                  ${averageServices ? Math.round(averageServices) : 0}
                </span>
              </h5>
            )}
            <StyledHorizontalLine />
            <StyledScrolledContainer>
              <ul>
                {filteredServices &&
                  filteredServices.map((el) => (
                    <li key={el.id}>
                      {formatDate(el.date)} -- <b>${el.cost}</b>
                    </li>
                  ))}
              </ul>
            </StyledScrolledContainer>
          </StyledCardContainer>
          {sumRefuels > 0 && (
            <StyledCardContainer>
              <h5>
                <LocalGasStationIcon />
                Total: ${sumRefuels}
              </h5>
              {showAll && (
                <h5>
                  <span>Average Per Month:</span>
                  <span>
                    ${averageRefuels ? Math.round(averageRefuels) : 0}
                  </span>
                </h5>
              )}
              <StyledHorizontalLine />
              <StyledScrolledContainer>
                <ul>
                  {filteredRefuels &&
                    filteredRefuels.map((el) => (
                      <li key={el.id}>
                        {formatDate(el.date)} -- <b>${el.cost}</b>
                      </li>
                    ))}
                </ul>
              </StyledScrolledContainer>
            </StyledCardContainer>
          )}

          {sumTaxes > 0 && (
            <StyledCardContainer>
              <h5>
                {/* <LocalGasStationIcon /> */}
                Tax Total: ${sumTaxes}
              </h5>
              {showAll && (
                <h5>
                  <span>Average Per Month:</span>
                  <span>${averageTaxes ? Math.round(averageTaxes) : 0}</span>
                </h5>
              )}
              <StyledHorizontalLine />
              <StyledScrolledContainer>
                <ul>
                  {filteredTaxes &&
                    filteredTaxes.map((el) => (
                      <li key={el.id}>
                        {formatDate(el.date)} -- <b>${el.cost}</b>
                      </li>
                    ))}
                </ul>
              </StyledScrolledContainer>
            </StyledCardContainer>
          )}
        </StyledRowContainer>
      </StyledContainer>
    </StyledBgImage>
  );
};

export default CarStatistics;
