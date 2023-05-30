import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ArticleBody from '../../Components/ArticleBody';

export default function Single() {
    return (
        <>
            <div>
                <Head>
                    <title>The Best Article In The World</title>
                </Head>
                <Header>
                    <Header.Title>The Best Article In The World</Header.Title>
                    <Header.Body>
                        <header className="text-white">
                            <p className="text-base lg:font-normal md:text-xl leading-relaxed text-muted mt-4 mb-6">Nemo consequuntur temporibus quisquam expedita libero est facere ipsum laboriosam eveniet itaque. Rem, dicta temporibus?</p>
                        </header>
                    </Header.Body>
                </Header>

                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <ArticleBody />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}