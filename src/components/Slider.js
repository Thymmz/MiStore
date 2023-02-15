import React from 'react'
import { Carousel } from 'react-bootstrap';
import { CarouselItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = ({start}) => {
  return (
    <Carousel fade>
        {start.map((item, index)=>(
            <CarouselItem>
                <img
                className="d-block w-100"
                src={item}
                alt="First slide"
                />
            </CarouselItem>
        ))}
    </Carousel>
  )
}

export default Slider