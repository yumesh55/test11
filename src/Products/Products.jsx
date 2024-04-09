import ProductData from '../components/ProductData'
import { productCard1 } from '../constants/product'
import { productCard2 } from '../constants/product'
import './products.css'
import Navbar from '../sections/navbar/Navbar'
import Footer from '../sections/Footer/Footer'
import { Link } from 'react-router-dom';

export const Products = () => {
  return (
    <>
    <Navbar/>
    <section id="product">
  <div className="title">
    <h2>Products</h2>
</div>
<div className="row">
      <div className="col-md-12">
        <p className="headerr1">Packing Items</p>
<div className="item-card">
      {
        productCard1.map((product1) => (
         <ProductData key={product1.imgURL} {...product1} />
        )) 
      }
      </div>
      <div className='services3'>
      <h2><span className="banner3">Explore Our latest</span> Catalouge and Quote </h2>
      <Link to='/Contact Us'><button className='btn3'>Request Quote</button></Link>
      </div>
      </div>
      
</div>
</section>
<Footer/>
   </>
  )


}

export default Products
