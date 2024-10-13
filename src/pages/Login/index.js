import React, {useState} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { withFirebase } from '../../components/Firebase';
import {StyledForm} from './styles';

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const onForgotPassword = () => {
    props.firebase.forgotPassword(email)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.firebase.signIn(email, password)
    props.history.push('/');
  }

return (
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" >
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block disabled={!validateForm()} type="submit">
          Login
        </Button>
        <Button block disabled={email.length <= 0} onClick={onForgotPassword}>
          Forgot password
        </Button>
      </StyledForm>
  );
}

export default Login;
// export default withFirebase(Login);