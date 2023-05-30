import React, { useState } from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import ApplicationLogo from '../Components/ApplicationLogo';
import Navlink from '../Components/Navlink';
import { Menu, Transition } from '@headlessui/react';
import DropdownLink from '../Components/DropdownLink';
import Line from '../Components/Line';
import SignOut from '../Components/SignOut';
import Sidebar from '../Components/Sidebar';

export default function Account() {

    const { auth } = usePage().props;

    return (
        <>
            <Head>
                <title>Account - ANGGAP AJA TEMEN NGAJAR</title>
            </Head>

            <div className="border-t border-white/10 bg-slate-900 px-3 py-3">
                <div className="container">
                    <nav className="ml-2 flex items-center justify-between">
                        <ApplicationLogo />
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
                                        <Menu.Items as="div" className="bg-gray-900 outline absolute right-0 mt-8 top-0 py-1 rounded-lg w-56 overflow-hidden">
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
        </>


    )
}
