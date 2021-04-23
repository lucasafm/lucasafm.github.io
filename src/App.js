import React from 'react'
import './App.css';
import Footer from './Components/Commons/Footer/Footer';
import Navbar from './Components/Commons/NavBar/Navbar';
import TopArrow from './Components/Commons/TopArrow/TopArrow';
import About from './Components/Content/About/About';
import Contact from './Components/Content/Contact/Contact';
import Projects from './Components/Content/Projects/Projects';
import Home from './Components/Home/Home';

import MainState from './Context/Main/MainState'

function App() {
  return (
    <MainState>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <TopArrow />
          <Footer />
    </MainState>
  );
}

export default App;
