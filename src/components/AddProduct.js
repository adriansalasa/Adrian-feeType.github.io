import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Container, Button} from 'react-bootstrap';
 
const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
 
    const saveProduct = async(e) => {
        e.preventDefault();
        const product = { title, price };
        await fetch('http://localhost:3004/posts',{
            method: "POST",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        navigate("/");
    }
 
    return (
        <div className="border ml-5">
        <Container>
            <form onSubmit={saveProduct}>
                <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                </div>
                </div>
 
                <div className="field">
                <label className="label">Price</label>
                <div className="control">
                    <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />
                </div>
                </div>
         
                <div className="field">
                <div className="control">
                    <Button className="mt-3 mb-3" variant="primary">Save</Button>
                </div>
                </div>
            </form>
        </Container>
        </div>
    )
}
 
export default AddProduct