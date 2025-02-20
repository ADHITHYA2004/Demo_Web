import React from 'react'
import {NavLink } from 'react-router-dom'
import './sidefilter.css'
export const SideFilter = () => {
    return (
        <div>
            <div className='sidenav p-2'>
                <p className='fs-4 pb-2 mb-2'>Browese by</p>
                <div className='lines m-0'>
                </div>
                <div className='sideNavCoponent'>
                    <ul className='m-0 p-0 text-decoration-none'>
                        <NavLink className='text-decoration-none'>
                            <li>All Products</li>
                        </NavLink >
                        <NavLink className='text-decoration-none fw-bold'>
                            <li>Best Sellers</li>
                        </NavLink>
                        <NavLink className='text-decoration-none'>
                            <li>Computers</li>
                        </NavLink>
                        <NavLink className='text-decoration-none'>
                            <li>Drones & Cameras</li>
                        </NavLink>
                        <NavLink className='text-decoration-none'>
                            <li>Home Page Best Sellers</li>
                        </NavLink>
                        <NavLink className='text-decoration-none'>
                            <li>Home Page Sale</li>
                        </NavLink>
                        <NavLink className='text-decoration-none'>
                            <li>Mobiles</li>
                        </NavLink>
                        <NavLink className='text-decoration-none'>
                            <li>Sale</li>
                        </NavLink>
                        <NavLink className='text-decoration-none'>
                            <li>Speakers</li>
                        </NavLink>
                        <NavLink className='text-decoration-none'>
                            <li>Tablets</li>
                        </NavLink>
                        <NavLink className='text-decoration-none'>
                            <li>TV & Home Cinemas</li>
                        </NavLink>
                        <NavLink className='text-decoration-none'>
                            <li>Weatable Tech</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

