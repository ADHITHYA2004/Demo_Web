import React from 'react'
import './homebanner.css'
import { Button } from '../Button'
export const HomeBanner = () => {
    return (
        <div className='homebanner'>
            <div className='d-flex gap-5 p-5'>
                <div className='position-relative'>
                    <img src='https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_852,h_702,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg' alt='...' className='w-100'/>
                    <div className='position-absolute banner-1-text text-white'>
                        <div className=' banner-inner-text'>
                            <span> <p style={{fontSize: "20px"}} className='m-0'>Holiday Deals</p></span>
                            <span><h1 style={{fontSize: "50px"}} className='fw-bold mt-1'>Up to <br/>30% off</h1></span>
                            <span><p style={{fontSize: "20px"}} className='mt-1'>Selected Smartphone Brands</p></span>
                        </div>
                        <div>
                            <Button btnclass="banner-1-btn" text="Shop"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='position-relative'>
                    <img src='https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_852,h_702,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg' alt='...' className='w-100'/>
                    <div className='position-absolute banner-1-text text-white'>
                        <div className=' banner-inner-text'>
                            <span> <p style={{fontSize: "20px"}} className='m-0'>Just In</p></span>
                            <span><h1 style={{fontSize: "50px"}} className='fw-bold mt-1'>Take Your<br/>Sound <br/>Anywhere</h1></span>
                            <span><p style={{fontSize: "20px"}} className='mt-1'>Top Headphone Brand</p></span>
                        </div>
                        <div>
                            <Button btnclass="banner-1-btn" text="Shop"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
