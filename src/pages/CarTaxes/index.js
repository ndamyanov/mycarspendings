import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListTaxes from "../../screens/ListTaxes";
// import { getCar, listCarTaxes } from "../../graphql/queries";
// import {
//   createCarTax,
//   deleteCarTax,
//   updateCarTax,
// } from "../../graphql/mutations";
// import { API } from "aws-amplify";
import Loader from "../../components/Loader";
import { StyledScrolledContainer, StyledBgImage } from "./styles";

const CarTaxes = () => {
  const [car, setCar] = useState();
  const [carTaxes, setCarTaxes] = useState();
  const [searchPattern, setSearchPattern] = useState("");

  const { carId } = useParams();

  useEffect(() => {
    getCarDetails();
    getCarTaxes();
  }, []);

  const getCarDetails = async () => {
    // const apiData = await API.graphql({
    //   query: getCar,
    //   variables: { id: carId },
    // });
    // const carDetailsFromAPI = apiData.data.getCar;
    // setCar(carDetailsFromAPI);
  };

  const getCarTaxes = async () => {
    // const apiData = await API.graphql({
    //   query: listCarTaxes,
    //   variables: { filter: { carID: { eq: carId } } },
    // });

    // const { items } = apiData.data.listCarTaxes;
    // setCarTaxes(items);
  };

  const onAddTax = async (tax) => {
    // await API.graphql({
    //   query: createCarTax,
    //   variables: { input: tax },
    // });
    // getCarDetails();
    // getCarTaxes();
  };

  const onUpdateTax = async (tax) => {
    // await API.graphql({
    //   query: updateCarTax,
    //   variables: { input: tax },
    // });
    // getCarDetails();
    // getCarTaxes();
  };

  const onDeleteTax = async (id) => {
    // await API.graphql({
    //   query: deleteCarTax,
    //   variables: { input: { id } },
    // });
    // getCarDetails();
    // getCarTaxes();
  };

  if (!car) {
    return <Loader />;
  }

  return (
    <StyledBgImage
      bgImage={
        "https://firebasestorage.googleapis.com/v0/b/niki-test-project.appspot.com/o/suv.jpeg?alt=media&token=695ec7ca-75b9-4798-aa64-d9ddcda9400d"
      }
    >
      <div>
        <h2>{car.carNumber}</h2>
        <h4>{car.brand}</h4>
        <div>{car.vin}</div>
        <h4>{car.model}</h4>
        <h6>{car.year}</h6>
        <StyledScrolledContainer>
          <ListTaxes
            carId={car.id}
            items={carTaxes}
            onAddTax={onAddTax}
            onUpdateTax={onUpdateTax}
            onDeleteTax={onDeleteTax}
            searchPattern={searchPattern}
            setSearchPattern={setSearchPattern}
          />
        </StyledScrolledContainer>
      </div>
    </StyledBgImage>
  );
};

export default CarTaxes;
