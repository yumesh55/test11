const ProductData = ({imgUrl, title}) => {

    return(
        <div className="product-data">
            <img src={imgUrl} alt=""/>
            <h4>{title}</h4>
        </div>
    )


}

export default ProductData