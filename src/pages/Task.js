import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import './Task.css';

const Task = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();        
    }, []);
 
    const fetchData = async() => {
        const response = await fetch('http://localhost:3004/data');
        const products = await response.json();
        console.log("data nich", products);
        setProducts(products);
    }
           
    const deleteProduct = async(id) => {
        await fetch(`http://localhost:3004/data/${id}`,{
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        });
        fetchData();
    }    

    return (
        <>
        <hr />
         <Container className="mt-3">
            <Row>
                <Col>
                    <Card className="border-1 rounded shadow-sm">                
                        <Card.Body>         
                            <Link to="/add" >               
                                <Button variant="primary" className="mb-3 btnAdd">
                                        Add Cake
                                </Button>
                            </Link>
                            <Row >                            
                                {products.map((cakeProduct, idx) => (                            
                                    <Col sm ={4}>                                  
                                        <Card className="mt-3">
                                            <Card.Img variant="top" src={cakeProduct.image} className="crdImage" />
                                            <Card.Body>
                                                <Card.Title>{cakeProduct.title}</Card.Title>
                                                <Card.Text>
                                                    {cakeProduct.description}
                                                </Card.Text>
                                                <Row>
                                                    <Col sm={3}>   
                                                        <Link to={`/view/${cakeProduct.id}`} >
                                                            <Button variant="primary" className="mb-3 btnDetail">
                                                                    Detail
                                                            </Button>
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <Link to="">                                                
                                                            <Button variant="danger" onClick={() => deleteProduct(cakeProduct.id)} type="button">                                                
                                                                Delete
                                                            </Button>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>                            
                                ))}                    
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>            
        </Container>
        </>
    );
}

export default Task;