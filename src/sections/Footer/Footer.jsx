import './Footer.css'
import logo from '../Footer/logo.jpg';
import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <>
  <footer id="footer">
    <div className="footer-container container">
     <div className="footer-box">
      <div className="footer-title">Vels Enterprises</div>
      <img src={logo} alt=""/>
      <h4>One-Stop Destination</h4>
     </div>
     
     
      <div className="footer-box">
        <div className="footer-title">Quick Links</div>
        <div className="footer-row">
          <div className="col">
          <Link to="/Home"><li><a href="">Home</a></li></Link>
           <Link to="/About Us"><li><a href="">About Us</a></li></Link>
           <Link to="/Home"><li><a href="">Products</a></li></Link>
           <Link to="/Contact Us"><li><a href="">Contact</a></li></Link>
            <li><a href="https://www.google.com/maps/place/Vels+Enterprises/@10.943823,76.977267,16z/data=!4m6!3m5!1s0x3ba85b0d36d281b9:0x649f62539c00be34!8m2!3d10.9438231!4d76.9772667!16s%2Fg%2F11tnhx8lht?hl=en&entry=ttu">Sitemap</a></li>
        <li><a href='src/sections/navbar/Velsenterprises.pdf'>Download Brochure</a></li>
          </div>
        </div>
      </div>
      <div className="footer-box">
        <h4 className="footer-title"><span><BsTelephone/></span> Contact Us </h4>
        <p><span><BiMap /></span>236M, LIC Colony Sidco Post, Pollachi Main Road, Coimbatore Industrial Estate Sub Post Office, Coimbatore-641021, Tamil Nadu, India</p>

        
      </div>
    </div>
  </footer> 


<footer id="mobilefooter">
    <div className="mobile-container container">
     <div className="mobile-box">
      <div className="mobile-title1">Vels Enterprises</div>
      <img src={logo} alt=""/>
      <h4>One-Stop Destination</h4>
     </div>
     
     
      <div className="mobile-box">
        <div className="mobile-title">Quick Links</div>
        <div className="mobile-row">
          <div className="col">
          <Link to="/Home"><li><a href="">Home</a></li></Link>
           <Link to="/About Us"><li><a href="">About Us</a></li></Link>
           <Link to="/Home"><li><a href="">Products</a></li></Link>
           <Link to="/Contact Us"><li><a href="">Contact</a></li></Link>
            <li><a href="https://www.google.com/maps/place/Vels+Enterprises/@10.943823,76.977267,16z/data=!4m6!3m5!1s0x3ba85b0d36d281b9:0x649f62539c00be34!8m2!3d10.9438231!4d76.9772667!16s%2Fg%2F11tnhx8lht?hl=en&entry=ttu">Sitemap</a></li>
        <li><a href='src/sections/navbar/Velsenterprises.pdf'>Download Brochure</a></li>
          </div>
        </div>
      </div>
      <div className="mobile-box">
        <h4 className="mobile-title1"><span><BsTelephone/></span> Contact Us </h4>
        <p><span><BiMap /></span>236M, LIC Colony Sidco Post, Pollachi Main Road, Coimbatore Industrial Estate Sub Post Office, Coimbatore-641021, Tamil Nadu, India</p>

        
      </div>
    </div>
  </footer> 
  </>
  )
}

export default Footer
