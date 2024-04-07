import { Link } from 'react-router-dom';
const ProductData = ({imgURL, title , Description}) => {

    return(
        <div className="product-data">
            <img src={imgURL} alt=""/>
            <h4>{title}</h4>
            <p className="Description"> Description : {Description}</p>
            
        </div>
    )


}

export default ProductData