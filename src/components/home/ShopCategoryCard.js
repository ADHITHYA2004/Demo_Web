import React from 'react'
import './shopCategory.css'
export const ShopCategoryCard = () => {
    const categories = [
        {
            name: "Computers",
            img: "https://static.wixstatic.com/media/c837a6_82b44061aa3e4ad6958d2a1ac317199c~mv2.jpg/v1/fill/w_432,h_430,q_90/c837a6_82b44061aa3e4ad6958d2a1ac317199c~mv2.webp",
        },
        {
            name: "Mobile",
            img: "https://static.wixstatic.com/media/c837a6_9c30b13d43264ebf888ab1e70eaf2daa~mv2.jpg/v1/fill/w_432,h_430,q_90/c837a6_9c30b13d43264ebf888ab1e70eaf2daa~mv2.webp",
        },
        {
            name: "Drones & Cameras",
            img: "https://static.wixstatic.com/media/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.jpg/v1/fill/w_432,h_430,q_90/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.webp",
        },
        {
            name: "Sale",
            img: "https://static.wixstatic.com/media/c837a6_3fae8a0f61fc49c0afe7217c479c8e16~mv2.png/v1/fill/w_432,h_430,q_90/c837a6_3fae8a0f61fc49c0afe7217c479c8e16~mv2.webp",
        },
        {
            name: "Tablet",
            img: "https://static.wixstatic.com/media/c837a6_6d6b2a5842f449539f528c501e5cc035~mv2.jpg/v1/fill/w_430,h_430,q_90/c837a6_6d6b2a5842f449539f528c501e5cc035~mv2.webp",
        },
        {
            name: "Best Sellers",
            img: "https://static.wixstatic.com/media/c837a6_fba39b02bd5c4f43ae6d4e1db77204c5~mv2.png/v1/fill/w_432,h_430,q_90/c837a6_fba39b02bd5c4f43ae6d4e1db77204c5~mv2.webp",
        },
        {
            name: "TV",
            img: "https://static.wixstatic.com/media/c837a6_7a28e7356d6d4e9dbc6e0b1dfb2ac9b6~mv2.jpg/v1/fill/w_432,h_430,q_90/c837a6_7a28e7356d6d4e9dbc6e0b1dfb2ac9b6~mv2.webp",
        },
        {
            name: "Wearable Tech",
            img: "https://static.wixstatic.com/media/c837a6_71e3b067871a4b6a88c3b93a55ba2b00~mv2.jpg/v1/fill/w_432,h_430,q_90/c837a6_71e3b067871a4b6a88c3b93a55ba2b00~mv2.webp",
        },
        {
            name: "Speakers",
            img: "https://static.wixstatic.com/media/c837a6_e0521967c9bb422abb3a3913f64d1eb5~mv2.jpg/v1/fill/w_432,h_430,q_90/c837a6_e0521967c9bb422abb3a3913f64d1eb5~mv2.webp",
        },
        {
            name: "Headphones",
            img: "https://static.wixstatic.com/media/c837a6_48fba84e8b3c48b48e1b5b493a515a3b~mv2.jpg/v1/fill/w_430,h_430,q_90/c837a6_48fba84e8b3c48b48e1b5b493a515a3b~mv2.webp",
        },
    ];
    return (
        <>
            {categories.map(i =>
                <div className='singlecard px-3 my-3'>
                    <div className='mt-3'>
                        <div className='cardImg rounded-circle'>
                            <img src={i.img}/>
                        </div>
                    </div>
                    <div className='cardTitle text-center'>
                        <h6 className='fw-bold mt-4'>{i.name}</h6>
                    </div>
                </div>
            )}
        </>
    )
}
