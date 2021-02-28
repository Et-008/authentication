import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import FirebaseContext from './components/firebase/firebaseContext';
import Main from './containers/main/main';
import Auth from './containers/auth/auth';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false,
      data: '',
    }
    this.authStatus = this.authStatus.bind(this);
    this.logout = this.logout.bind(this);
  }
  authStatus(userData) {
    if(userData) {
      this.setState({data: userData});
      localStorage.setItem('isAuthenticated', true)
      this.setState({isAuthenticated: localStorage.getItem('isAuthenticated')});
    }
  }
  logout() {
    if(localStorage.getItem('isAuthenticated')) {
      console.log('Logged out')
      localStorage.removeItem('isAuthenticated')
      this.setState({isAuthenticated: localStorage.getItem('isAuthenticated')});
    }
  }
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/">
              {localStorage.getItem('isAuthenticated') ? <Redirect to="/home" /> : (<FirebaseContext.Consumer>
                {firebase => <Auth firebase={firebase} AuthStatus={(userData) => this.authStatus(userData)} />}
              </FirebaseContext.Consumer>)}
            </Route>
            <Route path="/home">
              {localStorage.getItem('isAuthenticated') ? <Main Data={this.state.data} Logout={this.logout} /> : <Redirect to='/' />}            
            </Route>
          </Switch>
      </div>
    );
  }
}

export default App;
