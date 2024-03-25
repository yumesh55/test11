import './Navbar.css'
import { RiSearchLine } from 'react-icons/ri'
import logo from './logo.jpg'
const Navbar = () => {
  return (

    <header>
        <nav>
            {/* for desktop */}

            <div className="tn-container container">
                <a href="" className="logo">Vels Enterprises</a>
                <div className='logo1'>
                <img src={logo} alt='' className='logo'/>
    </div>
               </div>
              
            <hr />
            <div className="bn-container container">
                <ul className= "navlist">
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#home'>About Us</a></li>
                    <li><a href='#home'>Products</a></li>
                    <li><a href='#home'>Contact Us</a></li>
                </ul>
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar
