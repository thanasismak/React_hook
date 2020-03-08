import React from 'react';
import logo from './logo.svg';
//components
import Carousel from './components/carousel';
import Navbars from './components/navbars';
import Body from './components/embendedbody';
//style
import './App.css';


function App(...props) {
  return (
    <div className="App">
        <div className="header11">
          <Navbars />
          <Carousel />
        </div>
        <Body />
    </div>
  );
}

export default App;
