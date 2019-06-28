import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
      <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/allUser'} className="nav-link">Users</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/login'} className="nav-link">Login</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
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
