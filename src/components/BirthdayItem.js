import React, { useContext } from 'react';
import HomeContext from './pages/HomeContext';
import { ListGroup, Row, Col } from 'react-bootstrap';
import '../home.css';
const List = () => {
  const items = useContext(HomeContext);
  return (
    <div>
      {items.map(({ name, dob }) => {
        return (
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col style={{ justifyContent: 'flex-start' }}>
                  <div style={{ display: 'flex' }}>
                    <h5 style={styles.subtitle}>Name:</h5>
                    <h5> {name}</h5>
                  </div>
                </Col>
                <Col style={{ justifyContent: 'flex-end' }}>
                  <div
                    style={{ display: 'flex', justifyContent: 'flex-start' }}
                  >
                    <h5 style={styles.subtitle}>DOB:</h5>
                    <h5> {dob}</h5>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </div>
  );
};
const styles = {
  listItem: {
    backgroudColor: '#fdfdfe',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'evenly',
  },
  subtitle: {
    color: '#777',
  },
};
export default List;
