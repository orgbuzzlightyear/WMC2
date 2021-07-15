
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Clubs from './pages/Clubs';
import MusicClub from './pages/MusicClub';
import SportsClub from './pages/SportsClubs';
import Events from './pages/events';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Clubs' component={Clubs} />
        <Route path='/events' component={Events} />
        <Route path='/musicClub' component={MusicClub} />
        <Route path='/sportsClub' component={SportsClub} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </Router>
  );
}
  
export default App;