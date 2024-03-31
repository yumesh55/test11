import ProductData from '../components/ProductData'
import { productCard } from './product'
import './products.css'
import Navbar from '../sections/navbar/Navbar'

export const Products = () => {
  return (
    <>
    <Navbar/>
    <section id="categories">
  <div className="title">
    <h2>Products</h2>
</div>

<div className="categories-container container">
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
