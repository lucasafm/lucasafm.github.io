import React from 'react'
import { Switch, Route } from "react-router-dom";
import './App.css';
import Footer from './Components/Commons/Footer/Footer';
import Navbar from './Components/Commons/NavBar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
