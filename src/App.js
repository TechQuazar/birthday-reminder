import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home'

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Home />
        </Route>
    </Router>
  );
}

export default App;
