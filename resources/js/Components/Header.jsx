
import React from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Title = ({ children }) => (
    <h1 className="max-w-4xl text-xl font-bold tracking-tighter sm:text-3xl md:text-5xl text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 inline-block bg-clip-text">
        {children}
    </h1>
)

const Body = ({ children }) => <div>{children}</div>

const Header = ({ children }) => {
    return (
        <div className="bg-gradient-to-br from-gray-950 via-slate-750 to-gray-900 mb-3 sm:mb-12 lg:mb-4">
            <MobileNav />
            <Navbar />
            <div className="container">
                <div className="w-full pt-4 pb-4 ml-3 sm:mt-4 md:w-2/3 lg:mt-10 lg:mx-12">
                    {children}
                </div>
            </div>
        </div>
    )
}

Header.Title = Title;
Header.Body = Body;

export default Header
