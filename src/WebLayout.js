import React from 'react'
import PageNavbar from './components/navbar/PageNavbar'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
    return (
        <>        
            <PageNavbar />
            <Outlet />
        </>
    )
}

export default WebLayout