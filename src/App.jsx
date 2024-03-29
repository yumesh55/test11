import React from 'react'
import {Route , Routes } from "react-router-dom"
import Navbar from './sections/navbar/Navbar'
import Hero from './sections/Hero/Hero'
import Categories from './sections/Categories/Categories'
import Footer from './sections/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products/Products'
import About from './About/About'
import Contact from './contact/Contact'




const App = () => {
  return (
    <>
    <div className='app'>
   <Navbar/>
   <Hero/>
   <Routes>
    <Route path='/navbar' element={ <Navbar/>} /> 
    <Route path='/Products' element={ <Products/>} /> 
    <Route path='/Categories' element={ <Categories/>} /> 
    <Route path='/Footer' element={ <Footer/>} /> 
    <Route path='/About Us' element={<About/>}/>
    <Route path='/Contact Us' element={<Contact/>}/>
    
    </Routes>
   <Categories/>
   <Footer/>
  
   
   </div>
    </>
  )
}

export default App
