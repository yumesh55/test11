import './Navbar.css'
import logo from './logo.jpg'
import { MdAddCall } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
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
                <Link to="/Home"><li><a><AiOutlineHome className='icon' /> Home</a></li></Link>
                <Link to="/About Us"><li><a><AiOutlineInfoCircle className='icon' /> About Us</a></li></Link>
                <Link to="/Home"><li><a><AiOutlineShopping className='icon'/> Products</a></li></Link>
                <Link to="/Contact Us"><li><a><AiOutlineContacts className='icon' /> Contact Us</a></li></Link>
                <li><a href='src/sections/navbar/Velsenterprises.pdf'><AiOutlineBook className='icon'/> Download Brochure</a></li>
                <li><a class="cnnContents1" href="https://api.whatsapp.com/send?phone=9585995755"><ImWhatsapp /> Whatsapp</a></li>
                </ul>
            </div>
            <div id='rssBlock'>
   <p class="cnnContents">
   <Link to="/Contact Us"> <span class="marqueeStyle">&nbsp; <MdAddCall /> Request A Quote: +91 7942619417 </span></Link>
        </p>
        </div>

            {/* for Mobile */}
        <div className="nm-nav">
          <div className="nm-container container">
          <Link to="/Home"><a href="" className="logo">Vels Enterprises</a></Link>
                <div className='logo1'>
                <img src={logo} alt='' className='logo'/>
  
    <ul className= "nav-menu" style={{transform: menuOpened && "translate(1%)"}}>
                <Link to="/Home"><li><a><AiOutlineHome className='icon' /> Home</a></li></Link>
                <Link to="/About Us"><li><a><AiOutlineInfoCircle className='icon' /> About Us</a></li></Link>
                <Link to="/Home"><li><a><AiOutlineShopping className='icon'/> Products</a></li></Link>
                <Link to="/Contact Us"><li><a><AiOutlineContacts className='icon' /> Contact Us</a></li></Link>
                <li><a href='src/sections/navbar/Velsenterprises.pdf'><AiOutlineBook className='icon'/> Download Brochure</a></li>
                <li><a class="cnnContents1" href="https://api.whatsapp.com/send?phone=9585995755"><ImWhatsapp /> Whatsapp</a></li>
                </ul>
                <div className="menu-btn">
                  {!menuOpened ?
                <AiOutlineMenu size={30} onClick={()=> setMenuOpened(true)}/> :
                <AiOutlineClose  size={30} onClick={()=> setMenuOpened(false)}/>
                  }
                </div>
          </div>
          </div>
          <div id='rssBlock'>
   <p class="cnnContents1">
   <Link to="/Contact Us"> <span class="marqueeStyle">&nbsp; <MdAddCall /> Request A Quote: +91 7942619417 </span></Link>
        </p>
        </div>
        </div>
        </nav>
        
    </header>


    


</>
  )
}

export default navbar
