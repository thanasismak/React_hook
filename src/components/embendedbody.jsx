import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const handleChange = (event) => {
    if (event.target.text === 'Section 1')
        return event + 123123;
        else {
            return 2;
        }
};

const embendedbody = () => {
    return (
        <>
            <div className="_Closure" >
                <nav id="topnav2" >
                    <a onClick={handleChange}>Section 1</a>
                    <a onClick={handleChange}>Section 2</a>
                </nav>
            </div>
        </>
    );
}

export default embendedbody;