import React from 'react';
import logo from './logo.svg';
//components
import Carousel from './components/carousel';
import Navbars from './components/navbars';
import Body from './components/embendedbody';
//style
import './App.css';


function Router(...props) {
    return (
        <div className="App">
            <Navbars />
            <Carousel />
            <Body />
        </div>
    );
}

export default Router;
