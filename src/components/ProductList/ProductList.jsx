import React, { useEffect, useState } from 'react'
import './ProductList.scss'
import Product from '../Product/Product';

export default function ProductList() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProduucts] = useState([])
    const [categories, setCategories] = useState([])
    const getProducts = () => {
        fetch(api_url).then((res) => res.json()).then((data) => setProduucts(data))
    }
    const getcategory = () => {
        fetch(`${api_url}/categories`).then((res) => res.json()).then((data) => setCategories(data))
    }
    const getProductInCategory = (catName) => {
        fetch(`${api_url}/category/${catName}`)
            .then(res => res.json())
            .then(data => setProduucts(data))
    }
    useEffect(() => {
        getProducts()
        getcategory()
    }, []);
    return (
        <>

            <div className="container-fluid bg-dark">
                <h2 className='text-center fw-bold p-5 text-white'>Our Products </h2>
                <div className=' text-center'>
                    <button onClick={getProducts} className='btn btn-warning me-3'>All Products</button>
                    {
                        categories.map((cat) => {
                            return <button key={cat} onClick={() => { getProductInCategory(cat) }} className='btn btn-outline-primary me-3'>{cat}</button>
                        })
                    }
                </div>
                <div className="row ">
                    {products.map((product) => {
                        return (
                            <div className="col-sm-12 col-md-3 mt-3" key={product.id}>
                                <Product product={product} />
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
