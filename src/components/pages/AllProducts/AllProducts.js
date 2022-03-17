import React from 'react'

function AllProducts() {
    return (
        <div>
            <div className="all-pto-container">
                <div className="all-pto-title">
                    <h1>Productos</h1>
                </div>
                <div className="all-pto-main">
                    <div className="all-pto-articles">
                        <article className="all-pto-main-articles">
                            <img src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1646259116/nendo2-NB_djhd2h.png" alt=""/>
                            {/* <img src={props.imagen} alt=""/> */}
                            <div className="all-pto-article-name">
                                <p>Kakashi</p>
                                {/* <p>{props.name}</p> */}
                            </div>
                            <div className="all-pto-article-cost">
                                <p>$ 123.00</p>
                                {/* <p>$ {props.price} .00</p> */}
                            </div>
                            <div className="all-pto-article-btn">
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

export default AllProducts