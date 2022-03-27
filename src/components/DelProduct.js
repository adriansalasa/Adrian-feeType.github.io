import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
 
const DelProduct = async(id) => {
    const navigate = useNavigate();
    const [setProducts] = useState([]);

    useEffect(() => {
        // fetchData();
        navigate("/");
    }, []);
 
    const fetchData = async() => {
        const response = await fetch('http://localhost:3004/posts');
        const data = await response.json();
        setProducts(data);
    }

    await fetch(`http://localhost:3004/posts/${id}`,{
        method: "DELETE",
        headers:{
            'Content-Type': 'application/json'
        }
    });
    // fetchData();
    navigate("/");

}

export default DelProduct