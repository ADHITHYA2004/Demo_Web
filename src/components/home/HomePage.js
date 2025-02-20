import React from 'react'
import './homepage.css'
import { Button } from 'antd'
import { HomeBanner } from './HomeBanner'
export const HomePage = () => {
    return (
        <div className='home'>
            <div className='homeImage position-relative'>
                <img src='https://static.wixstatic.com/media/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png/v1/fill/w_1886,h_848,al_r,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png' width={"100%"} />
                <div className='homeText position-absolute'>
                    <div className='textDiv1'>
                        <div className='m-0'>
                            <span className='offer bg-danger text-white px-2'>Best Prices</span>
                        </div>
                        <div className='w-50 pe-5 m-0'>
                            <span className='text'>Incredible Prices on All Your Favorite Items</span>
                        </div>
                        <div className='textDiv3 '>
                            <span >Get more for less on selected brands</span>
                        </div>
                        <div className='mt-3'>
                            <button className='shopbtn rounded-pill '>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
