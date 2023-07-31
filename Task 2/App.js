// src/App.js
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom';
import Link from 'react-router-dom';
import Switch from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import AllTrains from './components/AllTrains';
import SingleTrain from './components/SingleTrain';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/trains">All Trains</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/registration" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
          <Route exact path="/trains" component={AllTrains} />
          <Route path="/trains/:trainNumber" component={SingleTrain} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;