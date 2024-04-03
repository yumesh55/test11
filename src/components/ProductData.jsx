import { Link } from 'react-router-dom';
const ProductData = ({imgURL, title , price}) => {

    return(
        <div className="product-data">
            <img src={imgURL} alt=""/>
            <h4>{title}</h4>
            <p> Price : {price}</p>
            <Link to='/Contact Us'><button className='btn'>Enquiry</button></Link>
        </div>
    )


}

export default ProductData