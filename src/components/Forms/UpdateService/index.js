import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { StyledForm } from "./styles";

const UpdateService = (props) => {
  const { showModal, setShowModal, onUpdateService, service } = props;

  const [date, setDate] = useState(service.date);
  const [description, setDescription] = useState(service.description);
  const [cost, setCost] = useState(service.cost);
  const [km, setKm] = useState(service.km);

  useEffect(() => {
    if (service) {
      const { date, description, cost, km } = service;
      setDate(date);
      setDescription(description);
      setCost(cost);
      setKm(km);
    }
  }, [service]);

  const validateForm = () => {
    return date !== "" && km && description && description.length > 0;
  };

  const onSubmitUpdate = (event) => {
    event.preventDefault();

    onUpdateService({
      id: service.id,
      date: date,
      description: description,
      cost: cost,
      km: km,
    });

    props.setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Update Service</Modal.Title>
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
          <FormGroup controlId="description">
            <FormLabel>Description</FormLabel>
            <FormControl
              as="textarea"
              style={{ height: "10em" }}
              autoFocus
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
          <FormGroup controlId="km">
            <FormLabel>km</FormLabel>
            <FormControl
              autoFocus
              type="number"
              value={km}
              onChange={(e) => setKm(e.target.value)}
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

export default UpdateService;
