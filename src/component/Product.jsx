import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'



const Product = ({ displayProduct, rating, price, image, title, product, id, addFavourite}) => {
    

    
    const onClickHandler = () => {
        displayProduct(product)
    }
    
   const favouriteHandler = () => {
        addFavourite(product)
   }
    
    return (
        <div className="col-sm-3">
            <div className="card">
                <div>
                    <img
                        src={image}
                        alt=""
                        className="card-image-top"
                        width={'180px'}
                        height={'250px'}
                        style={{marginLeft: '50px', padding: '10px'}}
                    />
                </div>
                <hr />
                <div
                    className="content">
                    <p className="card-title">
                        <small style={{ fontWeight: 600 }}>Brand, </small>
                        <small style={{ fontWeight: 100 }}>{title}</small>
                    </p>
                    <p style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <ReactStars value={rating.rate} size={20} /> <small>({rating.count})</small>
                    </p>
                    <p>
                        <span style={{ fontSize: 20 }}>&#36; </span>
                        <small style={{ fontSize: 20 }}>{price}</small>
                    </p>
                    <Link to={'/products/' + id} className="btn btn-primary btn-block">Product Detail</Link>
                    <a href="#" className="btn btn-primary btn-block" onClick={onClickHandler}>Add to Cart</a>
                   
                </div>
            </div>
        </div>
    )
}

export default Product