import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
//https://www.npmjs.com/package/pure-react-carousel#dot-

//data
import sliderData from '../data/slider';

const CarouselResponsive = () => {
    const [importsliderData, setImportsliderData] = useState();

    useEffect(() => {
        setImportsliderData(sliderData);
    }, []);

    return (
        <div className="_Slider">
            <CarouselProvider
                naturalSlideWidth={4}
                totalSlides={3}
                dragEnabled={false}
            >
                <Slider>
                    {importsliderData && importsliderData.map(o => <><Slide naturalSlideHeight="10"><h2>{o.title}</h2>< br /><img src={o.image} /><a>< br />{o.subtitle}</a></Slide></>)}
                </Slider>
                <DotGroup
                    dotNumbers={3}
                    disableActiveDots={true}
                    showAsSelectedForCurrentSlideOnly={true}
                >
                </DotGroup>
            </CarouselProvider>
        </div>
    );
}
export default CarouselResponsive;