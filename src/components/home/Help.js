import React from 'react'
import './help.css'
export const Help = () => {
    return (
        <div>
            <div className='d-flex'>
                <div className='bannerText w-75'>
                    <div className='innerText text-white '>
                        <div className='pb-2'>
                            <h2 className='lh-base'>Need Help? Check <br/>Out Our Help Center</h2>
                        </div>
                        <div className='pb-2'>
                            <p className='lh-base'>I'm a paragraph. Click here to add your own text <br/>and edit me. Let your users get to know you.</p>
                        </div>
                        <div>
                            <button className='helpbtn fs-6 rounded-pill'>Go to Help Center</button>
                        </div>
                    </div>
                </div>
                <div className='bannerImg'>
                    <img src='https://static.wixstatic.com/media/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg/v1/fill/w_1037,h_668,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg' />
                </div>
            </div>
        </div>
    )
}
