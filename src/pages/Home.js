import React from 'react';
import { Row, Col, Container, Card} from 'react-bootstrap';
import ImageSlider from '../components/ImageSlider';
import ImageCover from '../assets/cover.jpg'
import './Home.css'

function Home() {    
        return (            
            <>
            <hr />
            <Container className="mt-3">                         
                <Row>
                    <Col>
                        <Card>
                            <Card>
                                <Card.Img variant="top" src={ImageCover} className="imgCov" />                        
                            </Card>
                        </Card>
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <Card className="mt-3 mb-3">
                            <Card.Body>
                                <Card.Title className="titleProduct">Our Product</Card.Title>
                                <ImageSlider className="imgSlide" />                                                         
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>               
            </Container>            
            </>
        );
}

export default Home;