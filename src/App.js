import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './subpage/AboutUs';
import FixedScrool from './components/FixedScrool';
import Error from './components/Error';
import ColorChanger from './color';

const App = () => {
  return (
    <Router>
      <FixedScrool />
      <NavBar />
      <ColorChanger />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about/us/'>
          <AboutUs />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
