import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { StyledForm } from "./styles";
// import { API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
// import { updateCar as updateCarMutation } from "../../../graphql/mutations";

const TransferCar = (props) => {
  const { showModal, setShowModal, onConfirmTransfer } = props;
  const [destinationEmail, setDestinationEmail] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    onConfirmTransfer(destinationEmail);
    props.setShowModal(false);
  };

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      dialogClassName="modal-transfer"
    >
      <Modal.Header closeButton>
        <Modal.Title>Transfer Car History</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledForm onSubmit={onSubmit}>
          <FormGroup controlId="destinationEmail">
            <FormLabel>Transfer the car history to new owner</FormLabel>
            <FormControl
              autoFocus
              placeholder="Email"
              type="text"
              value={destinationEmail}
              onChange={(e) => setDestinationEmail(e.target.value)}
            />
          </FormGroup>
          <Button block type="submit" disabled={!destinationEmail}>
            Confirm Transfer
          </Button>
        </StyledForm>
      </Modal.Body>
    </Modal>
  );
};

export default withAuthenticator(TransferCar);
