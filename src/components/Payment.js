import React from 'react'
import './payment.css'
export const Payment = () => {
    return (
        <div className='payment p-4 pb-5'>
            <div className='line px-5'></div>
            <div className='pb-5'>
                <p className='text-center'>We accept the following paying methods</p>
            </div>
            <div className='paymentoption'>
                <div className='paymentoptioncontaine d-flex justify-content-between'>
                    <div>
                        <img src='https://static.wixstatic.com/media/c837a6_e8798fcfdaf144478a5c7da1ba28ff2c~mv2.png/v1/fill/w_83,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-mastercard%403x.png'/>
                    </div>
                    <div>
                        <img src='https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_83,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-amex%403x.png'/>
                    </div>
                    <div>
                        <img src='https://static.wixstatic.com/media/c837a6_52115f99af28419d95a951f226e32e2b~mv2.png/v1/fill/w_83,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-chinaunionpay%403x.png'/>
                    </div>
                    <div>
                        <img src='https://static.wixstatic.com/media/c837a6_9378fbd3ef8c470bb89aee12ecbd2209~mv2.png/v1/fill/w_83,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-jcb%403x.png'/>
                    </div>
                    <div>
                        <img src='https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_78,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diners.png'/>
                    </div>
                    <div>
                        <img src='https://static.wixstatic.com/media/84770f_14f105815c3f47bf9001990706915501~mv2.png/v1/fill/w_83,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Discover.png'/>
                    </div>
                    <div>
                        <img src='https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_83,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PayPal.png'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
