import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { StyledForm } from "./styles";

const UpdateRefuel = (props) => {
  const { showModal, setShowModal, onUpdateRefuel, refuel } = props;
  const [date, setDate] = useState(refuel.date);
  const [fuelType, setFuelType] = useState(refuel.fuelType);
  const [cost, setCost] = useState(refuel.cost);
  const [note, setNote] = useState(refuel.note);

  useEffect(() => {
    if (refuel) {
      const { date, fuelType, cost, note } = refuel;
      setDate(date);
      setFuelType(fuelType);
      setCost(cost);
      setNote(note);
    }
  }, [refuel]);

  const validateForm = () => {
    return (date !== "") & (cost !== "");
  };

  const onSubmitUpdate = (event) => {
    event.preventDefault();

    onUpdateRefuel({
      id: refuel.id,
      date: date,
      fuelType: fuelType,
      cost: cost,
      note,
    });

    props.setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledForm onSubmit={onSubmitUpdate}>
          <FormGroup controlId="date">
            <FormLabel>Date</FormLabel>
            <FormControl
              autoFocus
              type="date"
              value={date}
              locale
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
          <FormGroup controlId="description">
            <FormLabel>Fuel Type</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
            />
          </FormGroup>
          <Button block type="submit" disabled={!validateForm()}>
            Save
          </Button>
        </StyledForm>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateRefuel;
