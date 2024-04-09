import ProductData from '../components/ProductData'
import { productCard3 } from '../constants/product'
import './products.css'
import Navbar from '../sections/navbar/Navbar'
import Footer from '../sections/Footer/Footer'
import { Link } from 'react-router-dom';

const Hoses = () => {
  return (
    <>
    <Navbar/>
    <section id="product">
  <div className="title">
    <h2>Products</h2>
</div>

      <div className="row">
      <div className="col-md-12">
        <p className="headerr1">Hoses</p>
      <div className="item-card">
      {
        productCard3.map((product3) => (
         <ProductData key={product3.imgURL} {...product3} />
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

export default Hoses