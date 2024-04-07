import './Navbar.css'
import logo from './logo.jpg'
import { MdAddCall } from "react-icons/md";
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
<>
<header>
        <nav>
            {/* for desktop */}

            <div className="tn-container container">
            <Link to="/Home"><a href="" className="logo">Vels Enterprises</a></Link>
                <div className='logo1'>
                <img src={logo} alt='' className='logo'/>
    </div>
               </div>
              
            <hr/>
            <div className="bn-container container">
                <ul className= "navlist">
                <Link to="/Home"><li><a>Home</a></li></Link>
                <Link to="/About Us"><li><a>About Us</a></li></Link>
                <Link to="/Home"><li><a>Products</a></li></Link>
                <Link to="/Contact Us"><li><a>Contact Us</a></li></Link>
                <li><a>Download Brochure</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=9585995755">Whatsapp</a></li>
                </ul>
            </div>
            <div id='rssBlock'>
   <p class="cnnContents">
   <span class="marqueeStyle">&nbsp; <MdAddCall /> Request A Quote: +91 7942619417 </span>
        </p>
        </div>
        </nav>
    </header>


    


</>
  )
}

export default navbar
