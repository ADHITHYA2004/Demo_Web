import { Link } from 'react-router-dom'
import './contentfooter.css'
export const ContentFooter = () => {
    return (
        <div className='p-5 m-1'>
            <div className='textcontainer d-flex justify-content-around'>
                <div>
                    <h5 className='pb-5'>Store Location</h5>
                    <p>500 Terry Francine Street</p>
                    <p>San Francisco, CA 94158</p>
                    <p>info@mysite.com</p>
                    <p>123-456-7890</p>
                </div>
                <div className='shopfoot'>
                    <h5 className='pb-5'>Shop</h5>
                    <Link className='text-decoration-none'><p>Shop All</p></Link>
                    <Link className='text-decoration-none'><p>Computers</p></Link>
                    <Link className='text-decoration-none'><p>Tablets</p></Link>
                    <Link className='text-decoration-none'><p>Drones & Cameras</p></Link>
                    <Link className='text-decoration-none'><p>Audio</p></Link>
                    <Link className='text-decoration-none'><p>Mobile</p></Link>
                    <Link className='text-decoration-none'><p>T.V & Home Cinema</p></Link>
                    <Link className='text-decoration-none'><p>Wearable Tech</p></Link>
                    <Link className='text-decoration-none'><p>Sale</p></Link>

                </div>
                <div>
                    <h5 className='pb-5'>Customer Support</h5>
                    <p>Contact Us</p>
                    <p>Help Center</p>
                    <p>About Us</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h5 className='pb-5'>Policy</h5>
                    <p>Shipping & Returns</p>
                    <p>Terms & Conditions</p>
                    <p>Payments Methods</p>
                    <p>FAQ</p>
                </div>

            </div>
        </div>
    )
}
