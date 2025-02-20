import React, { useContext, useState } from 'react'
import './onsale.css'
import { Button } from '../Button'
import { OnSaleCard } from './OnSaleCard'
import { BestSellingProduct } from '../../App'
export const OnSale = () => {
    let get_context = useContext(BestSellingProduct);
    const product_obj = get_context;
    const [productShow, nextproduct] = useState(product_obj.slice(0, 3));
    const nextProduct = () => {
        let temp = product_obj.shift();
        product_obj.push(temp)
        nextproduct(product_obj.slice(0, 3));
    }
    const p = () => {
        console.log(1)
        let temp = product_obj.pop();
        product_obj.unshift(temp)
        console.log(temp)
        nextproduct(product_obj.slice(0, 3));
    }
    return (
        <div className='onsale pb-5'>
            <div className='mx-5 bg-white position-relative'>
                <div className='py-5'>
                    <h2 className='text-center'>On Sale</h2>
                </div>
                <div className='previous position-absolute top-50 ps-5'>
                    <button className='border-none' onClick={p}><i class="fa-solid fa-chevron-left fs-5"></i></button>
                </div>
                <div>
                    <div>
                        <OnSaleCard product={productShow} />
                    </div>
                </div>
                <div className='next position-absolute fs-5 top-50' style={{ left: "1100px" }}>
                    <button className='border-none' onClick={nextProduct}><i class="fa-solid fa-chevron-right"></i></button>
                </div>
                <div className='d-flex justify-content-center p-5'>
                    <Button btnclass='onSaleViewAll' text='View All' />
                </div>
            </div>
        </div>
    )
}
