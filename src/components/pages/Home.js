import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Alert,
  Modal,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import '../../home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from '../BirthdayItem';

const Home = () => {
  //states
  const [total, setTotal] = useState(0);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [item, setItem] = useState([]);
  const [show, setShow] = useState(false);
  //functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //modal
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Birthday
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3" onClick={(name) => setName(name)}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3" onClick={(dob) => setDob(dob)}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                Date of Birth:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="dob" aria-describedby="basic-addon1" />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              props.onHide();
              setItem([...item, { name, dob }]);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <Container
      style={{ minHeight: '100vh' }}
      className="text-center d-flex justify-content-center align-items-center"
    >
      <Row>
        <Col>
          <Card className="text-center shadow" style={{ width: '18rem' }}>
            <Card.Header className="h3">0 birthdays today</Card.Header>
            <Card.Body>
              <List />
              <Row className="justify-content-around mt-4">
                <Button variant="info" onClick={handleShow}>
                  Add Birthday
                </Button>
                <Button variant="danger">Remove all </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <MyVerticallyCenteredModal show={show} onHide={handleClose} />
    </Container>
  );
};

export default Home;
