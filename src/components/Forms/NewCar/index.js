import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { StyledForm } from "./styles";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
// import { createCar as createCarMutation } from "../../../graphql/mutations";

const NewCar = (props) => {
  const [carNumber, setCarNumber] = useState("");
  const [vin, setVin] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const { showModal, setShowModal, currentUser } = props;

  const validateForm = () =>
    carNumber.length > 0 && model.length > 0 && year.length > 0;

  const createCar = async () => {
    const data = {
      ownerID: currentUser,
      carNumber: carNumber,
      vin: vin,
      brand: brand,
      model: model,
      year: year,
      isActive: true,
    };

    // await API.graphql({
    //   query: createCarMutation,
    //   variables: { input: data },
    // });

    props.fetchCars();
  };

  const onNewCar = async (event) => {
    event.preventDefault();
    await createCar();

    setCarNumber("");
    setBrand("");
    setModel("");
    setVin("");
    setYear("");

    props.setShowModal(false);
  };
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledForm onSubmit={onNewCar}>
          <FormGroup controlId="carNumber">
            <FormLabel>Car Number</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={carNumber}
              onChange={(e) => setCarNumber(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="vin">
            <FormLabel>VIN</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="brand">
            <FormLabel>Brand</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="model">
            <FormLabel>Model</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="year">
            <FormLabel>Year</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </FormGroup>
          <Button block type="submit" disabled={!validateForm()}>
            Submit
          </Button>
        </StyledForm>
      </Modal.Body>
    </Modal>
  );
};

export default withAuthenticator(NewCar);
