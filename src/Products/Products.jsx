import ProductData from '../components/ProductData'
import { productCard } from '../constants/product'
import './products.css'

export const Products = () => {
  return (
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
   
  )


}

export default Products
