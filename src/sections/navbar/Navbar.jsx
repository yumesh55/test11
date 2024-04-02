import './Navbar.css'
import logo from './logo.jpg'
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
                <Link to="/Products"><li><a>Products</a></li></Link>
                <Link to="/Contact Us"><li><a>Contact Us</a></li></Link>
                <li><a>Download Brochure</a></li>
                </ul>
            </div>
            
        </nav>
    </header>


    


</>
  )
}

export default navbar
