import ProductData from '../components/ProductData'
import { productCard1 } from '../constants/product'
import { productCard2 } from '../constants/product'
import './products.css'
import Navbar from '../sections/navbar/Navbar'

export const Products = () => {
  return (
    <>
    <Navbar/>
    <section id="product">
  <div className="title">
    <h2>Products</h2>
</div>

<div className="item-card">
      {
        productCard1.map((product1) => (
         <ProductData key={product1.imgURL} {...product1} />
        )) 
      }
      
      </div>
  
      <div className="item-card1">
      {
        productCard2.map((product2) => (
         <ProductData key={product2.imgURL} {...product2} />
        )) 
      }
      </div>
      
</section>
   </>
  )


}

export default Products
