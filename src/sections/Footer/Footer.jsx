import './Footer.css'
import logo from '../Footer/logo.jpg';
import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

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
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Contact</a></li>
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
