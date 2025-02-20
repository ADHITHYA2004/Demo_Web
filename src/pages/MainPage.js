import React from 'react'
import { HomePage } from '../components/home/HomePage'
import { HomeBanner } from '../components/home/HomeBanner'
import { Service } from '../components/home/Service'
import { BestSeller } from '../components/home/BestSeller'
import { ShopCategory } from '../components/home/ShopCategory'
import { OnSale } from '../components/home/OnSale'
import { DroneBanner } from '../components/home/DroneBanner'
import { NewsLetter } from '../components/home/NewsLetter'
import { Help } from '../components/home/Help'
import { Payment } from '../components/Payment'
import { Footer } from '../components/Footer'
import { ContentFooter } from '../components/ContentFooter'
import { Brand } from '../components/home/Brand'
export const MainPage = () => {
    return (
        <>
            <HomePage/>
            <HomeBanner/>
            <Service/>
            <BestSeller/>
            <ShopCategory/>
            <OnSale/>
            <DroneBanner/>
            <Brand/>
            <NewsLetter/>
            <Help/>
            <ContentFooter/>
            <Payment/>
            <Footer/>
        </>
    )
}
