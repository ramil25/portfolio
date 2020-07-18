import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/HomeComponent';
import About from './Components/AboutMeComponent';
import Portfolio from './Components/MyPortfolioComponent'
import Contact from './Components/ContactMeComponent'
function App() {
  return(
    <Router>

    <Route
    path='/'
    exact
    render={()=>{return(<Home />)}}
    />

<Route
    path='/AboutMe'
    exact
    render={()=>{return(<About />)}}
    />

<Route
    path='/MyPortfolio'
    exact
    render={()=>{return(<Portfolio />)}}
    />

     <Route
    path='/ContactMe'
    exact
    render={()=>{return(<Contact />)}}
    />
    </Router>
  )
  }

export default App;
