import React, { useEffect, useState } from 'react'
import  './Slider.scss'

import offer_1 from '../../image/offer.jpg'
import offer_2 from '../../image/offer 2.jpg'
import offer_3 from '../../image/offer 3.png'

export default function Slider() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={offer_1} className="d-block w-100 img-height" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={offer_2} className="d-block w-100 img-height" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={offer_3} className="d-block w-100 img-height" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
