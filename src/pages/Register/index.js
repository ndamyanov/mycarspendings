import React, { useState } from "react";
import { withFirebase } from "../../components/Firebase";
import { FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import { StyledForm } from "./styles";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (event) => {
    props.firebase
      .register(email, passwordOne)
      .then((authUser) => {
        //TODo
        if (authUser != null) {
          authUser.sendEmailVerification();
        }
      })
      .catch((error) => {
        setError(error);
      });

    event.preventDefault();
    props.history.push("/");
  };

  const validateForm = () => {
    return passwordOne !== passwordTwo || passwordOne === "" || email === "";
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormGroup controlId="email">
        <FormLabel>Email Address</FormLabel>
        <FormControl
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup controlId="passwordOne">
        <FormLabel>Password</FormLabel>
        <FormControl
          autoFocus
          type="password"
          value={passwordOne}
          onChange={(e) => setPasswordOne(e.target.value)}
        />
      </FormGroup>
      <FormGroup controlId="passwordTwo">
        <FormLabel>Confirm Password</FormLabel>
        <FormControl
          autoFocus
          type="password"
          value={passwordTwo}
          onChange={(e) => setPasswordTwo(e.target.value)}
        />
      </FormGroup>

      <Button block disabled={validateForm()} type="submit">
        Register
      </Button>
      {error && <p>{error.message}</p>}
    </StyledForm>
  );
};

export default Register;
// export default withFirebase(Register);
