import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Header from '../../Components/Header'
import Web from '../../Layouts/Web'

export default function Index() {

    const posts = [
        {
            title: 'Dignissmos culpa molestiae expedita dolorum.!',
            created_at: '12 December, 2023',
            author: 'Raymond Koto',
            picture: 'https://media.istockphoto.com/id/1379377609/photo/modern-workplace-with-comfortable-chair-in-stylish-home-office-interior.jpg?s=170667a&w=0&k=20&c=7f2y0WITZNLRSn6ow2zIJWanf53r1cPVVFB54t9_aQE=',
        },
        {
            title: 'Dignissmos culpa molestiae expedita dolorum.!',
            created_at: '12 December, 2023',
            author: 'Raymond Koto',
            picture: 'https://media.istockphoto.com/id/1352658280/id/foto/kursi-modern-meja-dengan-laptop-dengan-layar-kosong-furnitur-dengan-tanaman-jam.jpg?s=612x612&w=0&k=20&c=8NGaKL4PpblQxjUodntNhpIm6_0-91j4UojcUPM9ehg=',
        },
        {
            title: 'Dignissmos culpa molestiae expedita dolorum.!',
            created_at: '12 December, 2023',
            author: 'Raymond Koto',
            picture: 'https://media.istockphoto.com/id/653357686/photo/office-interior-3d-illustration.jpg?s=170667a&w=0&k=20&c=wgNKxOaGrbrHGwGQa8W9Dw6kQOlXgVP1mKqB37xFFG8=',
        },
        {
            title: 'Dignissmos culpa molestiae expedita dolorum.!',
            created_at: '12 December, 2023',
            author: 'Raymond Koto',
            picture: 'https://media.istockphoto.com/id/933471198/id/foto/ruang-kantor.jpg?s=612x612&w=0&k=20&c=JSyVK8qm8tkiT6ckB4GWQlIwuuHpr8_cQcps_9ap3Qk=',
        },
        {
            title: 'Dignissmos culpa molestiae expedita dolorum.!',
            created_at: '12 December, 2023',
            author: 'Raymond Koto',
            picture: 'https://media.istockphoto.com/id/1403573500/id/foto/kantor-rumah-kartun-di-apartemen-modern.jpg?s=612x612&w=0&k=20&c=TiEAdG9NG2eao5hLRmLOsz6CEhLHs7tthtF-XjmVecQ=',
        },

    ];

    return (
        <>
            <Head>
                <title>ARTICLES - ANGGAP AJA TEMEN NGAJAR</title>
            </Head>

            <Header>
                <Header.Title>Our Articles</Header.Title>
                <Header.Body>
                    <header className="text-white">
                        <p className="text-base lg:font-normal md:text-xl leading-relaxed text-muted mt-4 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#" className="underline decoration-sky-500 text-sky-400 font-medium">Dolorem quam</a>, recusandae quis dolorum veritatis nulla, nemo consequuntur temporibus quisquam expedita libero est facere ipsum laboriosam eveniet itaque. Rem, dicta temporibus?</p>
                    </header>
                </Header.Body>
            </Header>

            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:p-16 gap-y-12 sm:gap-x-16 sm:gap-y-16">
                    {posts.map((post, index) => (
                        <div key={index}>
                            <a href='/articles/single'>
                                <img className="shadow hover:shadow-lg transition-shadow duration-300 rounded-xl mb-4 aspect-[4/2.333] w-full object-cover object-center" src={post.picture} alt={post.title} />
                            </a>
                            <a href='/articles/single'>
                                <h1 className="mb-2 sm:mb-4 font-semibold text-black">{post.title}</h1>
                            </a>
                            <div className="lg:flex grid grid-cols-0 items-center font-mono lg:justify-between text-sm text-gray-500">
                                <span>{post.author}</span>
                                <span>{post.created_at}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Web />
        </>
    )
}
