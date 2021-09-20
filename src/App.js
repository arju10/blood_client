import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Topbar from './Components/Home/Topbar/Topbar';
import Login from './Components/Login/Login';
import DonorForm from './Components/Form/DonorForm/DonorForm';
import RequestForm from './Components/Form/RequestForm/RequestForm';
import DonorList from './Components/DonorsList/DonorList';
function App() {

  return (
  <>
  <Router>
    <Topbar/>
    <Switch>
      <Route exact path ="/">
          <Home/>
      </Route>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/donate">
        <DonorForm/>
      </Route>
      <Route exact path="/request">
        <RequestForm/>
      </Route>
      <Route exact path="/donorList">
        <DonorList/>
      </Route>
      <Route path="/register">
          <Register/>
      </Route>
      <Route path="/login">
          <Login/>
      </Route>
    </Switch>
  </Router>
  </>
  );
}

export default App;
