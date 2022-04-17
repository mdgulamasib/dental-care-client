import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/doctor-1.jpg'
import banner2 from '../../../images/banner/doctor-2.jpg'
import banner3 from '../../../images/banner/doctor-3.jpg'
import './Banner.css'

const Banner = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='carousel-styling fs-1'>Teeth Implants</h3>
                        <p className='carousel-styling'>Teeth implants using modern equipments.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='carousel-styling fs-1'>Teeth Protection</h3>
                        <p className='carousel-styling'>Affordable teeth protection service</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='carousel-styling fs-1'>Dental Surgery</h3>
                        <p className='carousel-styling'>We ensure painless surgery</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;