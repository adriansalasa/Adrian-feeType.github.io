import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ViewProduct from "./components/ViewProduct";
import DelProduct from "./components/DelProduct";
import { CIcon } from '@coreui/icons-react';
import { cilList, cilShieldAlt } from '@coreui/icons';

function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Router>
            <Routes>
              <Route exact path="/"
                element ={<ProductList />} />              
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
        </div>
      </div>
    </div>
  );
}
 
export default App;