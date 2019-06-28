import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import EditUser from './components/EditUser';
import AllUser from './components/AllUser';
import Login from './components/Login';
import WithAuth from './components/withAuth';
import Secret from './components/Secret';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp}></Route>
          <Route exact path="/edit/:id" component={EditUser}></Route>
          <Route exact path="/allUser" component={WithAuth(AllUser)}></Route>
          <Route path="/secret" component={WithAuth(Secret)} />
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
