import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { StyledForm } from "./styles";
import { API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { updateCar as updateCarMutation } from "../../../graphql/mutations";
import TransferCar from "../TransferCar";

const UpdateCar = (props) => {
  const { showModal, setShowModal, car } = props;
  const [carNumber, setCarNumber] = useState(car ? car.carNumber : "");
  const [vin, setVin] = useState(car ? car.vin : "");
  const [model, setModel] = useState(car ? car.model : "");
  const [brand, setBrand] = useState(car ? car.brand : "");
  const [year, setYear] = useState(car ? car.year : "");

  const [showInnerModal, setShowInnerModal] = useState(false);

  useEffect(() => {
    if (car) {
      const { carNumber, vin, model, year, brand } = car;
      setCarNumber(carNumber);
      setVin(vin);
      setBrand(brand);
      setModel(model);
      setYear(year);
    }
  }, [car]);


  const onTransfer = () => {
    setShowInnerModal(true);
  };

  const onConfirmTransfer = async (newEmail) => {
    console.log(newEmail);
    // get the id of the owner of the email

    // const user = await Auth.getUser( );
    // const email = user.attributes.email;
    // check if exist
    // TODO
    // update the car
    // const data = {
    //     ...car,
    //     ownerID: 'new owner'
    // };

    // await API.graphql({
    //   query: updateCarMutation,
    //   variables: { input: data },
    // });
    setShowInnerModal(false);
    setShowModal(false);
  };

  const onSubmitUpdate = async (event) => {
    event.preventDefault();
    const data = {
      id: car.id,
      ownerID: car.ownerID | "",
      carNumber: carNumber,
      vin: vin,
      brand: brand,
      model: model,
      year: year,
    };

    await API.graphql({
      query: updateCarMutation,
      variables: { input: data },
    });

    props.fetchCars();
    props.setShowModal(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName={showInnerModal ? "modal-blur" : ""}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StyledForm onSubmit={onSubmitUpdate}>
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
            <Button block type="submit">
              Update
            </Button>
            {/* <Button block onClick={onTransfer}>
              Transfer
            </Button> */}
          </StyledForm>
        </Modal.Body>
      </Modal>
      <TransferCar
        showModal={showInnerModal}
        setShowModal={setShowInnerModal}
        onConfirmTransfer={onConfirmTransfer}
      />
    </>
  );
};

export default withAuthenticator(UpdateCar);
