import ProductData from '../components/ProductData'
import { productCard2 } from '../constants/product'
import './products.css'
import Navbar from '../sections/navbar/Navbar'
import Footer from '../sections/Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
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
      <div className='services3'>
      <h2><span className="banner3">Explore Our latest</span> Catalouge and Quote </h2>
      <Link to='/Contact Us'><button className='btn3'>Request Quote</button></Link>
      </div>
      </div>
      </div>
</section>

<section id="mobile">
  <div className="cardtitle">


      <div className="row">
      <div className="item-card4">
      {
        productCard2.map((product2) => (
         <ProductData key={product2.imgURL} {...product2} />
        )) 
      }
      </div>
      <div className='services4'>
      <h2><span className="banner4">Explore Our latest</span> Catalouge and Quote </h2>
      <Link to='/Contact Us'><button className='btn4'>Request Quote</button></Link>
      </div>
      </div>
      </div>
</section>
<FloatingWhatsApp 
      phoneNumber = "916383064311"
      accountName = "Vels Enterprises"
      statusMessage = "Online"
      chatMessage = "Welcome to Vels Enterprises, Please enter your requirement"
      allowClickAway
      notificationSound = "true"
      avatar = "src/sections/navbar/logo.jpg"
    />
<Footer/>
   </>
  )
}

export default Yibco