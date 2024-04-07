import ProductData from '../components/ProductData'
import { productCard2 } from '../constants/product'
import './products.css'
import Navbar from '../sections/navbar/Navbar'
import Footer from '../sections/Footer/Footer'
import { Link } from 'react-router-dom';
const Yibco = () => {
  return (
    <>
    <Navbar/>
    <section id="product">
  <div className="title">
    <h2>Products</h2>
</div>

      <div className="row">
      <div className="col-md-12">
        <p className="headerr1">Yibco Tools</p>
      <div className="item-card">
      {
        productCard2.map((product2) => (
         <ProductData key={product2.imgURL} {...product2} />
        )) 
      }
      </div>
      <Link to='/Contact Us'><button className='btn3'>Request Quote</button></Link>
      </div>
      </div>
</section>
<Footer/>
   </>
  )
}

export default Yibco