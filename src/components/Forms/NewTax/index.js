import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { StyledForm } from "./styles";

const NewTax = (props) => {
  const [date, setDate] = useState(new Date().toLocaleDateString("fr-CA"));
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const { showModal, setShowModal, onAddTax, carID } = props;

  const validateForm = () => {
    return date !== "" && description.length > 0;
  };

  const onNewTax = (event) => {
    event.preventDefault();
    onAddTax({
      date: date,
      carID: carID,
      description: description,
      cost: cost ?? 0,
    });

    setDescription("");
    setDate(new Date().toLocaleDateString("fr-CA"));

    setCost(0);

    props.setShowModal(false);
  };
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Tax</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledForm onSubmit={onNewTax}>
          <FormGroup controlId="date">
            <FormLabel>Date</FormLabel>
            <FormControl
              autoFocus
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="description">
            <FormLabel>Description</FormLabel>
            <FormControl
              as="textarea"
              style={{ height: "10em" }}
              autoFocus
              type="text"
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

          <Button block type="submit" disabled={!validateForm()}>
            Submit
          </Button>
        </StyledForm>
      </Modal.Body>
    </Modal>
  );
};

export default NewTax;
