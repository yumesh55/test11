import CategoriesCard from '../../components/CategoriesCard'
import { categoryData } from '../../constants'
import { categoryData1 } from '../../constants';
import { categoryData2 } from '../../constants';
import './Categories.css'
import { AiOutlineLineChart } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { Link } from 'react-router-dom';


const Categories = () => {
  return (
    <>
    
 <section id="categories">

  <div className="title">
    <h2>Our Products</h2>
    </div>

    <div className="row">
      <div className="col-md-4">
    <div className="categories-container container">
      {
        categoryData.map((category) => (
          <Link to='/Products'><CategoriesCard key={category.imgURL} {...category} /></Link>
        )) 
      }
 
</div>
<div className="hoses">
<Link to='/Products'><p className="headerr">Packing Items</p></Link>
</div>
    </div>
    
    <div className="col-md-4">
    <div className="categories-container container">
      {
        categoryData1.map((category1) => (
          <Link to='/Yibco tools'><CategoriesCard key={category1.imgURL} {...category1} /></Link>
        )) 
      }
         </div>
         <div className="hoses1">
         <Link to='/Yibco tools'><p className="headerr">Yibco Tools</p></Link>
         </div>
    </div>

    <div className="col-md-4">
    <div className="categories-container container">
      {
        categoryData2.map((category2) => (
          <Link to='/Hoses'><CategoriesCard key={category2.imgURL} {...category2} /></Link>
        )) 
      }
    
  </div>
  <div className="hoses3">
  <Link to='/Hoses'><p className="headerr">Hoses</p></Link>
  </div>
    </div>
    
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
 </>
  )
}
export default Categories
