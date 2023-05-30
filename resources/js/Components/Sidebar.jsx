import React, { useState } from 'react'

export default function Sidebar({ children }) {

    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const Menus = [
        {
            title: "Dashboard"
        },
        {
            title: "Pages",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-description" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M9 17h6"></path>
                <path d="M9 13h6"></path>
            </svg>
        },
        {
            title: "Media",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo-heart" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 8h.01"></path>
                <path d="M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5"></path>
                <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l1.5 1.5"></path>
                <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
            </svg>,
            spacing: true
        },
        {
            title: "Projects",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-star" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
            </svg>,
            submenu: true,
            submenuItems: [
                { title: 'Submenu 1' },
                { title: 'Submenu 2' },
                { title: 'Submenu 3' },
            ],
        },
        { title: "Analytics" },
        { title: "Inbox" },
        {
            title: "Profile",
            spacing: true
        },
        {
            title: "Setting",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
            </svg>
        },
    ];

    return (
        <div className='flex'>
            <div className={`h-screen w-70 px-8 ${open ? "w-72" : "w-24"} bg-gray-900 duration-300 relative`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18"></path>
                    <path d="M8 12l4 4"></path>
                    <path d="M8 12h8"></path>
                    <path d="M12 8l-4 4"></path>
                </svg>

                <div className={`flex items-center rounded-md bg-slate-700 mt-6 ${!open ? "px-1" : "px-3"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`text-white block float-left cursor-pointer ${open && "mr-0"}`} width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                        <path d="M21 21l-6 -6"></path>
                    </svg>
                    <input type={'search'} placeholder="Search" className={`text-white bg-transparent w-full border-none focus:rounded-md focus:outline-none ${!open && "hidden"}`} />
                </div>

                <ul className='pt-2'>
                    {Menus.map((menu, index) => {
                        return (
                            <>
                                <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md ${menu.spacing ? "mt-9" : "mt-1"}`}>
                                    {
                                        menu.icon ? menu.icon : <svg xmlns="http://www.w3.org/2000/svg" className="text-2xl block float-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M4 4h6v8h-6z"></path>
                                            <path d="M4 16h6v4h-6z"></path>
                                            <path d="M14 12h6v8h-6z"></path>
                                            <path d="M14 4h6v4h-6z"></path>
                                        </svg>
                                    }
                                    <span className={`text-white font-small flex-1 ${!open && "hidden"}`}>
                                        {menu.title}
                                    </span>
                                    {
                                        menu.submenu && open && (
                                            <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-chevron-down ${submenuOpen && "rotate-180"}`} onClick={() => { setSubmenuOpen(!submenuOpen) }} width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M6 9l6 6l6 -6"></path>
                                            </svg>
                                        )}
                                </li>
                                {menu.submenu && submenuOpen && open && (
                                    <ul>
                                        {menu.submenuItems.map((submenuItem, index) => (
                                            <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-4 hover:bg-gray-700 rounded-md">
                                                {submenuItem.title}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        )
                    })}
                </ul>
            </div>
            <div className="container">
                {children}
            </div>
        </div>
    )
}
