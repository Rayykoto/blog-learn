import React from 'react'

export default function ApplicationLogo() {
    return (
        <a href="/" className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <span className="text-gray-700 font-semibold tracking-tighter text-2xl capitalize">
                <span className="text-idigo-500">ko</span><span className="text-indigo-500">To</span>
            </span>
        </a>
    )
}
