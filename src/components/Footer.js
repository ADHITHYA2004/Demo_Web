import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <div className='footerdiv  p-3 text-center fs-6'>
            © 2035 by TechShed. Powered and secured by <Link className='text-black text-decoration-none'>Wix</Link>
            {/*  */}
        </div>
    )
}
