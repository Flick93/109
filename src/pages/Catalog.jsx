import Product from '../components/Product';
import "./Catalog.css";
import {catalog as Products, catagories} from "../services/DataService";

function Catalog(){
    return(
        <div className="catalog page">
            <h1>Our amazing catalog</h1>

            <div className='filters'>
                {catagories.map(cat => <button className='btn btn-sm btn-outline-dark'>{cat}</button>)}
            </div>
            
            {Products.map(prod => <Product data={prod}></Product>)}
            
        </div>
    );
}

export default Catalog;