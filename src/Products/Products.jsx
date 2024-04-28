import ProductData from '../components/ProductData'
import { productCard1 } from '../constants/product'
import { productCard2 } from '../constants/product'
import './products.css'
import Navbar from '../sections/navbar/Navbar'
import Footer from '../sections/Footer/Footer'
import Marquee from "react-fast-marquee";
import logo from './logo.jpg'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
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

<section id="mobile">
  <div className="cardtitle">
<div className="row">

<div className="item-card4">
      {
        productCard1.map((product1) => (
         <ProductData key={product1.imgURL} {...product1} />
        )) 
      }
      </div>
      <div className='services4'>
      <h2><span className="banner4">Explore Our latest</span> Catalouge and Quote </h2>
      <Link to='/Contact Us'><button className='btn4'>Request Quote</button></Link>
      </div>
      </div>
      
</div>
<Marquee>
<div className='logo1'>
                <img src={logo} alt='' className='logo1'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png' alt='' className='logo1'/>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5G-Mo6M76-QF-HdaDDIx_nFkMPuLvln8Kndjy-Ak_LQ&s' alt='' className='logo1'/>
                </div>
</Marquee>
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

export default Products
