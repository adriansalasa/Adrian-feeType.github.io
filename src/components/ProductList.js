import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './ProductList.css';
// import {Container} from 'react-bootstrap';
import { Card, Container, Row, Col, Button, Table, InputGroup, FormControl } from 'react-bootstrap';
import { CIcon } from '@coreui/icons-react';
import { cilList, cilShieldAlt } from '@coreui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
 
    const fetchData = async() => {
        const response = await fetch('http://localhost:3004/posts');
        const data = await response.json();
        setProducts(data);
    }
 
    const deleteProduct = async(id) => {
        await fetch(`http://localhost:3004/posts/${id}`,{
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        });
        fetchData();
    }
 
    return (    
        <div> 
        <h3 className="mt-3">Bayu Buana</h3>         
        <p>Travel Services</p>
        
        <Link to="" className="mr-5">        
            <FontAwesomeIcon icon={['far', 'bell']}/>                                    
        </Link>

        <Link to="" className="mr-5">        
            <FontAwesomeIcon  icon={['fas', 'circle-question']}/>        
        </Link>

        <button className="btn-circle pic">
            
        </button>

        <hr />
        <Container fluid className="mt-3">
            <Row>
                <Col>
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Img />
                        <Card.Body>
                        <h6 className="mb-4">Master Data Management > <span style={{color:"red"}}>Fee Type</span></h6>
                        <h4 className="mb-5" style={{fontWeight:"bold"}}>Fee Type</h4>
                        {/* <Link to="/add" className="button is-primary mt-5">Add New</Link> */}
                        {/* <Button as={Link} to="/add" variant="success" className="mb-3">                        
                        Create New</Button>                             */}

                        <Link to="" >
                        <button className="btn-circle mb-3" style={{color:"#fcfcfc", background:"#5e5e5e"}}>
                            <FontAwesomeIcon icon={['fas', 'download']}/>                            
                        </button>
                        </Link>

                        <Link to="" >
                        <button className=" btn-circle mb-3" style={{color:"#fcfcfc", background:"#5e5e5e"}}>
                            <FontAwesomeIcon icon={['fas', 'print']}/>                                                        
                        </button>
                        </Link>

                        <Link to="/add" >
                        <button className="btn btn-warning btn-sm mb-3" style={{color:"#6c6026"}}>
                            <FontAwesomeIcon icon={['fas', 'file-circle-plus']}/> Create New
                            {/* <FontAwesomeIcon icon="fa-solid fa-file-plus" /> CreateNew */}
                        </button>
                        </Link>
                        <Card className="border-1 rounded shadow" style={{border: '1px solid gray',borderRadius: '8px!important'}}>
                            <Table striped hover className="mb-1 w-auto">
                                <thead style={{background:"#5e5e5e", color:"#fcfcfc"}}>
                                    <tr>                                     
                                        {/* <th>No</th> */}
                                        {/* <>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                                <FormControl aria-label="Text input with checkbox" />
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroup.Radio aria-label="Radio button for following text input" />
                                                <FormControl aria-label="Text input with radio button" />
                                            </InputGroup>
                                        </>                                         */}
                                        {/* <th><InputGroup.Checkbox aria-label="Checkbox for following text input" /></th> */}
                                        <th></th>                                        
                                        <th><input type="checkbox" /></th>
                                        <th style={{width:140}}>Free Type Code</th>      
                                        <th style={{align:"center"}}>Free Type Name</th>
                                        <th>Description</th>                
                                        <th></th>                        
                                        <th colspan="3" class="text-center">Status</th>
                                        <th colspan="5" class="text-center">Action</th>
                                                                
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={product.id}>
                                        
                                            {/* <td><InputGroup.Checkbox aria-label="Checkbox for following text input" /></td> */}                                            
                                            <td><FontAwesomeIcon icon={['fas', 'braille']}/></td>
                                            <td style={{width:50}}><input type="checkbox" /></td>
                                            <td style={{width:200}} class="text-left">{ product.freeTypeCode }</td>
                                            <td style={{width:200}}>{ product.freeTypeName }</td>
                                            <td style={{width:400, textAlign:"left"}} >{ product.description }</td>
                                            <td ></td>
                                            
                                            <td >
                                            </td>
                                            <td style={{width:100}} class="text-center">{ product.status }
                                            </td>
                                                {/* <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger">Delete</button> */}                                                
                                            <td >
                                            </td>    
                                            <td></td>
                                            <td >                                            
                                                {/* <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link> */}
                                                <Link to={`/edit/${product.id}`}>                                                
                                                    <FontAwesomeIcon icon={['fas', 'pencil']}/> 
                                                </Link>
                                            </td>
                                             <td >
                                                {/* <Link to={`/view/${product.id}`} className="button is-small is-info">View</Link> */}
                                                <Link to={`/view/${product.id}`} >
                                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                                </Link>
                                            </td>
                                            <td >
                                                <Link to="">                                                
                                                <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)} type="button">
                                                    {/* <FontAwesomeIcon icon="fa-solid fa-trash-can" /> */}
                                                    <FontAwesomeIcon icon={['fas', 'trash-can']}/>
                                                </button>
                                                </Link>
                                            </td>               
                                            <td></td>                             
                                        </tr>
                                    ))}
                                                    
                                </tbody>                            
                            </Table>
                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>                
    )
}
 
export default ProductList