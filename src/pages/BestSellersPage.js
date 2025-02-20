import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Help } from '../components/home/Help'
import { Payment } from '../components/Payment'
import './bestsellerpage.css'
import { useContext } from 'react'
import { BestSellingProduct } from '../App'
import { SideFilter } from '../components/SideFilter'
export const BestSellersPage = () => {
    const get_context = useContext(BestSellingProduct)
    const product_obj = get_context;
    return (
        <div >
            <div className='bestsellerpage px-5'>
                <div className='px-2 pb-2'>
                    <p>Home - Best Sellers</p>
                </div>
                <div className='d-flex'>
                    <SideFilter />
                    <div className='p-3 w-100'>
                        <div>
                            <h1 className='pb-5'>Best Sellers</h1>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <p>12 products</p>
                            </div>
                            <div>
                                <p>Sort by: Recommends</p>
                            </div>
                        </div>
                        <div className='cardContainer d-flex flex-wrap gap-1'>
                            {product_obj.map(i =>
                                <div className='cards pb-3'>
                                    <div className="card position-relative">
                                        <p className='position-absolute bg-danger text-white px-3 py-1 rounded-pill saleTAge z-3'>SALE</p>
                                        <img src={i.img_src} className="card-img-top m-0 " alt="..." />
                                    </div>
                                    <div className="product-content pt-3">
                                        <p className="card-text mb-0">{i.product_name}</p>
                                        <p className='price fs-5 mb-0'><del>{i.mark_price}</del> <span>{i.price}</span></p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Help />
            </div>
            <div>
                <Payment />
                <Footer />
            </div>
        </div>
    )
}
