import ProductData from '../components/ProductData'
import { productCard3 } from '../constants/product'
import './products.css'
import Navbar from '../sections/navbar/Navbar'
import Footer from '../sections/Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
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

<section id="mobile">
  <div className="cardtitle">

      <div className="row">
      <div className="col-md-12">
      <div className="item-card4">
      {
        productCard3.map((product3) => (
         <ProductData key={product3.imgURL} {...product3} />
        )) 
      }
      </div>
      <div className='services4'>
      <h2><span className="banner4">Explore Our latest</span> Catalouge and Quote </h2>
      <Link to='/Contact Us'><button className='btn4'>Request Quote</button></Link>
      </div>
      </div>
      </div>
      </div>
</section>
<FloatingWhatsApp 
      phoneNumber = "919585995755"
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

export default Hoses