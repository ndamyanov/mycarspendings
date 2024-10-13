import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { StyledForm } from "./styles";

const NewRefuel = (props) => {
  const [date, setDate] = useState(new Date().toLocaleDateString("fr-CA"));
  const [fuelType, setFuelType] = useState("");
  const [note, setNote] = useState("");
  const [cost, setCost] = useState("");
  const { showModal, setShowModal, onAddRefuel, carID } = props;

  const validateForm = () => {
    return date !== "" && cost.length > 0;
  };

  const onNewRefuel = (event) => {
    event.preventDefault();

    onAddRefuel({
      date: date,
      carID: carID,
      cost: cost,
      fuelType: fuelType,
      note: note,
    });

    setFuelType("");
    setDate(new Date().toLocaleDateString("fr-CA"));
    setNote("");
    setCost("");

    props.setShowModal(false);
  };
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Refuel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledForm onSubmit={onNewRefuel}>
          <FormGroup controlId="date">
            <FormLabel>Date</FormLabel>
            <FormControl
              autoFocus
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="cost">
            <FormLabel>Cost $</FormLabel>
            <FormControl
              autoFocus
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="fuelType">
            <FormLabel>Fuel Type</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
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

export default NewRefuel;
