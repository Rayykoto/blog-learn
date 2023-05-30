import React from 'react'
import ApplicationLogo from './ApplicationLogo'

export default function Footer() {
    return (
        <footer className="mt-8 border-t">
            <div className="container">
                <div className="text-center pt-8 -mb-4">
                    <ApplicationLogo />
                </div>
                <div className="flex justify-center py-8">
                    <div className="max-w-lg w-full text-center">
                        Lorem IpsuLorem ipsum dolor sit amet consectetur adipisicing elit.
                        <a href="#" className="underline decoration-sky-500 text-sky-400 font-medium">Dolorem quam</a>,
                        recusandae quis dolorum veritatis nulla, nemo consequuntur temporibus quisquam
                        expedita libero est facere ipsum laboriosam eveniet itaque. Rem, dicta temporibus?
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-gray-950 via-slate-850 to-gray-900 py-4 text-center border-gray-200 border-t">
                <div className="container text-slate-400">&copy; Copyright 2023</div>
            </div>
        </footer>
    )
}
