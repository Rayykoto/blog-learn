import React from 'react'
import { Inertia } from "@inertiajs/inertia";

const logoutHandler = async (e) => {
    e.preventDefault();

    Inertia.post('/logout');
}

export default function SignOut() {
    return (
        <Button type='button' onClick={logoutHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-left" width={18} height={18} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 12l10 0"></path>
                <path d="M4 12l4 4"></path>
                <path d="M4 12l4 -4"></path>
                <path d="M20 4l0 16"></path>
            </svg>
            Keluar
        </Button>
    )
}

function Button(props) {

    const { children, text } = props;

    return (
        <button{...props} className='flex items-center gap-x-2'>
            {text || children}
        </button>
    )
}
