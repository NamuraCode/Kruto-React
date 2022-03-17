import React from 'react'
//import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';

function LastProduct() {

    //const [lastProduct, setLastProduct] = useState([]);
    //const [isVisit, setIsVisit] = useState(false);

    //const lastProductCall = async () => {
    //    try {
    //        const heroku = await fetch(aqui va la api de heroku)
    //    } catch (error) {
    //    }
    //}

    //useEffect(async() => {
    //    const newUser = await lastProductCall()
    //    setLastProduct(newProduct)
    //    setTimeout(() => {
    //        setIsVisit(true);
    //    }, 2000)
    //}, [])

    //let view = isVisit ? (
    //    poner lo que hay dentro de return aqui y en return se pone {view}
    //)

    return (
        <div>
            <div className="last-pto-container">
                <div className="last-pto-title">
                    <h1>Ultimo Producto</h1>
                </div>
                <div className="last-pto-main">
                    <div className="last-pto-articles">
                        <article className="last-pto-main-articles">
                            <img src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1646259116/nendo2-NB_djhd2h.png" alt=""/>
                            {/* <img src={lastProduct.imagen} alt=""/> */}
                            <div className="last-pto-article-name">
                                <p>Kakashi</p>
                                {/* <p>{lastProduct.name}</p> */}
                            </div>
                            <div className="last-pto-article-cost">
                                <p>$ 123.00</p>
                                {/* <p>$ {lastProduct.price} .00</p> */}
                            </div>
                            <div className="last-pto-article-btn">
                                <a>
                                    <button id="detalles">Detalles</button>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastProduct