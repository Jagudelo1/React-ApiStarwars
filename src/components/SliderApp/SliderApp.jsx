import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../Img/Img1.jpg';
import Img2 from '../../Img/Img2.jpg';
import Img3 from '../../Img/Img3.jpg';
import '../../css/SliderApp.css';

export function SliderApp(){
    return(
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}