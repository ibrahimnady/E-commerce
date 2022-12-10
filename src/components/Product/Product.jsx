import React from 'react'
import './Product.scss'
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { product } = props;

    return (
        <>
            <div className="card text-center card-size">
                <img src={product.image} className="card-img-top img-size" alt="..." />
                <div className="card-body ">
                    <h2 className="card-title">{product.id} - {product.title.split("", 10)}</h2>
                    <h5 className="card-category">{product.category}</h5>
                    <p className="card-text">{product.description.split("", 150)}</p>
                    <div className=' d-flex justify-content-between fw-bold'>
                        <p>{product.rating.rate} Rate</p>
                        <p className=' fs-3 text-success'>{product.price} L.E</p>
                        <p>{product.rating.count} Count</p>
                    </div>
                    <Link to={`/product/${product.id}`} className="btn btn-primary ">Details </Link>
                </div>
            </div>
        </>
    )
}
