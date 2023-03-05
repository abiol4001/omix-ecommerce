import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/Navbar/navBar';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className=''>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
