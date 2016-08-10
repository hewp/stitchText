import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

const userInfo = {
  username: '',
  password: '',
};

let signIn = (e) => {
  userInfo[e.target.placeholder] = e.target.value;
};

const LoginForm = ({ onClick }) => (
  <Grid>
    <Row>
      <Col xs={7} sm={5} md={4} className="authComponent">
        <h1 className="welcome">Sign In</h1>
      </Col>
    </Row>
    <Form horizontal>
      <FormGroup>
        <Col xs={7} sm={5} md={4} className="authComponent">
          <FormControl
            className="username" type="text" placeholder="username"
            onChange={signIn}
          />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col xs={7} sm={5} md={4} className="authComponent">
          <FormControl
            className="password" type="password" placeholder="password"
            onChange={signIn}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col xs={7} sm={5} md={4} className="authComponent">
          <Button
            onClick={e => { e.preventDefault(); onClick(userInfo); }}
            type="submit" bsStyle="primary" block
          >Sign in
          </Button>
        </Col>
      </FormGroup>
    </Form>
  </Grid>
);


export default LoginForm;
