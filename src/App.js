import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ViewProduct from "./components/ViewProduct";
import DelProduct from "./components/DelProduct";
// import { CIcon } from '@coreui/icons-react';
// import { cilList, cilShieldAlt } from '@coreui/icons';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (    
      <Router>
          <Navbar />
        <Routes>          
          <Route path="/Adrian-feeType.github.io"
            element = {<Task />} /> 
          <Route path="/"
            element = {<Home />} />              
          <Route path="/task"
            element = {<Task />} /> 
          <Route path="/add"
            element = {<AddProduct />} />              
          <Route path="/edit/:id"
            element = {<EditProduct />} />              
          <Route path="/view/:id"
            element = {<ViewProduct />} />             
          <Route path="/delete/:id"
            element = {<DelProduct />} />                                       
        </Routes>
      </Router>    
  );
}
 
export default App;