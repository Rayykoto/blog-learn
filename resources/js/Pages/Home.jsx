import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>HOME - ANGGAP AJA TEMEN NGAJAR</title>
            </Head>

            <Header>
                <Header.Title>New Revolution</Header.Title>
                <Header.Body>
                    <header className="text-white">
                        <p className="text-base lg:font-normal md:text-xl leading-relaxed text-muted mt-4 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#" className="underline decoration-sky-500 text-sky-400 font-medium">Dolorem quam</a>,
                            recusandae quis dolorum veritatis nulla, nemo consequuntur temporibus quisquam expedita libero est facere ipsum laboriosam eveniet itaque. Rem, dicta temporibus?</p>
                        <a href="#" className="bg-white hover:bg-gray-50 hover:text-blue-600 transition duration-300 text-gray-900 px-4 py-2 text-sm md:text-tiny md:px-6 py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-300 md:shadow-gray-400">
                            Browse
                        </a>
                    </header>
                </Header.Body>
            </Header>
            <div className="container">
                <div className="max-w-xl w-full">
                    Ini Home
                </div>
            </div>
            <Footer />
        </>
    )
}
