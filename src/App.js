import React from 'react';

import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Header from './components/Header';
import axios from 'axios'
import { Store } from './components/Store';
function App() {
  return (
  <div >

    <Store>
    <Router>
    <Header/>
    <Switch>
    <Route exact path='/' render={()=>{return <Home/>}}/>
    <Route exact path='/f' render={()=>{return <Favorites/>}}/>
    </Switch>
     
    </Router>
      </Store>
   
    </div>
  );
}

export default App;
