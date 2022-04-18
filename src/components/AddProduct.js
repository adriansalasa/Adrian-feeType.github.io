import React, {useState} from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import {FormControl, InputGroup, Container, Button, Card, Form, Row} from 'react-bootstrap';
import '../css/AddProduct.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(2, "*Minimum 2 characters")
        .max(50, "*Maximum 15 characters")
        .required("*This Field is Required!"),
      description: Yup.string()
      .min(2, "*Minimum 2 characters")
      .max(300, "*Maximum 10 Characters")
      .required("*This Field is Required!"),
      image: Yup.string()
        .min(2, "*Minimum 2 characters")
        .required("*This Field is Required!")    
    }),
    onSubmit: values => {           
      axios.post('http://localhost:3004/data', values)
      .then((res)=>{
          console.log(res)         
          navigate("/")
      }, (err) => {
          console.log('error: ', err)
      })   
    }
  });

  const navigate = useNavigate();
  
  return (

    <div className="AppProduct">
        <Container className="mt-4">            
            <Card>
                <Form onSubmit={formik.handleSubmit}>
                    <Container >
                        <div className="mt-4">
                            <Row>
                              <InputGroup className="mb-2" style={{width:600}}>
                                  <InputGroup.Text id="basic-addon1">Cake Name</InputGroup.Text>
                                  <FormControl
                                    placeholder="input cake name here..." 
                                    name="title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    />
                              </InputGroup> 
                              <InputGroup className="mb-2" style={{width:600}}>
                                  <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                                  <FormControl
                                    placeholder="input description here..."
                                    name="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    />
                              </InputGroup>    
                              <InputGroup className="mb-2" style={{width:600}}>
                                  <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
                                  <FormControl
                                    placeholder="Image..."
                                    name="image" 
                                    value={formik.values.image}
                                    onChange={formik.handleChange}                                    
                                    />                                    
                              </InputGroup>                                                                                       
                            </Row>
                        </div>
                            <div className="mt-3 ml-5 mb-3">                              
                                <Button type="submit" >Submit</Button>                              
                            </div>
                    </Container>
                </Form>
            </Card>            
        </Container>        
    </div>
  );
}
export default AddProduct