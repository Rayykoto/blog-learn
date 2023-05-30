import React from 'react'
import Footer from '../Components/Footer'

export default function Web({ children }) {
    return (
        <div className="main">

            <div>{children}</div>

            <Footer />
        </div>
    )
}
