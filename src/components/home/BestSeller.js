import React, { useContext , useState} from 'react'
import './bestseller.css'
import { BestsellerCard } from './BestsellerCard'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'
import { BestSellingProduct } from '../../App'
export const BestSeller = () => {
    const navigate = useNavigate()
    const product_obj = useContext(BestSellingProduct)
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
    const navigateto=()=>{
        navigate('/bestseller')
    }
    return (
        <div className='bestseller pb-5'>
            <div className='mx-5 bg-white position-relative'>
                <div className='py-5'>
                    <h2 className='text-center'>Bestseller</h2>
                </div>
                <div className='previous position-absolute top-50 ps-5'>
                    <button className='border-none' onClick={p}><i class="fa-solid fa-chevron-left fs-5"></i></button>
                </div>
                <div>
                    <BestsellerCard product={product_obj} />
                </div>
                <div className='next position-absolute fs-5 top-50' style={{ left: "1100px" }}>
                    <button className='border-none' onClick={nextProduct}><i class="fa-solid fa-chevron-right"></i></button>
                </div>
                <div className='d-flex justify-content-center p-5'>
                    <Button btnclass='bestSellerViewAll rounded-pill' text='View All' click={navigateto}/>
                    
                </div>
            </div>
        </div>
    )
}
