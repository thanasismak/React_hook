import React from 'react';
import logo from './logo.svg';
//components
import Carousel from './components/carousel';
import Navbars from './components/navbars';

//style
import './App.css';


function Home(props) {
    return (
        <div className="App">
            <Navbars/>
            <Carousel />
        </div>
    );
}

export default Home;
