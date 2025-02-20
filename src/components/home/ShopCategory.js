import React from 'react'
import './shopCategory.css'
import { ShopCategoryCard } from './ShopCategoryCard'
import { OfferBanner } from './OfferBanner'
export const ShopCategory = () => {
    return (
        <div className='shopcategory '>
            <div className='ms-5 me-5 bg-white'>
                <div className='py-5 text-center'>
                    <h2>Shop Category</h2>
                </div>
                <div className='shopCards px-5 pb-5'>
                    <div className='cardContainer d-flex justify-content-between flex-wrap pb-5'>
                        <ShopCategoryCard/>
                    </div>
                </div>
                <div>
                    <OfferBanner/>
                </div>
            </div>
        </div>
    )
}
