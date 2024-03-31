import React from 'react'
import Navbar from '../sections/navbar/Navbar'
import Footer from '../sections/Footer/Footer'
import { AiFillCheckCircle } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import './about.css'
const About = () => {
  return (
    <>
    <Navbar/>
   
    <h4 className='about1'>About Us</h4>
    <section className='about' id='about'>
    <div className="container about-container">
      <div className="left">
         <img src="https://img2.storyblok.com/2048x1080/smart/f/129400/3840x2160/c3d7a922b9/hero-1.jpg" alt=''/>

      </div>
    
      <div className="right">
        <h4>About Us</h4>
        <p>At vels Enterprises, we're passionate about providing top-quality packing solutions to meet the diverse needs of our customers. With years of experience in the industry, we have established ourselves as a trusted source for reliable packing items and exceptional service.</p>
        
        <h4>Our Mission :</h4>
        <p>Our mission is simple to make packing hassle-free and ensure the safety and security of your belongings during transit. We strive to achieve this by offering a comprehensive selection of high-quality packing items at competitive prices, backed by expert advice and superior customer service.</p>

        <h4>Our Commitment to Sustainability :</h4>
        <p>At vels Enterprises, we are committed to minimizing our environmental footprint. We actively seek out eco-friendly packing materials and practices to reduce waste and promote sustainability. By choosing us, you can trust that you're not only protecting your belongings but also the planet.</p>
      </div>
    </div>

    <div className='services1'>
    <h2>What Sets Us Apart</h2>
    <div className='service-container1'>
     <div className="service-card1">
    <i className='line-chart'><AiFillCheckCircle /></i>
    <h4>Commitment to Quality</h4>
    <p>We understand the importance of using reliable packing materials to protect your valuable items. That's why we source our products from trusted suppliers known for their quality and durability.</p>
     </div>

     <div className="service-card1">
    <i className='line-chart'><FaShippingFast /></i>
    <h4>Wide Range of Products</h4>
    <p>Whether you're moving to a new home, shipping products to customers, or storing items for the long term, we have everything you need under one roof. From cardboard boxes and bubble wrap to packing tape and envelopes, we've got you covered.</p>
     </div>

     <div className="service-card1">
    <i className='line-chart'><RiCustomerService2Fill /></i>
    <h4>Exceptional Service</h4>
    <p>Our dedicated team goes above and beyond to ensure your satisfaction. From assisting you in finding the right packing solutions to providing timely support and guidance, we're here to make your packing experience seamless and stress-free.</p>
     </div>
     
     <div className="service-card1">
    <i className='line-chart'><TbTargetArrow /></i>
    <h4>Our Commitment to Sustainability</h4>
    <p>At vels Enterprises, we are committed to minimizing our environmental footprint. We actively seek out eco-friendly packing materials and practices to reduce waste and promote sustainability. By choosing us, you can trust that you're not only protecting your belongings but also the planet.</p>
     </div>
     </div>
     </div>

  </section>
  <Footer/>
    </>
  )
}

export default About