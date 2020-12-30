import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../db';
import 'firebase/firestore';

const List = () => {
  //   const messageRef = firestore.collection('messages');
  //   const query = messageRef.orderBy('createdAt').limit(20);

  return <h3>This is from list</h3>;
};
export default List;
