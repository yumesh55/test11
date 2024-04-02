import React from 'react'
import './contact.css'
import Navbar from '../sections/navbar/Navbar'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
<>
  <Navbar/>
  
  <div className="contact-container">
    <div className="form">
      <div className="contact-info"></div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span> 

          <form action="index.html">
            <h3 className="title1">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" class="input"/>
              <label for="">Username</label>
              <span>Username</span>
            </div>

            <div className="input-container">
              <input type="email" name="email" class="input"/>
              <label for="">Email</label>
              <span>Email</span>
            </div>

            <div className="input-container">
              <input type="tel" name="Phone" class="input"/>
              <label for="">Contact Number</label>
              <span>Contact Number</span>
            </div>

            <div className="input-container text-area">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type='submit' value="Send Enquiry" class='btn'/>
          </form>
      </div>

    </div>
  </div>

</>
  )
}

export default Contact