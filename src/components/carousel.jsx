import React, { useEffect, useState } from "react";

const CarouselResponsive = () => {
    const [slider, setSlider] = useState(1);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://voda-react-assessment.herokuapp.com/slider`, {
            headers: new Headers({ accept: "application/json; odata=verbose" })
        })
            .then(res => res.json())
            .then(res => {
                setData({
                    slider1: res[0],
                    slider2: res[1],
                    slider3: res[2]
                });
            });
    }, []);

    const currentSlide = (value) => {
        setSlider(value);
    }

    return (
        <div className="slideshow-container ">
            {data.slider1 && slider && slider === 1 && <><h2>{data.slider1.title}</h2> <span>{data.slider1.subtitle}</span> <br /> <img style={{ width: '100%' }} alt="kati2" src={data.slider1.image} /></>}
            {data.slider2 && slider && slider === 2 && <><h2>{data.slider2.title}</h2> <span>{data.slider2.subtitle}</span> <br /> <img style={{ width: '100%' }} alt="kati2" src={data.slider2.image} /></>}
            {data.slider3 && slider && slider === 3 && <><h2>{data.slider3.title}</h2> <span>{data.slider3.subtitle}</span> <br /> <img style={{ width: '100%' }} alt="kati2" src={data.slider3.image} /></>}
            <div style={{ textAlign: 'center' }}>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
        </div>
    )
};

export default CarouselResponsive;
