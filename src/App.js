import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import AddProduct from "./components/AddProduct";
import ViewProduct from "./components/ViewProduct";
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (    
      <Router>
          <Navbar />
        <Routes>                    
          <Route path="/"
            element = {<Task />} /> 
          <Route path="/add"
            element = {<AddProduct />} />               
            <Route path="/view/:id"
            element = {<ViewProduct />} />                        
            <Route path="/home"
            element = {<Home />} />           
        </Routes>
      </Router>    
  );
}
 
export default App;