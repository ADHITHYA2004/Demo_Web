import React, { useContext } from 'react'
import './onsale.css'
import { BestSellingProduct } from '../../App';

export const OnSaleCard = (props) => {
    const product_obj=props.product
    return (
        <div className='onsalemain '>
            <div className='onsalecards overflow-x-scroll d-flex gap-3'>
                {product_obj.map(i =>
                    <div className="card position-relative">
                        <p className='position-absolute bg-danger text-white px-3 py-1 z-3 rounded-pill saleTAge'>SALE</p>
                        <img src={i.img_src} className="card-img-top m-0" alt="..." />
                        <div className="card-body bg-white">
                            <p className="card-text">{i.product_name}</p>
                            <p className='price fs-5'><del>{i.mark_price}</del> <span>{i.price}</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
