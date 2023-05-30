import React from 'react'

export default function Navlink({ className, href, children }) {
    return (
        <div>
            <a
                href={href}
                className={`${className ? className : ''} md:text-sm font-medium lg:text-tiny px-4 py-2 text-gray-300 hover:text-white rounded-lg`}>
                {children}
            </a>

        </div>
    );
}
