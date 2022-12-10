import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.scss'


export default function ProductDetails() {
    const api_URL = "https://fakestoreapi.com/products/";
    const [product, setProduct] = useState({});
    const params = useParams();
    useEffect(() => {
        fetch(`${api_URL}/${params.productId}`).then((res) => res.json()).then((product) => setProduct(product))
    }, []);
    
    return (
        <>
        <div className=' d-flex justify-content-center align-items-center'>
            <img src={product.image} alt=''/>
            <div className='partInfo'>
                <h2>{product.title}</h2>
                <span className=' fw-bold fs-4'>Category :</span> <span className='fs-4'>{product.category}</span>
                <br/>
                <span className=' fw-bold fs-4'>Description : </span> <span className='fs-4'>{product.description}</span>
                <br/>
                <span className=' fw-bold fs-4'>Price :</span>   <span className='fs-4'>{product.price} L.E</span>
                <br/>
                {/* <span className=' fw-bold fs-4'>Rate :</span>   <span className='fs-4'>{product.rating.rate}</span> */}
                <br/>
                {/* <span className=' fw-bold fs-4'>count :</span>   <span className='fs-4'>{product.rating.count}</span> */}
            </div>
        </div>
        
        </>
    )
}
