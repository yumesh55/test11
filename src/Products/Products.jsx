import ProductData from '../components/ProductData'
import { productCard } from '../constants/product'
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
<h3>Strapping Roll</h3>
<div className="item-card">
      {
        productCard.map((product) => (
         <ProductData key={product.imgURL} {...product} />
        )) 
      }
      
      </div>
      <h4>Lashing Belt</h4>
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
