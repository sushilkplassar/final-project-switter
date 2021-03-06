import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx';
import SignUp from './pages/SignUp';
import WelcomePage from './pages/WelcomePage';
import Logged_in_main from './pages/Logged_in_main';
import ProfilePage from './pages/ProfilePage';
import AccountPage from './pages/AccountPage';
import { connect } from 'react-redux';

const App = ({ isLoggedIn }) => {
  
  return (
    <div className="App">
      <Router>
        <div>
          <Link to='/'></Link>
        </div>
        {isLoggedIn && (
          <div>
            <Link to='/profile'></Link>
            <Link to='/account'></Link>
          </div>
        )}
        <Switch>
          <Route path='/profile' component={ProfilePage} />
          <Route path='/welcome' component={WelcomePage} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LoginPage} />
          <Route path='/account' component={AccountPage} />
          <Route exact path='/' component={Logged_in_main} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(mapStateToProps, null)(App);