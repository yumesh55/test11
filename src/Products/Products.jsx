import ProductData from '../components/ProductData'
import { productCard } from '../constants/product'
import './products.css'
import Navbar from '../sections/navbar/Navbar'

export const Products = () => {
  return (
    <>
    <Navbar/>
    <section id="categories2">
  <div className="title">
    <h2>Products</h2>
</div>
<h2>Yibco Tools:</h2>
<div className="categories-container2 container2">
      {
        productCard.map((product) => (
         <ProductData key={product.imgURL} {...product} />
        )) 
      }
      
      </div>
</section>
   </>
  )


}

export default Products
