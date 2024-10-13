import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListServices from "../../screens/ListServices";
import { getCar, listCarServices } from "../../graphql/queries";
import {
  createCarService,
  deleteCarService,
  updateCarService,
} from "../../graphql/mutations";
import { API } from "aws-amplify";
import Loader from "../../components/Loader";
import { StyledScrolledContainer, StyledBgImage } from "./styles";

const CarServices = () => {
  const [car, setCar] = useState();
  const [carServices, setCarServices] = useState();
  const [searchPattern, setSearchPattern] = useState("");

  const { carId } = useParams();

  useEffect(() => {
    getCarDetails();
    getCarServices();
  }, []);

  const getCarDetails = async () => {
    const apiData = await API.graphql({
      query: getCar,
      variables: { id: carId },
    });
    const carDetailsFromAPI = apiData.data.getCar;
    setCar(carDetailsFromAPI);
  };

  const getCarServices = async () => {
    const apiData = await API.graphql({
      query: listCarServices,
      variables: { filter: { carID: { eq: carId } } },
    });
    
    const {items} = apiData.data.listCarServices;
    setCarServices(items);
  };

  const onAddService = async (service) => {
    await API.graphql({
      query: createCarService,
      variables: { input: service },
    });
    getCarDetails();
    getCarServices();
  };

  const onUpdateService = async (service) => {
    await API.graphql({
      query: updateCarService,
      variables: { input: service },
    });
    getCarDetails();
    getCarServices();
  };

  const onDeleteService = async (id) => {
    await API.graphql({
      query: deleteCarService,
      variables: { input: { id } },
    });
    getCarDetails();
    getCarServices();
  };

  if (!car) {
    return <Loader />;
  }

  return (
    <StyledBgImage bgImage={'https://firebasestorage.googleapis.com/v0/b/niki-test-project.appspot.com/o/suv.jpeg?alt=media&token=695ec7ca-75b9-4798-aa64-d9ddcda9400d'}>
      <div>
        <h2>{car.carNumber}</h2>
        <h4>{car.brand}</h4>
        <div>{car.vin}</div>
        <h4>{car.model}</h4>
        <h6>{car.year}</h6>
        <StyledScrolledContainer>
          <ListServices
            carId={car.id}
            items={carServices}
            // carData={car}
            onAddService={onAddService}
            onUpdateService={onUpdateService}
            onDeleteService={onDeleteService}
            searchPattern={searchPattern}
            setSearchPattern={setSearchPattern}
          />
        </StyledScrolledContainer>
      </div>
    </StyledBgImage>
  );
};

export default CarServices;
