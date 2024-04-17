import './Hero.css'
import Image from '../Hero/banner1.jpg'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Link } from 'react-router-dom';
 
 const Hero = () => {
  return (
    <section id="hero">
    <div className="hero-container container">
      <div className="hero-left">
        <h1>Vels Enterprises</h1>
        <p>Your One-Stop Destination for Quality Packing Solutions. At vels Enterprises, we understand the importance of reliable and effective packing solutions to safeguard your valuable items during transit. 
            Whether you're moving to a new home, shipping products to customers, or storing items for the long term, we've got you covered with our wide range of high-quality packing items and supplies.</p>
            <Link to="/About Us">  <button className='btn'>Learn More</button></Link>
    

      </div>
      <div className='hero-right'>
        <img src={Image}/>
      </div>
    </div>
    <FloatingWhatsApp 
      phoneNumber = "919585995755"
      accountName = "Vels Enterprises"
      statusMessage = "Online"
      chatMessage = "Welcome to Vels Enterprises, Please enter your requirement"
      allowClickAway
      notificationSound = "true"
    />
    </section>
  )
}
export default Hero