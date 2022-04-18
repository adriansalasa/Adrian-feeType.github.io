import React, {useState} from 'react';
import {SliderData} from './SliderData';
import '../pages/Home.css';
import{Row, Col} from 'react-bootstrap';

const ImageSlider = ()=> {
    const[current, setCurrent] = useState(0);
    
    return(
        <>
        <Row>
            {
                SliderData.map((myslide, index)=>{
                    return(
                        
                         <Col xs={3}>   
                            <img src={myslide.image} alt="cookies" id="imgSlide" />
                        </Col>
                    )
                })
            }
        </Row>
        </>
    )
}

export default ImageSlider