import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import Trade  from './pages/trade/trader';
import { Header } from './components/header/header';
import { Login } from './components/login/login.jsx'

function App() {
  return (
    <div>
      <Header/>
      <Switch><Route exact path='/' component={HomePage}/>
      <Route exact path='/trade' component={Trade}/>
      <Route exact path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
