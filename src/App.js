import React from 'react'
import LandingPage from './components/LandingPage'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ListPage from './components/ListPage';

function App() {

  return (

    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/result/:id" >
          <ListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
