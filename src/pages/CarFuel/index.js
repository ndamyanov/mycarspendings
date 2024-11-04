import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListRefuels from "../../screens/ListRefuels";
// import { getCar, listCarRefuels } from "../../graphql/queries";
// import {
//   createCarRefuel,
//   deleteCarRefuel,
//   updateCarRefuel,
// } from "../../graphql/mutations";
// import { API } from "aws-amplify";
import { StyledScrolledContainer, StyledBgImage } from "./styles";
import Loader from "../../components/Loader";
// import bannerImage from "../../assets/suv.jpeg";

const CarFuel = () => {
  const [car, setCar] = useState();
  const [carFuels, setCarFuels] = useState();

  const { carId } = useParams();

  useEffect(() => {
    getCarDetails();
    getCarFuels();
  }, []);

  const getCarDetails = async () => {
    // const apiData = await API.graphql({
    //   query: getCar,
    //   variables: { id: carId },
    // });
    // const carDetailsFromAPI = apiData.data.getCar;
    // setCar(carDetailsFromAPI);
  };

  const getCarFuels = async () => {
    // const apiData = await API.graphql({
    //   query: listCarRefuels,
    //   variables: { filter: { carID: { eq: carId } } },
    // });

    // const { items } = apiData.data.listCarRefuels;
    // setCarFuels(items);
  };

  const onAddRefuel = async (refuel) => {
    // await API.graphql({
    //   query: createCarRefuel,
    //   variables: { input: refuel },
    // });
    getCarDetails();
    getCarFuels();
  };

  const onUpdateRefuel = async (refuel) => {
    // await API.graphql({
    //   query: updateCarRefuel,
    //   variables: { input: refuel },
    // });
    getCarDetails();
    getCarFuels();
  };

  const onDeleteRefuel = async (id) => {
    // await API.graphql({
    //   query: deleteCarRefuel,
    //   variables: { input: { id } },
    // });
    getCarDetails();
    getCarFuels();
  };

  return (
    <StyledBgImage
      bgImage={
        "https://firebasestorage.googleapis.com/v0/b/niki-test-project.appspot.com/o/suv.jpeg?alt=media&token=695ec7ca-75b9-4798-aa64-d9ddcda9400d"
      }
    >
      {car ? (
        <>
          <h2>{car.carNumber}</h2>
          <h4>{car.brand}</h4>
          <h4>{car.model}</h4>
          <StyledScrolledContainer>
            <ListRefuels
              carId={car.id}
              items={carFuels}
              // carData={car}
              onAddRefuel={onAddRefuel}
              onUpdateRefuel={onUpdateRefuel}
              onDeleteRefuel={onDeleteRefuel}
            />
          </StyledScrolledContainer>
        </>
      ) : (
        <Loader />
      )}
    </StyledBgImage>
  );
};

export default CarFuel;
