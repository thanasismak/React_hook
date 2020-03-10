import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, DotGroup, Dot } from 'pure-react-carousel';
import { Link } from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Form from '../components/form';
//data
import homeData from '../data/home';

const Embendedbody = () => {
    const [sliderdata, setSliderdata] = useState({ subtitle: '', slide: '', image: [] });

    const handleChange = e => {
        homeData.map((o, i) => { setSliderdata({ ...sliderdata, slide: e.target.text, subtitle: o.description, image: o.sections }); })
        // setSliderdata({ subtitle: data, image: o.sections.images });
    }

    return (
        <>
            <div className="_Closure" >
                <nav id="topnav2" >
                    <Link onClick={handleChange} to={"/Section1"}>Section 1</Link>
                    <Link onClick={handleChange} to={"/Section2"}>Section 2</Link>
                </nav>
            </div>
            <div id="app">

                {
                    sliderdata.slide === 'Section 1' ?
                        sliderdata.image && sliderdata.image.map((o, i) => { return o.images && <><img src={o.images[0].img} /><a>{o.images[0].title}</a></> })
                        : <Form />
                }
            </div>
        </>
    );
}

export default Embendedbody;