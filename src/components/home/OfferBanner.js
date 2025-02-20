import React from 'react'
import './offerBanner.css'
import { Button } from '../Button'
export const OfferBanner = () => {
    return (
        <div className='offerBanner pb-5'>
            <div className='offerBannerMain bg-white'>
                <div className='bannerImage position-relative'>
                    <img src='https://static.wixstatic.com/media/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png/v1/fill/w_1766,h_900,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png' alt='...' />
                    <div className='offerDiv position-absolute z-2 start-50 translate-middle rounded-circle'>
                        <h3 className='text-center innertext mt-5'>Best <br />Offer</h3>
                    </div>
                    <div className='position-absolute top-0 start-50 d-flex h-100 w-50'>
                        <div className='textdiv ps-5 pt-5'>
                            <div className='p-5 my-3 ms-5'>
                                <div>
                                    <h3 className='fw-bold pb-2'>Save up to
                                        <span ><h1 className='offerper text-black'>$150</h1></span>
                                        on selected laptop<br/> & tablets brands</h3>
                                </div>
                                <div>
                                    <p className='mb-0'>Terms and conditions apply</p>
                                </div>
                            </div>
                            <div className='px-5 pb-5 ms-5'>
                                <Button btnclass='dronshop' text='Shop' />
                            </div>
                        </div>
                    </div>
                    <div className='position-absolute top-0'>
                        <div className='textbanner bg-white'>
                            {/* <p>
                                Save up to</p> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
