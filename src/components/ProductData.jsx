const ProductData = ({imgURL, title , price}) => {

    return(
        <div className="product-data">
            <img src={imgURL} alt=""/>
            <h4>{title}</h4>
            <p> Price : {price}</p>
        </div>
    )


}

export default ProductData