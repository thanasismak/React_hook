import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

//https://www.npmjs.com/package/pure-react-carousel#dot-

const Carousel = () => {
    return (
        <>
            <CarouselProvider
                naturalSlideWidth={4}
                naturalSlideHeight={4}
                totalSlides={2}
                playDirection='backward'
                dragEnabled={false}
            >
                <Slider className="_Slider" trayTag='ul' classNameAnimation="transition-duration: 0.5s">
                    <Slide index={0}>Slide 1</Slide>
                    <Slide index={1}>Slide 2</Slide>
                    <DotGroup dotNumbers={2} showAsSelectedForCurrentSlideOnly={true} children>
                        <Dot />
                    </DotGroup>
                </Slider>
            </CarouselProvider>
        </>
    );
}
export default Carousel;