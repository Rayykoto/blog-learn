import React, { Fragment } from 'react'
import ResponsiveNavlink from './ResponsiveNavlink'
import { Menu, Transition } from '@headlessui/react'
import Line from './Line'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import SignOut from './SignOut'

export default function MobileNav() {

    const { auth } = usePage().props;

    const logoutHandler = async (e) => {
        e.preventDefault();

        Inertia.post('/logout');
    }

    return (
        <Menu as={'div'} className="w-full flex md:hidden items-center justify-between py-2.5 px-4 border-b border-gray-800">
            <a href="#" className="text-white font-semibold uppercase mr-6">LOGO KOTO</a>
            <Menu.Button className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >

                <Menu.Items as="div" className="bg-slate-900 outline absolute right-0 mr-12 top-3 mt-3 py-1 rounded-lg w-56 overflow-hidden">
                    <ResponsiveNavlink href="#">Beranda</ResponsiveNavlink>
                    <ResponsiveNavlink href="#">Topik</ResponsiveNavlink>
                    <ResponsiveNavlink href="#">Artikel</ResponsiveNavlink>
                    <ResponsiveNavlink href="#">About</ResponsiveNavlink>
                    <ResponsiveNavlink href="#">Premium</ResponsiveNavlink>
                    <Line />
                    {auth.user ? (
                        <>
                            <ResponsiveNavlink href="#">Dasbor</ResponsiveNavlink>
                            <ResponsiveNavlink href="#">Setting Akun</ResponsiveNavlink>
                            <ResponsiveNavlink href="#">Ganti Password</ResponsiveNavlink>
                            <ResponsiveNavlink href="#">Favorit Artikel</ResponsiveNavlink>
                            <Line />
                            <ResponsiveNavlink>
                                <SignOut />
                            </ResponsiveNavlink>
                        </>
                    ) : (
                        <>
                            <ResponsiveNavlink href="/login">Masuk</ResponsiveNavlink>
                            <ResponsiveNavlink href="#">Daftar</ResponsiveNavlink>
                        </>
                    )
                    }
                </Menu.Items>

            </Transition>
        </Menu>
    )
}
