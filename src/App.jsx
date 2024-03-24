import React from 'react'
import Navbar from './sections/navbar/Navbar'
import Hero from './sections/Hero/Hero'
import Categories from './sections/Categories/Categories'
import Footer from './sections/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
   <Navbar/>
   <Hero/>
   <Categories/>
   <Footer/>
    </div>
  )
}

export default App
