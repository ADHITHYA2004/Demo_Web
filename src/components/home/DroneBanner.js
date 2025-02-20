import React from 'react'
import './dronebanner.css'
import { Button } from '../Button'
export const DroneBanner = () => {
    return (
        <div>
            <div className='droneBanner pb-5'>
                <div className=' mx-5 droneBannerMain bg-white position-relative'>
                    <div className='bannerImage'>
                        <img src='https://static.wixstatic.com/media/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png/v1/fill/w_1766,h_900,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png' alt='...' />
                        <div className='position-absolute top-0 d-flex h-100 w-50'>
                            <div className='textdiv'>
                                <div className='p-5 my-3'>
                                    <div>
                                        <p >
                                            <span className='text-white fs-6  px-3 bg-danger'>Today's Special</span>
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className='fw-bold pb-2'>Best Arial View in Town
                                            <span ><h1 className='offerper'>30% <span className='text-black'>OFF</span></h1></span>
                                            on professional camera drones</h3>
                                    </div>
                                    <div>
                                        <p className='mb-0'>Limited quantities.</p>
                                        <p>See product detail pages for availability.</p>
                                    </div>
                                </div>
                                <div className='px-5 pb-5'>
                                    <Button btnclass='dronshop' text='Shop' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
