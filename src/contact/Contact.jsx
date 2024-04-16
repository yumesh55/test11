import React from 'react'
import './contact.css'
import Navbar from '../sections/navbar/Navbar'
import Footer from '../sections/Footer/Footer'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
<>
  <Navbar/>
  
  <div className="contact-container">
    <div className="form">
      <div className="contact-info">
              <h3 className="info">Vels Enterprises</h3>

          <div className="info1">
            <div className="information">
          <h7>Address: </h7>
           <p>236M, LIC Colony Sidco Post, Pollachi Main Road, Coimbatore Industrial Estate Sub Post Office, Coimbatore-641021, Tamil Nadu, India</p>
            </div>

            <div className="information">
              <h7>Contact Number: </h7>
                <p>Ajith : 7942619417</p>
            </div>

            <div className="information">
              <h7>Maps</h7>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.7213039442013!2d76.97605323697707!3d10.943394016350867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b0d36d281b9%3A0x649f62539c00be34!2sVels%20Enterprises!5e0!3m2!1sen!2sin!4v1712327841978!5m2!1sen!2sin" width="400" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
      </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span> 

          <form action="https://formsubmit.co/yumeshjayasutha@gmail.com" method="POST" >
           {/*<input type="hidden" name="_captcha" value="false"/>*/}
          <input type="hidden" name="_autoresponse" value="Dear Customer, Thanks for Choosing Vels Enterprises. Our exceutive will get into touch shortly. "></input>
          
            <h3 className="title1">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" class="input" required/>
              <label for="">Name</label>
              <span>Username</span>
            </div>

            <div className="input-container">
              <input type="email" name="email" class="input" required/>
              <label for="">Email ID</label>
              <span>Email</span>
            </div>

            <div className="input-container">
              <input type="tel" name="Phone" class="input" required/>
              <label for="">Contact Number</label>
              <span>Contact Number</span>
            </div>

            <div className="input-container text-area">
              <textarea name="message" class="input"></textarea>
              <label for="">Requirement Details</label>
              <span>Requirement Details</span>
            </div>
            <input type='submit' value="Send Enquiry" class='btn'/>
          </form>
      </div>

    </div>
  </div>

  <div className="contact-containermb">
    <div className="form-mobile">
      <div className="contact-infomb">
              <h3 className="info-mobile">Vels Enterprises</h3>

          <div className="info12">
            <div className="information-mobile">
          <h7>Address: </h7>
           <p>236M, LIC Colony Sidco Post, Pollachi Main Road, Coimbatore Industrial Estate Sub Post Office, Coimbatore-641021, Tamil Nadu, India</p>
            </div>

            <div className="information-mobile">
              <h7>Contact Number: </h7>
                <p>Ajith : 7942619417</p>
            </div>

            <div className="information-mobile">
              <h7>Maps</h7>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.7213039442013!2d76.97605323697707!3d10.943394016350867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b0d36d281b9%3A0x649f62539c00be34!2sVels%20Enterprises!5e0!3m2!1sen!2sin!4v1712327841978!5m2!1sen!2sin" width="300" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
      </div>
      
        <div className="contact-form-mobile">
          <span className="circle one-1"></span>
          <span className="circle two-2"></span> 

          <form action="https://formsubmit.co/yumeshjayasutha@gmail.com" method="POST" >
           {/*<input type="hidden" name="_captcha" value="false"/>*/}
          <input type="hidden" name="_autoresponse" value="Dear Customer, Thanks for Choosing Vels Enterprises. Our exceutive will get into touch shortly. "></input>
          
            <h3 className="titlemb">Contact us</h3>
            <div className="input-container-mobile">
              <input type="text" name="name" class="input" required/>
              <label for="">Name</label>
              <span>Username</span>
            </div>

            <div className="input-container-mobile">
              <input type="email" name="email" class="input" required/>
              <label for="">Email ID</label>
              <span>Email</span>
            </div>

            <div className="input-container-mobile">
              <input type="tel" name="Phone" class="input" required/>
              <label for="">Contact Number</label>
              <span>Contact Number</span>
            </div>

            <div className="input-container-mobile text-area">
              <textarea name="message" class="input"></textarea>
              <label for="">Requirement Details</label>
              <span>Requirement Details</span>
            </div>
            <input type='submit' value="Send Enquiry" class='btn'/>
          </form>
      </div>

    </div>
  </div>
  <Footer/>
</>
  )
}

export default Contact