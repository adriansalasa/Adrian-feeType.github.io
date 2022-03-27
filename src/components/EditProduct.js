import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Container, Button} from 'react-bootstrap';

const EditProduct = () => {
    const [freeTypeName, setfreeTypeName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    useEffect(() => {
        getProductById();
    }, []);
 
    const getProductById = async() => {
        const response = await fetch(`http://localhost:3004/posts/${id}`);
        const data = await response.json();
        setfreeTypeName(data.freeTypeName);
        setDescription(data.description);
    }
 
    const updateProduct = async(e) => {
        e.preventDefault();
        const product = { freeTypeName, description };
        await fetch(`http://localhost:3004/posts/${id}`,{
            method: "PUT",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        navigate("/");
    }
 
    return (
        <div className="border ml-5">
        <Container >
            <form onSubmit={updateProduct}>
                <div className="field">
                <label className="label">freeTypeName</label>
                <div className="control">
                    <input className="input" value={freeTypeName} onChange={(e) => setfreeTypeName(e.target.value)} type="text" placeholder="type free name" />
                </div>
                </div>
 
                <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <input className="input" value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="type description here" />
                </div>
                </div>
         
                <div className="field">
                <div className="control">
                    <Button className="mt-3 mb-3" variant="primary">Update</Button>
                </div>
                </div>
            </form>
        </Container>
        </div>
        
    )
}
 
export default EditProduct