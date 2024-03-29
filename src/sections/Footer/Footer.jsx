import './Footer.css'
import logo from '../Footer/logo.jpg';
import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  
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
           <Link to="/Products"><li><a href="">Products</a></li></Link>
           <Link to="/Contact Us"><li><a href="">Contact</a></li></Link>
            <li><a href="">Sitemap</a></li>
        <li><a href="">Download Brochure</a></li>
          </div>
        </div>
      </div>
      <div className="footer-box">
        <h4 className="footer-title"><span><BsTelephone/></span> Contact Us </h4>
        <p><span><BiMap /></span>236M, LIC Colony Sidco Post, Pollachi Main Road, Coimbatore Industrial Estate Sub Post Office, Coimbatore-641021, Tamil Nadu, India</p>

        
      </div>
    </div>
  </footer> )
}

export default Footer
