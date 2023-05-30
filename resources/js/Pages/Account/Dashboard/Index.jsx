import React, { Children } from 'react'
import Account from '../../../Layouts/Account'
import { Head, usePage } from '@inertiajs/inertia-react';
import Sidebar from '../../../Components/Sidebar';

export default function Index({ children }) {

    //destruct props
    const { auth } = usePage().props;

    return (
        <>
            <Head>
                <title>Account - ANGGAP AJA TEMEN NGAJAR</title>
            </Head>
            <Account />
            <Sidebar>
                <div className="max-w-full font-inter p-5 text-xl font-semibold">
                    Tampilan Home Pagea asdasdasdasd
                </div>
            </Sidebar>
        </>
    )
}
