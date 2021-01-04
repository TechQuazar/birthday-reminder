import React, { useContext } from 'react';
import HomeContext from './pages/HomeContext';
import { ListGroup } from 'react-bootstrap';
import '../home.css';
const List = () => {
  const items = useContext(HomeContext);
  return (
    <div>
      {items.map(({ name, dob }) => {
        return (
          <ListGroup variant='flush'>
            <ListGroup.Item style={{ justifyContent: 'left' }}>
              <h5>
                Name: {name} DOB: {dob}
              </h5>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </div>
  );
};
export default List;
