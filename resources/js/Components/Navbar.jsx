import React from 'react'
import Navlink from './Navlink'
import { Menu, Transition } from '@headlessui/react'
import DropdownLink from './DropdownLink'
import Line from './Line'
import { usePage } from '@inertiajs/inertia-react'
import SignOut from './SignOut'
import ApplicationLogo from './ApplicationLogo'

export default function Navbar() {

    const { auth } = usePage().props;

    return (
        <div className="hidden md:block border-b border-white/10 px-3 py-3">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <ApplicationLogo />
                        <Navlink href="/">Beranda</Navlink>
                        <Navlink href="#">Topik</Navlink>
                        <Navlink href="/articles">Artikel</Navlink>
                        <Navlink href="#">About</Navlink>
                        <Navlink href="#">Premium</Navlink>
                    </div>
                    {auth.user ? (
                        <div className="flex items-center gap-x-2">

                            <Menu className="relative" as={'div'}>
                                <Menu.Button className="flex text-white items-center hover:bg-transparent gap-x-2">
                                    {auth.user.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </Menu.Button>
                                <Transition>
                                    <Menu.Items as="div" className="bg-slate-900 outline absolute right-0 mt-8 top-0 py-1 rounded-lg w-56 overflow-hidden">
                                        <DropdownLink href="/account/dashboard">
                                            Dasbor
                                        </DropdownLink>
                                        <DropdownLink href="">
                                            Setting Akun
                                        </DropdownLink>
                                        <DropdownLink href="">
                                            Ganti Password
                                        </DropdownLink>
                                        <DropdownLink href="">
                                            Favorit Artikel
                                        </DropdownLink>
                                        <Line />
                                        <DropdownLink>
                                            <SignOut />
                                        </DropdownLink>

                                    </Menu.Items>
                                </Transition>
                            </Menu>

                        </div>
                    ) : (
                        <div className="flex items-center gap-x-2">
                            <Navlink href="/login">Login</Navlink>
                            <Navlink href="/register">Register</Navlink>
                        </div>
                    )}

                </nav>
            </div>
        </div>
    )
}
