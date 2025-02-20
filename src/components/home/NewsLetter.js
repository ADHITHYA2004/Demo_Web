import React from 'react'
import './newsletter.css'
export const NewsLetter = () => {
    return (
        <div className='newsletter pb-1'>
            <div className='newslettercontainer mx-5 py-4'>
                <div>
                    <h2 className='text-center py-2'>Newsletter</h2>
                </div>
                <div>
                    <p className='text-center pb-3'>Sign up to receive updates on new arrivals and special offers</p>
                </div>
                <div className='newsInput'>
                    <label className='mb-3'>Email*</label><br />
                    <input type='text' className='rounded-pill py-2' />
                    <button className='subBtn px-5 ms-4 rounded-pill'>Subscribe</button>
                </div>
                <div class="mt-4 mb-4 check form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label class="form-check-label" for="inlineCheckbox1">Yes, subscribe me to your newsletter.</label>
                </div>
            </div>
            <div className='empty'>

            </div>
        </div>
    )
}
