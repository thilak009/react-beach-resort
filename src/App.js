import React from 'react'
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {RoomProvider} from './context'
import Footer from './components/Footer';

function App() {
  return (
    <RoomProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/rooms"><Rooms/></Route>
          <Route exact path="/rooms/:slug"><SingleRoom/></Route>
          <Route path="*"><Error/></Route>
        </Switch>
        <Footer/>
      </Router>
    </RoomProvider>
  );
}

export default App;
