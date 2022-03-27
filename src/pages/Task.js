import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';

const Task = () => {
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
        <>
        <hr />
         <Container className="mt-3">
            <Row>
                <Col>
                    <Card className="border-0 rounded shadow-sm">                
                        <Card.Body>                        
                            <h6 className="mb-4">Master Data Management > <span style={{color:"red"}}>Fee Type</span></h6>
                            <h4 className="mb-5" style={{fontWeight:"bold"}}>Fee Type</h4>
                            <tr>
                            <td className="btn-download">
                                <Link to="" >
                                    <button className="btn-circle mb-3" style={{color:"#fcfcfc", background:"#5e5e5e"}}>
                                        <FontAwesomeIcon icon={['fas', 'download']}/>                            
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <Link to="" >
                                    <button className=" btn-circle mb-3" style={{color:"#fcfcfc", background:"#5e5e5e"}}>
                                        <FontAwesomeIcon icon={['fas', 'print']}/>                                                        
                                    </button>
                                </Link>
                            </td>
                            <td>
                            <Link to="/add" >
                                <button className="btn btn-warning btn-sm mb-3" style={{color:"#6c6026"}}>
                                    <FontAwesomeIcon icon={['fas', 'file-circle-plus']}/> Create New                            
                                </button>
                            </Link>
                            </td>
                            </tr>
                            <Card className="border-1 rounded shadow" style={{border: '1px solid gray',borderRadius: '8px!important'}}>
                                <Table striped hover className="mb-1 w-auto">
                                    <thead style={{background:"#5e5e5e", color:"#fcfcfc"}}>
                                        <tr>                                                                             
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
                                                <td><FontAwesomeIcon icon={['fas', 'braille']}/></td>
                                                <td style={{width:50}}><input type="checkbox" /></td>
                                                <td style={{width:200}} class="text-left">{ product.freeTypeCode }</td>
                                                <td style={{width:200}}>{ product.freeTypeName }</td>
                                                <td style={{width:400, textAlign:"left"}} >{ product.description }</td>
                                                <td ></td>
                                                
                                                <td></td>
                                                <td style={{width:100}} class="text-center">{ product.status }
                                                </td>                                                
                                                <td></td>    
                                                <td></td>
                                                <td >                                                                                            
                                                    <Link to={`/edit/${product.id}`}>                                                
                                                        <FontAwesomeIcon icon={['fas', 'pencil']}/> 
                                                    </Link>
                                                </td>
                                                <td >                                                
                                                    <Link to={`/view/${product.id}`} >
                                                        <FontAwesomeIcon icon={['fas', 'eye']}/>
                                                    </Link>
                                                </td>
                                                <td >
                                                    <Link to="">                                                
                                                        <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)} type="button">                                                
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
        </>
    );
}

export default Task;