import React from "react";

import {Container, Button, Card, Row, Col} from 'react-bootstrap';
import '../pages/Task.css';
import './ViewProduct.css';
import { useState, useEffect } from "react";
import {Link, useParams } from "react-router-dom";

function ViewProduct() {

    const[description, setDescription] = useState('');
    const[detailData, setDetailData] = useState([]);
    const[myImage, setMyImage] = useState('');
    const[title, setTitle]=useState('');
    const { id } = useParams(); //get param url    
    const[rating, setRating]=useState(0);    
        
    useEffect(() => {
        fetchData();        
    });
 
    const fetchData = async() => {
        const response = await fetch(`http://localhost:3004/data/${id}`);
        const detailData = await response.json();

        setMyImage(detailData.image);
        setTitle(detailData.title);
        setDescription(detailData.description);
        setRating(detailData.rating);
    }        
    
  return (
    <>
        <Container className="mt-4">            
            <Card>                    
                <Row >                              
                    <Col sm={4}>
                        <img src={myImage} className="img-fluid rounded dtlImg" id="dtlImg" alt="" />                                    
                    </Col>
                    <Col sm={8}>
                        <h3 className="mt-3">{title}</h3>
                        <p>{description}</p>
                        <p>Rating: {rating}</p>

                        <Link to="/">                                                
                            <Button variant="success">                                                
                                Back
                            </Button>
                        </Link>
                    </Col>                            
                </Row>                        
                    
            </Card>            
        </Container>
    </>
  );
}
export default ViewProduct