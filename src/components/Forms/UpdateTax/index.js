import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { StyledForm } from "./styles";

const UpdateTax = (props) => {
  const { showModal, setShowModal, onUpdateTax, tax } = props;

  const [date, setDate] = useState(tax.date);
  const [description, setDescription] = useState(tax.description);
  const [cost, setCost] = useState(tax.cost);

  useEffect(() => {
    if (tax) {
      const { date, description, cost } = tax;
      setDate(date);
      setDescription(description);
      setCost(cost);
    }
  }, [tax]);

  const validateForm = () => {
    return date !== "" && description && description.length > 0;
  };

  const onSubmitUpdate = (event) => {
    event.preventDefault();

    onUpdateTax({
      id: tax.id,
      date: date,
      description: description,
      cost: cost,
    });

    props.setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Update Tax</Modal.Title>
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
        

          <Button block type="submit" disabled={!validateForm()}>
            Save
          </Button>
        </StyledForm>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateTax;
