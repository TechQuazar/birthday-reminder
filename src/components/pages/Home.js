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
import HomeContext from './HomeContext';
import '../../home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from '../BirthdayItem';

const Home = () => {
  //states
  const [items, setItems] = useState([{ name: 'Pranav', dob: '31-10-2000' }]);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [show, setShow] = useState(false);
  //functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function storeData() {
    handleClose();
    setItems([{ name, dob }, ...items]);
  }
  return (
    <Container
      style={{ minHeight: '100vh' }}
      className='text-center d-flex justify-content-center align-items-center'
    >
      <Row>
        <Col>
          <HomeContext.Provider value={items}>
            <Card className='text-center shadow' style={{ width: '18rem' }}>
              <Card.Header className='h3'>
                {items.length} birthdays today
              </Card.Header>
              <Card.Body>
                <List />

                <Row className='justify-content-around mt-4'>
                  <Button variant='info' onClick={handleShow}>
                    Add Birthday
                  </Button>
                  <Button variant='danger'>Remove all</Button>
                </Row>
              </Card.Body>
            </Card>
          </HomeContext.Provider>
        </Col>
      </Row>
      {/* MODAL */}
      <Modal
        show={show}
        onHide={() => {
          handleClose();
        }}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Add Birthday
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={name}
              placeholder='Probably someone important :)'
              aria-label='name'
              aria-describedby='basic-addon1'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>Date</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={dob}
              placeholder='dd-mm-yyyy'
              aria-label='dob'
              aria-describedby='basic-addon1'
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              storeData();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Home;
