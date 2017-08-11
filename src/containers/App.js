import React from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/movies" component={Movies}/>
        <Route exact path="/directors" component={Directors}/>
        <Route exact path="/actors" component={Actors}/>
      </div>
    </Router>
  );
};

export default App
