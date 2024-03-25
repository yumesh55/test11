import CategoriesCard from '../../components/CategoriesCard'
import { categoryData } from '../../constants'
import './Categories.css'
import { AiOutlineLineChart } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";


const Categories = () => {
  return (
 <section id="categories">
  <div className="title">
    <h2>Our Products</h2>
    </div>

    <div className="categories-container container">
      {
        categoryData.map((category) => (
         <CategoriesCard key={category.imgURL} {...category} />
        )) 
      }

    </div>
    <div className='services'>
    <h2>Why Choose Us?</h2>
   <p>We source our packing items from trusted suppliers to ensure exceptional quality and reliability,
    Enjoy competitive prices without compromising on quality, making packing affordable for everyone 
    Our knowledgeable team is here to provide expert advice and guidance to help you find the perfect 
    packing solutions for your specific needs.</p>
    <div className='service-container'>
     <div className="service-card">
    <i className='line-chart'><AiOutlineLineChart /></i>
    <h4>Quality Assurance</h4>
     </div>

     <div className="service-card">
    <i className='line-chart'><BiSelectMultiple /></i>
    <h4>Wide Selection</h4>
     </div>

     <div className="service-card">
    <i className='line-chart'><IoPricetagOutline /></i>
    <h4>Competitive Pricing</h4>
     </div>
     
     <div className="service-card">
    <i className='line-chart'><GrUserExpert /></i>
    <h4>Expert Advice</h4>
     </div>
     </div>
    </div>
 </section>
  )
}

export default Categories
