import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import Trade  from './pages/trade/trader';
import { Header } from './components/header/header';
import { Login } from './components/login/login.jsx';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      curUser: null
    }
  }

  // Map the current user to the state
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({curUser: user});
      console.log(user);
    })

  }
  render() {
  return (
    <div>
      <Header currentUser= {this.state.curUser}/>
      <Switch><Route exact path='/' component={HomePage}/>
      <Route exact path='/trade' component={Trade}/>
      <Route exact path='/login' component={Login}/>
      </Switch>
    </div>
  );
  }
}

export default App;
