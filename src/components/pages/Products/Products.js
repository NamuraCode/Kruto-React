import React from 'react'

function Products() {
    return (
        <div className='all'>
            <div className="products-container">
                <div className="products-article">
                    <div className="products-title">
                        <p>Nuestros Productos</p>
                    </div>
                    <div className="products-img-container">
                        <img className="products-img" src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1646252800/banner1_xr2c3v.jpg" alt="" />
                    </div>
                    <div className="products-info">
                        <div className="products-total">
                            <label for="product-subtitle">Productos en total:</label>
                            <input type="text" className="products-number" value="13"/> 
                            {/* <input type="text" className="products-number" value={props.stock}/>  */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-container">
            <div className="user-article">
                <div className="user-title">
                    <p>Usuarios</p>
                </div>
                <div className="user-img-container">
                    <img className="user-img" src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1646257626/banner2_ggdspx.png" alt="" />
                </div>
                <div className="user-info">
                    <div className="user-total">
                        <label for="user-subtitle">Usuarios en total:</label>
                        <input type="text" className="user-number" value="13"/>
                        {/* <input type="text" className="user-number" value={props.cantidad}/> */}
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}

export default Products